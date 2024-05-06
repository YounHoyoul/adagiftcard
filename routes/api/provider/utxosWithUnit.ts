import { FreshContext } from "$fresh/server.ts";
import { Address } from "lucid/mod.ts";
import { Credential as ProviderCredential } from "lucid/src/types/mod.ts";
import { provider } from "~/lib/getProvider.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const searchParams = _ctx.url.searchParams;
  const unit = searchParams.get("unit")!;
  if (searchParams.has("address")) {
    const address: Address = searchParams.get("address")!;
    return new Response(
      JSON.stringify(await provider.getUtxosWithUnit(address, unit)),
    );
  }

  if (searchParams.has("type") && searchParams.has("hash")) {
    const credential: ProviderCredential = {
      type: searchParams.get("type")! == "Key" ? "Key" : "Script",
      hash: searchParams.get("hash")!,
    };
    return new Response(
      JSON.stringify(await provider.getUtxosWithUnit(credential, unit)),
    );
  }

  return new Response("Unprocessable Content", {
    status: 422,
  });
};
