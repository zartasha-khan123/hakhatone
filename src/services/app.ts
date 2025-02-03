export async function FetchData() {
    const response = await fetch("https://your-api-endpoint.com/products"); // Replace with your API URL
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  }
  