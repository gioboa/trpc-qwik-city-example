import type { EndpointHandler } from "@builder.io/qwik-city";
import { resolveTRPCResponse } from "trpc-qwik-city";
import { createContext, router } from "../../../../server/trpc";

export const onGet: EndpointHandler = async ({ request, params }) => {
  const response = await resolveTRPCResponse({
    request,
    params,
    router,
    createContext,
  });
  const json = await response.json();
  return json;
};

export const onPost: EndpointHandler = async ({ request, params }) => {
  const response = await resolveTRPCResponse({
    request,
    params,
    router,
    createContext,
  });
  const json = await response.json();
  return json;
};
