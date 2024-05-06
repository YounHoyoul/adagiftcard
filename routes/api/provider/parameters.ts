import { FreshContext } from "$fresh/server.ts";
import { provider } from "~/lib/getProvider.ts";

// deno-lint-ignore no-explicit-any
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  return new Response(JSON.stringify(await provider.getProtocolParameters()));
};
