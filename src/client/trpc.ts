import type { Router } from "../server/trpc";
import * as trpc from "@trpc/client";
import type { inferProcedureInput, inferProcedureOutput } from "@trpc/server";
import trpcTransformer from "trpc-transformer";

const url =
  typeof window === "undefined" ? "/api/trpc" : "http://localhost:3000/trpc";

export default (loadFetch?: typeof fetch) =>
  trpc.createTRPCClient<Router>({
    url: loadFetch ? "/api/trpc" : url,
    transformer: trpcTransformer,
    ...(loadFetch && { fetch: loadFetch }),
  });

type Query = keyof Router["_def"]["queries"];
type Mutation = keyof Router["_def"]["mutations"];

export type InferQueryOutput<RouteKey extends Query> = inferProcedureOutput<
  Router["_def"]["queries"][RouteKey]
>;
export type InferQueryInput<RouteKey extends Query> = inferProcedureInput<
  Router["_def"]["queries"][RouteKey]
>;
export type InferMutationOutput<RouteKey extends Mutation> =
  inferProcedureOutput<Router["_def"]["mutations"][RouteKey]>;
export type InferMutationInput<RouteKey extends Mutation> = inferProcedureInput<
  Router["_def"]["mutations"][RouteKey]
>;
