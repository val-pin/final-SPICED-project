// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../db/connect";
import Joke from "../../db/models/Joke";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();

  if (req.method === "GET") {
    const jokes: any = await Joke.find();
    return res.status(200).json(jokes);
  } else {
    return res.status(405).json({ Message: "Method not allowed" });
  }
}
