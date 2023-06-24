/**
 * @generated SignedSource<<ea98bda4bb28738b12812146fc3edb37>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppTodoFragment$data = {
  readonly complete: boolean;
  readonly id: string;
  readonly text: string;
  readonly " $fragmentType": "AppTodoFragment";
};
export type AppTodoFragment$key = {
  readonly " $data"?: AppTodoFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppTodoFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppTodoFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "text",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "complete",
      "storageKey": null
    }
  ],
  "type": "Todo",
  "abstractKey": null
};

(node as any).hash = "15a0d8122096952bdc317c135bca663f";

export default node;
