const express = require('express')
const app = express()
const router = express.Router()
const User = require('../schema/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const emailValid = await User.findOne({ email })
        if (!emailValid) {
            return res.status(400).send('Email or password is wrong')
        }
        const passwordValid = bcrypt.compareSync(password, emailValid.password)
        if (!passwordValid) {
            return res.status(400).send('Email or password is wrong')
        }
        const token = jwt.sign({ id: emailValid._id }, process.env.PRIVATE_KEY)
        res.status(201).json({
            email: emailValid.email,
            token
        })
    }
    catch (e) {
        res.status(400).json({
            message: e.message
        })
    }
})

router.post('/register', async (req, res) => {
    const { name, email, password, password2 } = req.body;    // we can ignore the password2, because it is not a good practise
    try {
        const userExists = await User.findOne({ email })
        if (userExists) {
            return res.status(400).json({
                message: 'User already exists'
            })
        }
        const hashPassword = await bcrypt.hash(password, 10);  // hash the passowrd
        const user = await User.create({ name, email, password: hashPassword });   //either use const user = new User({destructed variables})
        const token = jwt.sign({ id: user._id }, process.env.PRIVATE_KEY,{ expiresIn: '1h' })   //The jwt.sign() method usually requires a payload object, not a user document. You should be passing an object with selected properties (like user.id) rather than the entire user object.

        return res.status(201).json({
            email: user.email,
            token
        })

    } catch (e) {
        return res.status(400).json({
            message: e.message
        })
    }
});

module.exports = router;


