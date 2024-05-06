import { Lucid, Network } from "lucid/mod.ts";
import { CustomProvider } from "~/lib/CustomProvider.ts";

const getLucidNetwork = (network: string): Network => {
  switch (network) {
    case "Preview":
      return "Preview";
    case "Preprod":
      return "Preprod";
    case "Mainnet":
      return "Mainnet";
    default:
      return "Custom";
  }
};

export async function getLucid(network: string) {
  return await Lucid.new(new CustomProvider(), getLucidNetwork(network));
}
