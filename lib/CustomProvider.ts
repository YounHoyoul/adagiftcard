import {
  Credential as LucidCredential,
  OutRef,
} from "lucid/src/types/types.ts";
import { Provider } from "lucid/mod.ts";
import {
  Address,
  Datum,
  DatumHash,
  Delegation,
  ProtocolParameters,
  RewardAddress,
  Transaction,
  TxHash,
  Unit,
  UTxO,
} from "lucid/mod.ts";

export class CustomProvider implements Provider {
  async getProtocolParameters(): Promise<ProtocolParameters> {
    return (await fetch(`/api/provider/parameters`)).json();
  }

  async getUtxos(
    addressOrCredential: Address | LucidCredential,
  ): Promise<UTxO[]> {
    if (typeof addressOrCredential === "string") {
      return (await fetch(`/api/provider/utxos?address=${addressOrCredential}`))
        .json();
    }

    return (await fetch(
      `/api/provider/utxos?type=${addressOrCredential.type}&hash=${addressOrCredential.hash}`,
    )).json();
  }

  async getUtxosWithUnit(
    addressOrCredential: Address | LucidCredential,
    unit: Unit,
  ): Promise<UTxO[]> {
    if (typeof addressOrCredential === "string") {
      return (await fetch(
        `/api/provider/utxosWithUnit?address=${addressOrCredential}&unit=${unit}`,
      )).json();
    }

    return (await fetch(
      `/api/provider/utxosWithUnit?type=${addressOrCredential.type}&hash=${addressOrCredential.hash}&unit=${unit}`,
    )).json();
  }

  async getUtxoByUnit(unit: Unit): Promise<UTxO> {
    return (await fetch(`/api/provider/utxoByUnit?unit=${unit}`)).json();
  }

  async getUtxosByOutRef(outRefs: OutRef[]): Promise<UTxO[]> {
    return (await fetch(
      `/api/provider/utxoByOutRef?outrefs=${JSON.stringify(outRefs)}`,
    )).json();
  }

  async getDelegation(rewardAddress: RewardAddress): Promise<Delegation> {
    return (await fetch(
      `/api/provider/delegation?rewardAddress=${rewardAddress}`,
    )).json();
  }

  async getDatum(datumHash: DatumHash): Promise<Datum> {
    return (await fetch(`/api/provider/datum?datumHash=${datumHash}`)).json();
  }

  awaitTx(txHash: TxHash, checkInterval?: number): Promise<boolean> {
    checkInterval = 20000;

    return new Promise((res) => {
      const confirmation = setInterval(async () => {
        const isConfirmed: boolean = await fetch(
          `/api/provider/txawait?txHash=${txHash}`,
        ).then((res) => res.json());
        if (isConfirmed) {
          clearInterval(confirmation);
          await new Promise((res) => setTimeout(() => res(1), 1000));
          return res(true);
        }
      }, checkInterval);
    });
  }

  async submitTx(tx: Transaction): Promise<TxHash> {
    return (await fetch(`/api/provider/txsubmit?tx=${tx}`)).json();
  }
}
