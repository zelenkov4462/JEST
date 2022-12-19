import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", function () {
  test("work with empty state", () => {
    expect(getCounterValue({})).toBe(0);
  });

  test("work with filled state", () => {
    expect(
      getCounterValue({
        counter: {
          value: 100,
        },
      })
    ).toBe(100);
  });
});
