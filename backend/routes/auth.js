const express = require('express')
const app = express()
const router = express.Router()
const User = require('../schema/user')
const bcrypt = require('bcrypt')
router.post('/login', async (req,res)=>{
        const {email,password} = req.body
        const emailValid = await User.findOne({email})
        if(!emailValid){
            return res.status(400).send('Email or password is wrong')
        }
        const passwordValid = bcrypt.compareSync(password,emailValid.password)
        if(!passwordValid){
            return res.status(400).send('Email or password is wrong')
        }
})


module.exports = router;


