const User=require('../models/usermodel')


exports.userRegister = async (req, res) => {
    const { email } = req.body;

    try {
        // Check if user with the same email already exists
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ error: 'User already exists with this email' });
        }

        // If user doesn't exist, create a new user
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).send(error.message);  
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (!user) {
            return res.status(404).json({ message: 'User not found or invalid password' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).json({ message: `Login API failed: ${error.message}` });
    }
};