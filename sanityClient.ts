// sanityClient.ts
import { createClient } from '@sanity/client';
import dotenv from "dotenv"

dotenv.config()
export const client = createClient({
  projectId: "nis6slnf", // Replace with your project ID
  dataset: 'production',        // Or your dataset name
  apiVersion: '2024-01-04',     // Today's date or latest API version
  useCdn: false,                // Disable CDN for real-time updates
  token: "skqRzjk1FatjKQt1LSAReE5UwTenqLyQWq8VfucEAMx0smG4TMbbCPQOAmJ8YyyUFF2AqyzUuV8Sie1IqxpSPo31SsM9PAbV9b7WS7P9MA04Ai2YwyfKyisikvJc3W2WZtBYQIdQ2AW2VatvGlRycLtjurxD67LaQrwZZkXXf1cLZS0twnbU"
});