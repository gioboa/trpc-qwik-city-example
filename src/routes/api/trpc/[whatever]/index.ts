import type { EndpointHandler } from "@builder.io/qwik-city";
import { resolveTRPCResponse } from "trpc-qwik-city";
import { router } from "../../../../server/trpc";

export const onGet: EndpointHandler = async ({ request }) => {
  const response = await resolveTRPCResponse({ request, router });
  return await response.json();
};

export const onPost: EndpointHandler = async ({ request }) => {
  const response = await resolveTRPCResponse({ request, router });
  return await response.json();
};
