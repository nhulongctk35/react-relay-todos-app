/**
 * @generated SignedSource<<c3a7d2cdc5ce4930613a5d07bd3c678b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppQueryFragment$data = {
  readonly id: string;
  readonly totalCount: number;
  readonly userId: string;
  readonly " $fragmentType": "AppQueryFragment";
};
export type AppQueryFragment$key = {
  readonly " $data"?: AppQueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppQueryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppQueryFragment",
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
      "name": "userId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "66f049c9039ba58d283d2f9a70b402d3";

export default node;
