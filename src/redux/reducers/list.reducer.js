const initialState = {
    list:{
        data:[],
        load: false,
        error:'',
    }
}
export default function listReducer(state = initialState, action ){
    switch(action.type){
        case 'GET_LIST_REQUEST':{
            return{
                ...state,
                list:{
                    ...state.list,
                    load: true
                }
            }
        }
        case 'GET_LIST_SUCCESS':{
            const {data} = action.payload;
            return {
                ...state,
                list:{
                    ...state.list,
                    data: data,
                    load: false
                }
            }
        }
        case 'GET_LIST_FAIL':{
            const {error} = action.payload;
            return{
                ...state,
                   list:{
                       ...state.list,
                       load: false,
                       error: error

                   }
            }

        }
        default: {
            return state;
          }
    }

}