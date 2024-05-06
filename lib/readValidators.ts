import { MintingPolicy, SpendingValidator } from "lucid/mod.ts";
import { Script } from "lucid/mod.ts";
import blueprint from "~/plutus.json" with { type: "json" };

function readScript(name: string): Script {
  const validator = blueprint.validators.find(
    (v) => v.title === name,
  );

  if (!validator) {
    throw new Error("Validator not found");
  }

  return {
    type: "PlutusV2",
    script: validator.compiledCode,
  };
}

export type Validators = {
  redeem: SpendingValidator;
  giftCard: MintingPolicy;
};

export function readValidators(): Validators {
  return {
    redeem: readScript("oneshot.redeem"),
    giftCard: readScript("oneshot.gift_card"),
  };
}
