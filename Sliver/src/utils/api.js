export const fetchNutritionInfo = async (barcode) => {
  console.log("📡 Fetching data for barcode:", barcode); // Debug Log

  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    );
    const data = await response.json();

    console.log("📦 API Response:", data); // Debug Log

    if (data.status === 1) {
      return {
        name: data.product.product_name || "Unknown Product",
        calories: data.product.nutriments["energy-kcal"] || "N/A",
        protein: data.product.nutriments["proteins"] || "N/A",
        fat: data.product.nutriments["fat"] || "N/A",
        carbs: data.product.nutriments["carbohydrates"] || "N/A",
        sugar: data.product.nutriments["sugars"] || "N/A",
      };
    } else {
      return { name: "Not Found", calories: "N/A", protein: "N/A", fat: "N/A", carbs: "N/A", sugar: "N/A" };
    }
  } catch (error) {
    console.error("❌ Error fetching product data:", error);
    return { name: "Error", calories: "N/A", protein: "N/A", fat: "N/A", carbs: "N/A", sugar: "N/A" };
  }
};
