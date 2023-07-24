import { Milliseconds } from "./durations.js";

export type Timestamp = Milliseconds;

export function getNowTimestamp(): Timestamp {
  return Date.now();
}
