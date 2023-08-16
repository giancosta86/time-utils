export type Milliseconds = number;

export type Seconds = number;

export type Minutes = number;

export function measureDuration(
  block: () => Promise<unknown>
): Promise<Milliseconds>;

export function measureDuration(block: () => void): Milliseconds;

export function measureDuration(
  block: () => Promise<unknown> | void
): Promise<Milliseconds> | Milliseconds {
  const startInstant = Date.now();

  const blockResult = block();

  return blockResult instanceof Promise
    ? blockResult.then(() => Date.now() - startInstant)
    : Date.now() - startInstant;
}
