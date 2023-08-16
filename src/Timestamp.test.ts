import { epsilonDelay } from "./delays";

describe("Timestamp", () => {
  describe("for the current moment", () => {
    it("should be a positive number", () => {
      const timestamp = Date.now();

      expect(timestamp).toBePositive();
    });

    it("should keep track of time", async () => {
      const firstTimestamp = Date.now();

      await epsilonDelay();

      const secondTimestamp = Date.now();

      expect(secondTimestamp).toBeGreaterThan(firstTimestamp);
    });
  });
});
