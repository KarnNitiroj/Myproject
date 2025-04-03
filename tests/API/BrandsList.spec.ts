import { test, expect } from "@playwright/test";

test.describe("Positive API Tests", () => {
  test("Get All Brands List API should return valid data", async ({
    request,
  }) => {
    const response = await request.get(
      "https://automationexercise.com/api/brandsList"
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log("Response Body:", responseBody);
    expect(responseBody).toHaveProperty("brands");
    expect(responseBody.brands.length).toBeGreaterThan(0);
  });
});

test.describe("Negative API Tests", () => {
  test("PUT to /brandsList should not be allowed", async ({ request }) => {
    const response = await request.put(
      "https://automationexercise.com/api/brandsList",
      {
        data: { name: "Test Brand" },
      }
    );
    const responseBody = await response.json();
    console.log("Response Body:", responseBody);
    expect(responseBody.responseCode).toBe(405);
    expect(responseBody.message).toBe("This request method is not supported.");
  });
});
