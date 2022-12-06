const jwt = require('jsonwebtoken');

const genaratorJWT = (uid) =>{
    return new Promise((resolve, reject)=>{
        jwt.sign({uid},
            process.env.SECRET,
            {expiresIn: '5h'},
            (err, token)=>{
                if(err){
                    reject('token ñau ñau')
                }

                resolve(token);
            })
    })
}

module.exports = genaratorJWT