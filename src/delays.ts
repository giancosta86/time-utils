import { Milliseconds } from "./durations.js";

const epsilonDelayMillis = 15;

export function delay(milliseconds: Milliseconds): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

export function epsilonDelay(): Promise<void> {
  return delay(epsilonDelayMillis);
}
