import history from './utils/history'
import { Router, Switch, Route } from 'react-router-dom';
import { ROUTERS } from './constant/router';
import LoginPage from './page/login';
import ListPage from './page/list';



function BrowserRouter (){
    return(
        <Router history={history}>
            <Switch>
                <Route exact path={ROUTERS.LOGIN} component ={LoginPage}/>
                <Route exact path={ROUTERS.LIST} component={ListPage}/>    
            </Switch>
        </Router>
       
    )
}
export default BrowserRouter;
