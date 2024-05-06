import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { load } from "$std/dotenv/mod.ts";

import Oneshot from "~/islands/Oneshot.tsx";
import { readValidators, Validators } from "~/lib/readValidators.ts";

interface Data {
  validators: Validators;
  envs: Record<string, string>;
}

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const validators = readValidators();
    const envs = await load();

    return ctx.render({ validators, envs });
  },
};

export default function Home({ data }: PageProps<Data>) {
  const { validators, envs } = data;

  return (
    <>
      <Head>
        <title>Ada Gift Card</title>
      </Head>

      <div class="max-w-2xl mx-auto mt-20 mb-10">
        <Oneshot validators={validators} envs={envs} />
      </div>
    </>
  );
}
