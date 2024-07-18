import userModel from "../Models/userModel.js";
import bcrypt from 'bcrypt';

export const register =  async (req,res) =>{
    try {
        const {username , email, password } = req.body;
        
        //validation
        if(!username || !email || !password){
            return res.status(400).send({
                success:false,
                message: 'Please fill all the details'
            })
        }

        //existing User
        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(300).send({
                success: false,
                message: 'User already Exist'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new userModel({ username, email, password: hashedPassword });  
        await user.save();

        return res.status(201).send({
            success: true,
            message: 'User created Successfully',
            user
        })

    }  catch(error){
        console.log(error);
        return res.status(500).send({
            message : "Something Went Wrong",
            success: false,
            error
        })
    }

}



export const user = async (req,res)=>{
     try{
        const users = await userModel.find({})
        if(users.length > 0 ){
            return res.status(200).send({
                userCount: users.length,
                success: true,
                message: 'All Users',
                users,
            })
        }
        else {
            return res.status(200).send({
                userCount: 0,
                success: true,
                message: 'No Data found'
            })
        }
        
     }  catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message: 'something went wrong',
        })
     }  
}

export const login = async (req,res) => {
    try{
        const {email, password} = req.body;
        
        if(!email || !password){
            return res.status(400).send({
                success: false,
                message: 'Please provide email and password'
            })
        }
        
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(200).send({
                success:false,
                message: 'User not register'
            })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(200).send({
                success: false,
                message: 'Invalid username or password'
            })
        }
        
        return res.status(200).send({
            success:true,
            message: 'User is Logged in Successfully',
            user
        })  

    } catch(error){
        return res.status(500).send({
            success:false,
            message:'Something went wrong'
        })
    }
}


