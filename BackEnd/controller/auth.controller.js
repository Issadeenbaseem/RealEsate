import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'


const signup = async (req,res) =>{
    const {username,email,password} = req.body;
    const hashPassword = bcrypt.hashSync(password,10)
    const nameUser = new User({username,email,password:hashPassword});
    
    try {
     
     await nameUser.save();
     res.status(201).json('user create Successfully')
    } catch (error) {
     res.status(500).json(error)
    }
     

  
}

export default signup 

