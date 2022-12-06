export const authreducer1 =(state, action)=>{ 
    switch (action.types) {
        case "auth login":
            return{
                ...action.payload,
                isLogged:true
            }            
        case "auth logout":
            return{
                ...action.payload,
                isLogged:false
            }
        default:
            return state
        
    }
}