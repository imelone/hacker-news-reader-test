import React from "react";
import { HashRouter, Route, Switch,Redirect,useParams, useLocation } from "react-router-dom";
import Home from "./components";
import Header from "./components/Header";
//import ScrollToTop from "./modules/common/ScrollToTop";
//components


const AppRoutes = () => {
   
    return (<HashRouter >

      {/*  <ScrollToTop /> */}
    
        <Switch>
       
      <Route path="/" render={() => <Redirect to="/top" />} exact={true} />
      <Route
            path="/:type"
            render={({ match }) => {
              const { type } = match.params;
            
              if (!['top', 'new', 'best'].includes(type)) {
              
                return <Redirect to="/" />;
              }
              {console.log(type)}
              return <Home type={type} />;
            }}
          />
        </Switch>
    </HashRouter>
    );
}
export default AppRoutes;
