import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {PrivateRoute,PrivateScreen,LoginScreen,RegisterScreen,ForgotPasswordScreen,ResetPasswordScreen} from './components'

const App=()=> {
  return (
    <Router>
      <div className='App'>
        <Switch>
            <PrivateRoute exact path="/" component={PrivateScreen}/>


            <Route exact path="/login" component={LoginScreen}/>
            <Route exact path="/register" component={RegisterScreen}/>
            <Route exact path="/forgotpassword" component={ForgotPasswordScreen}/>
            <Route exact path="/passwordreset/:resetToken" component={ResetPasswordScreen}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
