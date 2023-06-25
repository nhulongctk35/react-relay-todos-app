/**
 * @generated SignedSource<<74e4580a76dbcb783e2fb70e5834d35a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoFooter_user$data = {
  readonly completedCount: number;
  readonly totalCount: number;
  readonly userId: string;
  readonly " $fragmentType": "TodoFooter_user";
};
export type TodoFooter_user$key = {
  readonly " $data"?: TodoFooter_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoFooter_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoFooter_user",
  "selections": [
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "completedCount",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "60d6eeb10af3d8daf6eabb80584f64f6";

export default node;
