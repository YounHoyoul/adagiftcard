import { FreshContext } from "$fresh/server.ts";
import { txawaitFetch } from "~/lib/getProvider.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const isConfirmed = await txawaitFetch(_ctx.url.searchParams.get("txHash")!)
    .then((res) => res.json());

  if (isConfirmed && !isConfirmed.error) {
    return new Response("true");
  }

  return new Response("false");
};
