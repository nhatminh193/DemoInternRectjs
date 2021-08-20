export function loginAction(params) {
    return{
        type:"LOGIN_REQUEST",
        payload: params,
    }  
}
export function logoutAction(prams){
    return{
        type:"LOGOUT_REQUEST",
        payload: prams,
    }
}
export function getUserInfoAction(params){
    return{
        type:"GET_USER_INFO_REQUEST",
        payload: params,
    }
}