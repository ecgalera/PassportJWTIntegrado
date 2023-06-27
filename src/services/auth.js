import bcrypt from "bcrypt";
import passport from "passport";
import jwt from "jsonwebtoken";

// CreateHash-------------------------------------
export const createHash = async(password) =>{
    const salts = await bcrypt.genSalt(10);
    return  bcrypt.hash(password, salts)
}

// ValidatePassword -----------------------------
export const validatePassword = (password, hashedPassword) =>{
    return bcrypt.compare(password, hashedPassword)
}

// generateToken ---------------------------------
export const generateToken = (user) =>{
        return jwt.sign(user, "jwtSecret", {expiresIn:"1d"})
}

// passportCall ---------------------------------

