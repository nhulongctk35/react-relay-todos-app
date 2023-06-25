/**
 * @generated SignedSource<<97f528a615b8c57de114a755a27b12dd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ChangeTodoStatusInput = {
  clientMutationId?: string | null;
  complete: boolean;
  id: string;
  userId: string;
};
export type ChangeTodoStatusMutation$variables = {
  input: ChangeTodoStatusInput;
};
export type ChangeTodoStatusMutation$data = {
  readonly changeTodoStatus: {
    readonly todo: {
      readonly complete: boolean;
    };
    readonly user: {
      readonly completedCount: number;
      readonly id: string;
      readonly totalCount: number;
    };
  } | null;
};
export type ChangeTodoStatusMutation = {
  response: ChangeTodoStatusMutation$data;
  variables: ChangeTodoStatusMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "complete",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
    (v3/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ChangeTodoStatusMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ChangeTodoStatusPayload",
        "kind": "LinkedField",
        "name": "changeTodoStatus",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "todo",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          },
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ChangeTodoStatusMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "ChangeTodoStatusPayload",
        "kind": "LinkedField",
        "name": "changeTodoStatus",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "todo",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "792e745c334f24cd29242f5cf9bb64f0",
    "id": null,
    "metadata": {},
    "name": "ChangeTodoStatusMutation",
    "operationKind": "mutation",
    "text": "mutation ChangeTodoStatusMutation(\n  $input: ChangeTodoStatusInput!\n) {\n  changeTodoStatus(input: $input) {\n    todo {\n      complete\n      id\n    }\n    user {\n      id\n      completedCount\n      totalCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "bbb140c80a4cd53eb6a6514d8ecd2062";

export default node;
