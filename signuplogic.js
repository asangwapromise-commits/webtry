app.post("/signup", async (req, res) => {
    const { fullname, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({
            fullname,
            email,
            password: hashedPassword
        });

        await user.save();
        res.send("User registered successfully!");
    } catch (err) {
        res.send("Email already exists!");
    }
});
