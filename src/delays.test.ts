import { delay, epsilonDelay } from "./delays";
import { getNowTimestamp } from "./Timestamp";

describe("Delay", () => {
  it("should actually introduce a delay", async () => {
    const expectedDelayMillis = 60;

    const start = getNowTimestamp();

    await delay(expectedDelayMillis);

    const end = getNowTimestamp();

    const actualDelayMillis = end - start;

    expect(actualDelayMillis).toBePositive();
  });
});

describe("Epsilon delay", () => {
  it("should actually introduce a delay", async () => {
    const start = getNowTimestamp();

    await epsilonDelay();

    const end = getNowTimestamp();

    const actualDelayMillis = end - start;

    expect(actualDelayMillis).toBePositive();
  });
});
