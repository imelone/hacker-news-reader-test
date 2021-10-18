import { HashRouter, Route, Switch,Redirect } from "react-router-dom";

//Components
import Home from "./components";
import Story from "./components/Story";

const AppRoutes = () => {
   
    return (<HashRouter >
  
        <Switch>
            <Route exact path="/story/:id" component={Story} />
            <Route
                    path="/:type"
                    render={({ match }) => {
                        const { type } = match.params;
                    
                        if (['top', 'new', 'best'].includes(type)) {
                        
                            return <Home type={type} />;
                        }
                    }}
                />
            <Route path="/" render={() => <Redirect to="/top" />} exact={true} /> 
        </Switch>
    </HashRouter>
    );
}
export default AppRoutes;
