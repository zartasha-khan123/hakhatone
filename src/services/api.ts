
'use server'

import { client } from "../../sanityClient";

// import { client } from "../../sanityClient.ts"

export async function FetchData() {
  try {
    const response = await client.fetch(`*[_type == "product"]{
      name,
      "category": category->name,
      slug,
      price,
      quantity,
      tags,
      description,
      features,
      dimensions,
      _id,
      "imageUrl": image.asset->url,
  
    }`)

    // console.log(response);  // Log the response to check the structure
    return response
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

