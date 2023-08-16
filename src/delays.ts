import { Milliseconds } from "./durations";

const epsilonDelayMillis = 15;

export function delay(milliseconds: Milliseconds): Promise<void> {
  return new Promise<void>(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

export function epsilonDelay(): Promise<void> {
  return delay(epsilonDelayMillis);
}

export function syncDelay(milliseconds: Milliseconds): void {
  const startMillis = Date.now();

  while (Date.now() - startMillis < milliseconds) {
    //Just do nothing
  }
}
