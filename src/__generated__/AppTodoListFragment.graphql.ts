/**
 * @generated SignedSource<<80f152f0ba10330d0b741b936edc4284>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AppTodoListFragment$data = {
  readonly todos: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"AppTodoFragment">;
      } | null;
    } | null> | null;
  } | null;
  readonly " $fragmentType": "AppTodoListFragment";
};
export type AppTodoListFragment$key = {
  readonly " $data"?: AppTodoListFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"AppTodoListFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppTodoListFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
        }
      ],
      "concreteType": "TodoConnection",
      "kind": "LinkedField",
      "name": "todos",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TodoEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Todo",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "AppTodoFragment"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "todos(first:10)"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "e09dc93e89be822bc5e0e0ce273b5ef8";

export default node;
