import { delay, epsilonDelay } from "./delays";

describe("Delay", () => {
  it("should actually introduce a delay", async () => {
    const expectedDelayMillis = 60;

    const start = Date.now();

    await delay(expectedDelayMillis);

    const end = Date.now();

    const actualDelayMillis = end - start;

    expect(actualDelayMillis).toBePositive();
  });
});

describe("Epsilon delay", () => {
  it("should actually introduce a delay", async () => {
    const start = Date.now();

    await epsilonDelay();

    const end = Date.now();

    const actualDelayMillis = end - start;

    expect(actualDelayMillis).toBePositive();
  });
});
