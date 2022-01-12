

exports.signup = (req,res)=>{
    if(!req.body){
        res.status(406).json({err:"You have to fille"})
    }
    
    try {
        let {email,password,conformPassword,username} = req.body;
        if(!email || !password || !conformPassword || !username){
            res.status(406).json({err:"You have to fille"})
        }
        if( password.length < 8 ){
            res.status(406).json({err:"password is not strong"})
        }
        if( username.length < 2 ){
            res.status(406).json({err:"choose another username"})
        }
        if( password !== conformPassword ){
            res.status(406).json({err:"password is not matching to conform password"})
        }
        if(! String(email)
        .toLowerCase()
        .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            res.status(406).json({err:"invalid email"})
        }
        
        res.json({email,password,conformPassword,username})
    } catch (error) {
        res.status(500).json({err: error.message || "Error occured"})
    }

}


exports.login = (req,res)=>{

    // store usre data
    try {

        if(!req.body){
            err.status(406).json({err: "fields are empty"});
            return;
        }

        const {email,password} = req.body;

        if(!email || !password){
            return res.status(406).json({err:"Not all fields have been entered"});
        }
        
        res.json({email,password});
    } catch (error) {
        res.status(500).json({err:error.message || "Some error occured"})
    }


}