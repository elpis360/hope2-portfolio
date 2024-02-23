import { BlogInterface } from "@/utils/types/blog";
import { NextApiRequest, NextApiResponse } from "next";

const getAllArticlesEndpoint = async (
    req: NextApiRequest,
    res: NextApiResponse<BlogInterface | any>
) => {
    if (req.method === "GET") {

        return res.status(200).json({ message: "api route for get articles" })
    } else if (req.method === "POST") {

        return res.status(201).json({ message: "api route to create article" })
    }
}
export default getAllArticlesEndpoint