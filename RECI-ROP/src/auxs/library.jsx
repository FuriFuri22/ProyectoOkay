export const diccionario={
    getUser: async()=>{
        try{
            const req= await fetch ('http://localhost:4024/user')
            const response= await req.json()
            return(response)
        }catch(error){
            console.log(error);
            return{msg: 'error :' +error}
        }
    },       
    createUser: async(username,email,password)=>{
        if(!username || !email || !password){
            return { error: 'Todos los datos son necesarios'}
        }
        const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
       username,
       email,
      password
    });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  try {

    console.log(raw)

   const res = await fetch("http://localhost:4024/user", requestOptions)
    const resjson = await res.json();
    return resjson;
 } catch (error) {
    console.log()
    
    
 }},
    iniciarSesion: async(username,password) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            username,
           
           password
         });
        
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
    try{
        
   
   const res = await fetch("http://localhost:4000/login", requestOptions)
   const resjson = await res.json();
   console.log('logged')
   return resjson;
//    const token = await generarJWT({uid:user._id})
//    res.json(token)
}catch(error){
    console.log(error);
    return{msg: 'error :' +error}
}},
}

