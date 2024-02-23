import { NextApiRequest, NextApiResponse } from "next";

const getSingleProject = async(req:NextApiRequest,res:NextApiResponse)=>{
    const {id}= req.query
    if(req.method === "GET"){
        return res.status(200).json({message:`api route for  project with id ${id}`})
    }else {
        res.setHeader("Allow",["GET"])
        return res.status(401).json({error:`Method ${req.method}not allowed`})
    }
}


export default getSingleProject