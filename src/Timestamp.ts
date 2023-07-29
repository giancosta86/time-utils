import { Milliseconds } from "./durations";

export type Timestamp = Milliseconds;

export function getNowTimestamp(): Timestamp {
  return Date.now();
}
