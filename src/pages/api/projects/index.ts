import { NextApiRequest, NextApiResponse } from "next";

const getAllProjects = async(req:NextApiRequest,res:NextApiResponse)=>{
    if(req.method === "GET"){
        return res.status(200).json({message:"api route for passwordless projects"})
    }
    else {
        res.setHeader("Allow",["POST,GET"])
        return res.status(405).json({error: `Method ${req.method} not allowed`})
}

}
export default getAllProjects