import React from "react";
import { connect } from "react-redux";
import history from "../../utils/history";
import {logoutAction} from "../../redux/actions"
import './header.css'

function HeaderPage(props) {
  const { userInfo,logout } = props;
  return (
    <>
        <div className="container-fulid">
              {userInfo.data?.id ? (
                  <div>
                    <button
                      onClick={() => logout()}
                    >
                      {userInfo.data.name} Đăng xuất
                    </button>
                  </div>
               
              ) : (
                       <button onClick={() => history.push('/')}>Đăng Nhập</button>
              )}
        </div>
     
    </>
  );
}

const mapStateToProps = (state) => {
  const { userInfo } = state.userReducer;
  return {
    userInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logout: (params) => dispatch(logoutAction(params)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(HeaderPage);