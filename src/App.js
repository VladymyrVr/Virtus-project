import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//components
import PrivateLayout from './containers/PrivateLayout';
import AuthorizationPage from './components/pages/AuthorizationPage';
import Home from './components/pages/Home';
import Workflow from './components/pages/Workflow';
import Projects from './components/pages/Projects';
import Users from './components/pages/Users';
import Chat from './components/pages/Chat';
import Setting from './components/pages/Setting';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <Switch>
                        <Route path="/login" component={AuthorizationPage}/>

                        <PrivateLayout exact path='/' component={Home}/>
                        <PrivateLayout exact path='/workflow' component={Workflow}/>
                        <PrivateLayout exact path='/projects' component={Projects}/>
                        <PrivateLayout exact path='/users' component={Users}/>
                        <PrivateLayout exact path='/chat' component={Chat}/>
                        <PrivateLayout exact path='/setting' component={Setting}/>
                    </Switch>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
