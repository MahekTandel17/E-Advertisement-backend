const roleModel = require("../models/RoleModel");

const getAllRoles = async (req, res) => {
    try {
        const roles = await roleModel.find();
        res.json({
            message: "Roles fetched successfully",
            data: roles
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching roles", error: error.message });
    }
};

const addRole = async (req, res) => {
    try {
        const savedRole = await roleModel.create(req.body);
        res.json({
            message: "Role created successfully",
            data: savedRole
        });
    } catch (error) {
        res.status(500).json({ message: "Error creating role", error: error.message });
    }
};

const deleteRole = async (req, res) => {
    try {
        const deletedRole = await roleModel.findByIdAndDelete(req.params.id);
        if (!deletedRole) {
            return res.status(404).json({ message: "Role not found" });
        }
        res.json({
            message: "Role deleted successfully",
            data: deletedRole
        });
    } catch (error) {
        res.status(500).json({ message: "Error deleting role", error: error.message });
    }
};

const getRoleById = async (req, res) => {
    try {
        const foundRole = await roleModel.findById(req.params.id);
        if (!foundRole) {
            return res.status(404).json({ message: "Role not found" });
        }
        res.json({
            message: "Role fetched successfully",
            data: foundRole
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching role", error: error.message });
    }
};

module.exports = {
    getAllRoles, addRole, deleteRole, getRoleById
};