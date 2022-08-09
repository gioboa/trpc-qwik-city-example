import * as trpc from "@trpc/server";
import { EventEmitter } from "events";
import { z } from "zod";
import prismaClient from "../prismaClient";

// create a global event emitter (could be replaced by redis, etc)
const ee = new EventEmitter();

export default trpc
  .router()
  .query("list", {
    resolve: () =>
      prismaClient.author.findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          country: true,
        },
        orderBy: [{ firstName: "asc" }],
      }),
  })
  .query("read", {
    input: z.string(),
    resolve: ({ input: id }) => {
      return prismaClient.author.findUnique({
        where: { id },
        select: {
          id: true,
          firstName: true,
        },
      });
    },
  })
  .mutation("save", {
    input: z.object({
      id: z.string(),
      firstName: z.string().min(3).max(50).trim(),
      lastName: z.string().min(3).max(50).trim(),
      country: z.string().max(1000).trim(),
    }),
    resolve: ({ input: { id, ...data } }) =>
      id
        ? prismaClient.author.create({
            data,
            select: { id: true },
          })
        : prismaClient.author.create({ data, select: { id: true } }),
  })
  .mutation("delete", {
    input: z.object({
      firstName: z.string(),
      lastName: z.string(),
    }),
    resolve: ({ input: { firstName, lastName } }) =>
      prismaClient.author
        .delete({
          where: {
            firstName_lastName: {
              firstName,
              lastName,
            },
          },
        })
        .then(() => undefined),
  });
