const userModel = require('../models/user')

const loginController = async (req,res) => {
   
    const {email, password} = req.body;
    

 const User = await userModel.findOne({email: email, password: password});

if(User){
    return res.json({success: "User is found"});
}
else{
    return res.json({failure: "User is not found"});
}

    // console.log("EMAIL RECEIVED : ", email);
    // console.log("PASSWORD RECEIVED : ", password);
    // res.status(200).send("EMAIL RECEIVED");


}

module.exports = loginController;