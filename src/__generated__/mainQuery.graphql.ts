/**
 * @generated SignedSource<<846104f2e90c863e859e259cd0f94f67>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type mainQuery$variables = {};
export type mainQuery$data = {
  readonly user: {
    readonly " $fragmentSpreads": FragmentRefs<"AppQueryFragment">;
  } | null;
};
export type mainQuery = {
  response: mainQuery$data;
  variables: mainQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "me"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "mainQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AppQueryFragment"
          }
        ],
        "storageKey": "user(id:\"me\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "mainQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
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
        "storageKey": "user(id:\"me\")"
      }
    ]
  },
  "params": {
    "cacheID": "2e52fc4f2f149ae70c6e51a55362d57d",
    "id": null,
    "metadata": {},
    "name": "mainQuery",
    "operationKind": "query",
    "text": "query mainQuery {\n  user(id: \"me\") {\n    ...AppQueryFragment\n    id\n  }\n}\n\nfragment AppQueryFragment on User {\n  id\n  userId\n  totalCount\n}\n"
  }
};
})();

(node as any).hash = "f280ab5e0bdb062866eb8ac1cd4fac34";

export default node;
