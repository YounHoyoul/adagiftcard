import { Blockfrost } from "lucid/mod.ts";

export const provider = new Blockfrost(
  Deno.env.get("BLOCKFROST_NETWORK")!,
  Deno.env.get("BLOCKFROST_PRJECT_ID")!,
);

export const txawaitFetch = async (txHash: string) =>
  await fetch(
    `${Deno.env.get("BLOCKFROST_NETWORK")!}/txs/${txHash}`,
    {
      headers: { project_id: Deno.env.get("BLOCKFROST_PRJECT_ID")! },
    },
  );
