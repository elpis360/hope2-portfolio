import { NextApiRequest, NextApiResponse } from "next";

const getSingleArticleEndpoint =async( req:NextApiRequest,res:NextApiResponse)=>{
    let {param} = req.query

    if (req.method === 'GET'){
    console.log(param)
    return res.status(200).json({message:`blog post ${param}`})
    }else{
    res.setHeader("Allow",["GET"]);
    return res.status(405).json({error:`Method  ${req.method} not allowed`})
    }
}

export default getSingleArticleEndpoint