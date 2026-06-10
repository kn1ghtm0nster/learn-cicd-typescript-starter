import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";

describe("getAPIKey tests", () => {
  test("works as expected", () => {
    const headers = {
      authorization: "ApiKey averylongstringsecrethere1234",
    };
    const result = getAPIKey(headers);
    expect(result).toBe("averylongstringsecrethere1234");
  });

  test("returns null if authorization header is missing", () => {
    const result = getAPIKey({});
    expect(result).toBeNull();
  });

  test("returns null for incorrect authorization header format", () => {
    const invalidHeaders = {
      authorization: "Bearer invalidtoken",
    };

    const result = getAPIKey(invalidHeaders);
    expect(result).toBeNull();
  });
});
