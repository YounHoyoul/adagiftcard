import {
  Lucid,
  // Maestro,
  // MaestroSupportedNetworks,
  Network,
} from "lucid/mod.ts";
import { CustomProvider } from "~/lib/CustomProvider.ts";

const getLucidNetwork = (envs: Record<string, string>): Network => {
  switch (envs["LUCID_NETWORK"]) {
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

// const getMaestroNetwork = (
//   envs: Record<string, string>,
// ): MaestroSupportedNetworks => {
//   switch (envs["MAESTRO_NETWORK"]) {
//     case "Preview":
//       return "Preview";
//     case "Preprod":
//       return "Preprod";
//     default:
//       return "Mainnet";
//   }
// };

export async function getLucid(envs: Record<string, string>) {
  // if (envs["LUCID_PROVIDER"] == "Maestro") {
  //   return await Lucid.new(
  //     new Maestro({
  //       network: getMaestroNetwork(envs), // For MAINNET: "Mainnet".
  //       apiKey: envs["MAESTRO_API_KEY"], //kFfvh2eES5vX6aId5ycWhvCud64s1h4W
  //       turboSubmit: false,
  //     }),
  //     getLucidNetwork(envs),
  //   );
  // }

  return await Lucid.new(new CustomProvider(), getLucidNetwork(envs));
}
