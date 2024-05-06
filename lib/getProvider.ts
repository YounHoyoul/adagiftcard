import { Blockfrost } from "lucid/mod.ts";
import { load } from "$std/dotenv/mod.ts";
const envs = await load();

export const provider = new Blockfrost(
  envs["BLOCKFROST_NETWORK"],
  envs["BLOCKFROST_PRJECT_ID"],
);

export const txawaitFetch = async (txHash: string) =>
  await fetch(
    `${envs["BLOCKFROST_NETWORK"]}/txs/${txHash}`,
    {
      headers: { project_id: envs["BLOCKFROST_PRJECT_ID"] },
    },
  );
