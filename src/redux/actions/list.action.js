export function getListAction(data){
    return {
        type: "GET_LIST_REQUEST",
        payload: data,
    }
}