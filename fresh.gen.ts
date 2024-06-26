// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_middleware from "./routes/api/_middleware.ts";
import * as $api_provider_name_ from "./routes/api/provider/[name].ts";
import * as $api_provider_datum from "./routes/api/provider/datum.ts";
import * as $api_provider_delegation from "./routes/api/provider/delegation.ts";
import * as $api_provider_parameters from "./routes/api/provider/parameters.ts";
import * as $api_provider_txawait from "./routes/api/provider/txawait.ts";
import * as $api_provider_txsubmit from "./routes/api/provider/txsubmit.ts";
import * as $api_provider_utxoByOutRef from "./routes/api/provider/utxoByOutRef.ts";
import * as $api_provider_utxos from "./routes/api/provider/utxos.ts";
import * as $api_provider_utxosWithUnit from "./routes/api/provider/utxosWithUnit.ts";
import * as $index from "./routes/index.tsx";
import * as $CreateGiftCard from "./islands/CreateGiftCard.tsx";
import * as $Oneshot from "./islands/Oneshot.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/_middleware.ts": $api_middleware,
    "./routes/api/provider/[name].ts": $api_provider_name_,
    "./routes/api/provider/datum.ts": $api_provider_datum,
    "./routes/api/provider/delegation.ts": $api_provider_delegation,
    "./routes/api/provider/parameters.ts": $api_provider_parameters,
    "./routes/api/provider/txawait.ts": $api_provider_txawait,
    "./routes/api/provider/txsubmit.ts": $api_provider_txsubmit,
    "./routes/api/provider/utxoByOutRef.ts": $api_provider_utxoByOutRef,
    "./routes/api/provider/utxos.ts": $api_provider_utxos,
    "./routes/api/provider/utxosWithUnit.ts": $api_provider_utxosWithUnit,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/CreateGiftCard.tsx": $CreateGiftCard,
    "./islands/Oneshot.tsx": $Oneshot,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
