const bcrypt = require("bcrypt")
const User = require("../models/user");

exports.signup = async(req,res)=>{

    try {
        const {name,email,password,role} = req.body;
        const existingUser = await User.findOne({email})
        
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User allready exist",
            })
        }
       
        let haspassword;

        try {

            haspassword = await bcrypt.hash(password,10)
            
        } catch (error) {
            return res.status(500).json({
                status:false,
                message:"error in hasing password"
            })
        }

       const user = await User.create({name,email,password,role})

       return res.status(200).json({
         success:true,
         message:"user created successfuly"
       })

    } catch (error) {

        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Please try again letter"
        })
        
    }
}