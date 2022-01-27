import React,{Component} from 'react';
import PublicRouter from './routes/PublicRouter';
import PrivateRouter from './routes/PrivateRouter';
import isLoggedIn from "./routes/Condition";

class Router extends Component{
    constructor(props){
        super(props);      
    }
        
    render(){    
        return(
            <div>
            {isLoggedIn() ? <PublicRouter />:<PrivateRouter /> }                  
            </div>
        );
    }
}

export default Router;