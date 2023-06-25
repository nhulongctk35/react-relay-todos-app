/**
 * @generated SignedSource<<02629f42ed0cf6a22904804e64132379>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveCompletedTodosInput = {
  clientMutationId?: string | null;
  userId: string;
};
export type RemoveCompletedTodosMutation$variables = {
  connectionId: string;
  input: RemoveCompletedTodosInput;
};
export type RemoveCompletedTodosMutation$data = {
  readonly removeCompletedTodos: {
    readonly deletedTodoIds: ReadonlyArray<string> | null;
    readonly user: {
      readonly completedCount: number;
      readonly id: string;
      readonly totalCount: number;
    };
  } | null;
};
export type RemoveCompletedTodosMutation = {
  response: RemoveCompletedTodosMutation$data;
  variables: RemoveCompletedTodosMutation$variables;
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
  "name": "deletedTodoIds",
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
      "name": "completedCount",
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
    "name": "RemoveCompletedTodosMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RemoveCompletedTodosPayload",
        "kind": "LinkedField",
        "name": "removeCompletedTodos",
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
    "name": "RemoveCompletedTodosMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RemoveCompletedTodosPayload",
        "kind": "LinkedField",
        "name": "removeCompletedTodos",
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
            "name": "deletedTodoIds",
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
    "cacheID": "4d3a6acb198829c5ed5f748574934211",
    "id": null,
    "metadata": {},
    "name": "RemoveCompletedTodosMutation",
    "operationKind": "mutation",
    "text": "mutation RemoveCompletedTodosMutation(\n  $input: RemoveCompletedTodosInput!\n) {\n  removeCompletedTodos(input: $input) {\n    deletedTodoIds\n    user {\n      id\n      completedCount\n      totalCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "7d8efb0f277ec05ec196dead3857a88c";

export default node;
