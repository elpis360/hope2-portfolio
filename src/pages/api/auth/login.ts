import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../../models/User";
import bcrypt from "bcrypt";
import crypto from "crypto";

const PASSWORD = "password";

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const password = String(req.body.password);
    //confirm all fields
    if (!password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (password !== PASSWORD) {
      return res.status(400).json({ error: "Incorrect details" });
    } else {
      const token = crypto.randomBytes(10).toString("hex");
      return res.status(200).json({ token });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: `method ${req.method} is not allowed` });
  }
};

export default signup;
