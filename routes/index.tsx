import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";

import Oneshot from "~/islands/Oneshot.tsx";
import { readValidators, Validators } from "~/lib/readValidators.ts";

interface Data {
  validators: Validators;
  network: string;
  checkInterval: number;
}

export const handler: Handlers<Data> = {
  GET(_req, ctx) {
    const validators = readValidators();
    const network = Deno.env.get("NETWORK")!;
    const checkInterval = parseInt(Deno.env.get("CALL_INTERVAL_MILLISECONDS")!);

    return ctx.render({ validators, network, checkInterval });
  },
};

export default function Home({ data }: PageProps<Data>) {
  const { validators, network, checkInterval } = data;

  return (
    <>
      <Head>
        <title>Ada Gift Card</title>
      </Head>

      <div class="max-w-2xl mx-auto mt-20 mb-10">
        <Oneshot
          validators={validators}
          network={network}
          checkInterval={checkInterval}
        />
      </div>
    </>
  );
}
