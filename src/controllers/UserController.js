const userModel = require("../models/UserModel.js");
//const mailUtil = require("../utils/MailUtil");
const bcrypt = require("bcrypt");

// Add user (Sign up)
const signup = async (req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        req.body.password = hashedPassword;

        const createdUser = await userModel.create(req.body);

        // Send mail to user
        //await mailUtil.sendingMail(createdUser.email, "Welcome to e-advertisement", "This is a welcome mail");

        res.status(201).json({
            message: "User created successfully",
            data: createdUser
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error creating user",
            error: err.message
        });
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find().populate("roleId");
        res.json({
            message: "Users fetched successfully",
            data: users
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching users", error: err.message });
    }
};

// Get user by ID
const getUserById = async (req, res) => {
    try {
        const foundUser = await userModel.findById(req.params.id);
        if (!foundUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            message: "User fetched successfully",
            data: foundUser
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error fetching user", error: err.message });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await userModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({
            message: "User deleted successfully",
            data: deletedUser
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting user", error: err.message });
    }
};

// Login user (verification)
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUserFromEmail = await userModel.findOne({ email }).populate("roleId");
        
        if (!foundUserFromEmail) {
            return res.status(401).json({ message: "Email not found" });
        }

        const isMatch = bcrypt.compareSync(password, foundUserFromEmail.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        res.status(200).json({
            message: "Login successful",
            data: foundUserFromEmail
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error logging in", error: err.message });
    }
};

module.exports = {
    signup,
    getAllUsers,
    getUserById,
    deleteUser,
    loginUser
};
