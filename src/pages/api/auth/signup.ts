import { NextApiRequest, NextApiResponse } from "next"
import User from "../../../../models/User"
import bcrypt from 'bcrypt'

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const email = String(req.body.email)
        const name = String(req.body.name)
        const password = String(req.body.password)
        //confirm all fields
        if (!email || !name || !password) {
            return res.status(400).json({ error: "All fields are required" })
        }
        //check if there is an existing user with email 
        const maybeUser = await User.findOne({ email })
        if (maybeUser) {
            return res.status(400).json({ error: "user already exists" })
        }

        //hash password using bcryptjs
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            email,
            name,
            password: hashedPassword,
        })
        if(user){
            res.status(201).json({id:user._id,email:user.email,name:user.name})
        }
    } else {
        res.setHeader("Allow", ["POST"])
        return res.status(405).json({ error: `method ${req.method} is not allowed` })
    }
}

export default signup