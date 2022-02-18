import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import {PrivateRoute,PrivateScreen,LoginScreen,RegisterScreen,ForgotPasswordScreen,ResetPasswordScreen} from './components'
//Routing
// import PrivateRoute from "./components/routing/PrivateRoute"
// import Portfolio from './components/screens/portfolio/Portfolio'
// // Screens
// import PrivateScreen from "./components/screens/Admin/PrivateScreen"
// import AdminUser from './components/screens/Admin/components/adminUsers/AdminUser'
// import AdminProdject from './components/screens/Admin/components/adminProdject/AdminProdject'
// import AdminNewProdject from './components/screens/Admin/components/adminProdject/adminNewProdject/AdminNewProdject'
// import AdminEditProdject from './components/screens/Admin/components/adminProdject/adminEditProdject/AdminEditProdject'
// import AdminEditUser from './components/screens/Admin/components/adminUsers/adminEditUser/AdminEditUser'
// import NewUser from './components/screens/Admin/components/adminUsers/newUser/NewUser'
// import Resume from './components/screens/resume/Resume'
// import LoginScreen from "./components/screens/LoginScreen"
// import RegisterScreen from "./components/screens/RegisterScreen"
// import ForgotPasswordScreen from "./components/screens/ForgotPasswordScreen"
// import ResetPasswordScreen from "./components/screens/ResetPasswordScreen"

//prodjects
// import EcomerceSite from './components/prodjects/ecomerce/EcomerceSite'
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
