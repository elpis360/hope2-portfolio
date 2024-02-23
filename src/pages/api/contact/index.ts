import { NextApiRequest, NextApiResponse } from "next";

const contactUsEndpoint = async(req:NextApiRequest,res:NextApiResponse)=>{
    if (req.method === "POST"){
        console.log(req.body)
        return res.status(200).json("Form submitted successfully")
    }else if
    (req.method === "GET"){
        //select all contact messages and return to the user
        return res.status(200).json({})
    }else{
    res.setHeader("Allow",["GET","POST"])
    return res.status(405).json({error:`Method ${req.method} not allowed`})
    }
}

export default contactUsEndpoint