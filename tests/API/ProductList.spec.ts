import { test, expect } from "@playwright/test";

test.describe("Positive API Tests", () => {
  test("Get All Products List API should return 200 And Products list", async ({ request }) => {
    const response = await request.get(
      "https://automationexercise.com/api/productsList"
    );
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toBeTruthy();
    console.log(responseBody);
  });
});

test.describe("Negative API Tests", () => {
  test("POST to /productsList should not be allowed", async ({ request }) => {
    const response = await request.post(
      "https://automationexercise.com/api/productsList",
      {
        data: { name: "Test Product" },
      }
    );
    const responseBody = await response.json();
    console.log("Response Body:", responseBody);
    expect(responseBody.responseCode).toBe(405);
    expect(responseBody.message).toBe("This request method is not supported.");
  });
});
