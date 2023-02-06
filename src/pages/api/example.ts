// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { example } from "@/services/cohere";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await example();
  res.status(200).json(response);
}
