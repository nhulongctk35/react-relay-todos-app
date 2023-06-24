/**
 * @generated SignedSource<<53b33d904653677ea1f3a475689532c4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppTodoListQuery$variables = {};
export type AppTodoListQuery$data = {
  readonly user: {
    readonly id: string;
    readonly userId: string;
  } | null;
};
export type AppTodoListQuery = {
  response: AppTodoListQuery$data;
  variables: AppTodoListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": "me"
      }
    ],
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
      }
    ],
    "storageKey": "user(id:\"me\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppTodoListQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppTodoListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "39918eb0ebed7fde9454e4e6d973b070",
    "id": null,
    "metadata": {},
    "name": "AppTodoListQuery",
    "operationKind": "query",
    "text": "query AppTodoListQuery {\n  user(id: \"me\") {\n    id\n    userId\n  }\n}\n"
  }
};
})();

(node as any).hash = "c9770eb6ea6bec9269c0c250ece50c45";

export default node;
