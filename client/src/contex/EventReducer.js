export default (state,action)=>{
    switch(action.type){
        
        case "GET_ALL_EVENTS":
            return{
                ...state,
                loading:true
            }
        default:
            return state
    }
}