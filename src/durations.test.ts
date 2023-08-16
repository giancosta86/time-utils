import { delay, syncDelay } from "./delays";
import { measureDuration } from "./durations";

describe("measureDuration()", () => {
  describe("when applied to an async block", () => {
    it("should work", async () => {
      const duration = await measureDuration(async () => {
        await delay(30);
        await delay(30);
        await delay(30);
      });

      expect(duration).toBeGreaterThan(70);
    });
  });

  describe("when applied to a sync block", () => {
    it("should work", () => {
      const duration = measureDuration(() => {
        syncDelay(90);
      });

      expect(duration).toBeGreaterThan(70);
    });
  });
});
