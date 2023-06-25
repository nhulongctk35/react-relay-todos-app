/**
 * @generated SignedSource<<e6c91531f53a011b82e176f905e61ecc>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveTodoInput = {
  clientMutationId?: string | null;
  id: string;
  userId: string;
};
export type RemoveTodoMutation$variables = {
  connectionId: string;
  input: RemoveTodoInput;
};
export type RemoveTodoMutation$data = {
  readonly removeTodo: {
    readonly deletedTodoId: string;
    readonly user: {
      readonly id: string;
      readonly totalCount: number;
    };
  } | null;
};
export type RemoveTodoMutation = {
  response: RemoveTodoMutation$data;
  variables: RemoveTodoMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connectionId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "deletedTodoId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
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
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RemoveTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RemoveTodoPayload",
        "kind": "LinkedField",
        "name": "removeTodo",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "RemoveTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RemoveTodoPayload",
        "kind": "LinkedField",
        "name": "removeTodo",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedTodoId",
            "handleArgs": [
              {
                "items": [
                  {
                    "kind": "Variable",
                    "name": "connections.0",
                    "variableName": "connectionId"
                  }
                ],
                "kind": "ListValue",
                "name": "connections"
              }
            ]
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "67bd87f39c44cb0e98c096e5cc3a3487",
    "id": null,
    "metadata": {},
    "name": "RemoveTodoMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveTodoMutation(\n  $input: RemoveTodoInput!\n) {\n  removeTodo(input: $input) {\n    deletedTodoId\n    user {\n      id\n      totalCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "06db38c5fb2d4deb780586d0e960ba2f";

export default node;
