import { epsilonDelay } from "./delays.js";
import { getNowTimestamp } from "./Timestamp.js";

describe("Timestamp", () => {
  describe("for the current moment", () => {
    it("should be a positive number", () => {
      const timestamp = getNowTimestamp();

      expect(timestamp).toBePositive();
    });

    it("should keep track of time", async () => {
      const firstTimestamp = getNowTimestamp();

      await epsilonDelay();

      const secondTimestamp = getNowTimestamp();

      expect(secondTimestamp).toBeGreaterThan(firstTimestamp);
    });
  });
});
