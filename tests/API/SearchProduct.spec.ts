import { test, expect } from "@playwright/test";

test.describe("Positive API Tests", () => {
  test("POST To/searchProduct returns 200 and searched products list", async ({
    request,
  }) => {
    const searchProduct = "tshirt"; // หรือ 'tshirt', 'jean' หรือคำค้นหาอื่นๆ
    const response = await request.post(
      "https://automationexercise.com/api/searchProduct",
      {
        form: {
          search_product: searchProduct,
        },
      }
    );
    const responseBody = await response.json();
    console.log("Response Body:", responseBody);
    expect(response.status()).toBe(200);
    expect(responseBody).toBeTruthy();
    expect(responseBody.products.length).toBeGreaterThan(0); // expect(responseBody.products[0].product_name).toContain(searchProduct);
  }); // หรือ 'tshirt', 'jean' หรือคำค้นหาอื่นๆ});
});
