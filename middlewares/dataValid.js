const isValid = (req, res, next) => {
    const { username, email, password, number } = req.body;

    // Basic presence check
    if (!username || !email || !password || !number) {
        return res.status(400).send("Enter valid data");
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send("Enter a valid email address");
    }

    // Password length check
    if (password.length < 6) {
        return res.status(400).send("Password must be at least 6 characters long");
    }

    // Phone number format check (example: check for digits and length)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(number)) {
        return res.status(400).send("Enter a valid phone number");
    }

    next();
};

module.exports = isValid;
