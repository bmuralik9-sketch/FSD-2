import express from "express";
import User from "../model/userModel.js"; 

import {
    registerUser,
    loginUser
} from "../controller/userController.js";

const userRegistration = async (req, res) => {
    const { username, email, password } = req.body;
    
    // Validate that all fields are provided
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Please fill all the fields" });
    }
    
    try {
        // 2. Check if a user with this email already exists using the capitalized Model
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // 3. Create and save the new user to the database
        const newUser = await User.create({ 
            username, 
            email, 
            password 
        });

        // 4. Return success along with the newly created user data
        res.status(201).json({ 
            message: "User registered successfully", 
            user: newUser 
        });
    } catch (error) {
        res.status(500).json({ 
            message: "Error registering user", 
            error: error.message 
        });
    }
};

const router = express.Router();

router.post("/register", userRegistration);
router.post("/login", loginUser);

export default router;
