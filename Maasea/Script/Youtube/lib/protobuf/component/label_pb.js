// @generated by protoc-gen-es v1.7.2
// @generated from file protobuf/component/label.proto (package youtube.component, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message youtube.component.Label
 */
export const Label = proto3.makeMessageType(
  "youtube.component.Label",
  () => [
    { no: 1, name: "runs", kind: "message", T: Run, repeated: true },
  ],
);

/**
 * @generated from message youtube.component.Run
 */
export const Run = proto3.makeMessageType(
  "youtube.component.Run",
  () => [
    { no: 1, name: "text", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

