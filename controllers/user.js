// const User = require("../models/user")

// const createUser = async(req,res)=>{
//     const {email,name}= req.body
//     try{
//         const user = await new User.create({name, email})
//         res.status(201).json({"created":user})
//     }
//     catch(err){
//         res.status(400).json({"error":err})
//     }

// }

// module.exports = {createUser}
const User = require("../models/user");
const getUser = async(req,res)=>{
try{
    const users = await User.find({})
res.status(200).json({"Succes":users})
}catch(err){
    res.status(400).json({"Error":err})
}
}
const createUser = async (req, res) => {
    const { email, name } = req.body;

    try {
        const user = await User.create({ name, email });
        res.status(201).json({ created: user });
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(400).json({ error: err.message }); // Send a more specific error message
    }
};

module.exports = { createUser,getUser };