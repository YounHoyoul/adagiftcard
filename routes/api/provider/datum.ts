import { FreshContext } from "$fresh/server.ts";
import { provider } from "~/lib/getProvider.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  return new Response(
    JSON.stringify(
      await provider.getDatum(_ctx.url.searchParams.get("datumHash")!),
    ),
  );
};
