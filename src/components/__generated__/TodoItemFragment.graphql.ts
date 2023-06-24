/**
 * @generated SignedSource<<0729ca4535e4331ac0c50fc2c5b706b9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoItemFragment$data = {
  readonly complete: boolean;
  readonly id: string;
  readonly text: string;
  readonly " $fragmentType": "TodoItemFragment";
};
export type TodoItemFragment$key = {
  readonly " $data"?: TodoItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItemFragment",
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

(node as any).hash = "e3ea0865e9abe04b507d8219698a0fed";

export default node;
