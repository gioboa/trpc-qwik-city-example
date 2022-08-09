import type { inferAsyncReturnType } from "@trpc/server";
import * as trpc from "@trpc/server";
import trpcTransformer from "trpc-transformer";
import authors from "./authors";

export const createContext = async () => ({});

export const router = trpc
  .router<inferAsyncReturnType<typeof createContext>>()
  .transformer(trpcTransformer)
  .merge("authors:", authors);

export type Router = typeof router;
