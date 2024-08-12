import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create a new user instance
    const newUser = new User({ fullname, email, hashPassword });

    // Save the new user to the database
    const createdUser = await newUser.save();

    res.status(201).json({
      message: "Account created successfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user exists and include the hashPassword field
    const user = await User.findOne({ email }).select('+hashPassword');
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Debug logging to identify undefined values
    console.log('user:', user);
    console.log('password:', password);
    console.log('user.hashPassword:', user.hashPassword);

    // Compare the password
    const isMatch = await bcryptjs.compare(password, user.hashPassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      }
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
