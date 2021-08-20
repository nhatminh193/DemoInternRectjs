import { useEffect } from "react";
import {getListAction, getUserInfoAction} from "../../redux/actions";
import { connect } from "react-redux";
import HeaderPage from '../../page/header';

function ListPage({getList, list,userInfo,getUserInfo}){
  
  useEffect(()=>{
    getList({
      page: 1,
      limit: 20,
    })
    getUserInfo()
  },[])
  function renderList(){
     if(list.load) return <p>Loading...</p>
       return list.data.map((item)=>{
         if (item.photos[0] && item.photos[0].small){
          return (
              
              <>  
                    <img src={item.photos[0].small} style={{width: 360, height: 240, margin: 10}} />
                </>

                )
              }
       })
   }
  
   return (
     <>
     { userInfo.data.id ?(
       <div> 
            <HeaderPage/> 
           {renderList()}
       </div>
     ):(
       <div>Please Login</div>
     ) 
    }
    </>
   )

}
const mapStateToProps = (state) => {
    const { list,userInfo } = state.listReducer;
    console.log("🚀 ~ file: index.jsx ~ line 40 ~ mapStateToProps ~ userInfo", userInfo)
    return {
      list,
      userInfo
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      getList: (params) => dispatch(getListAction(params)),
      getUserInfo: (params) => dispatch(getUserInfoAction(params)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListPage);