import useDbService from "@/utils/db"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async(req:NextApiRequest,res:NextApiResponse)=>{
    await useDbService().connect()
    return res.status(201).json({message:"seeding data"})
}

export default handler