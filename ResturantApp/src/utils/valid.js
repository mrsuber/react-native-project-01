const valid =({fullname,email,password,cf_password})=>{
  const err ={}
  if(!fullname){
    err.fullname="Please add your fullname"

  }else if(fullname.length<3){
    err.fullname = "fullname must be atleast 3 characters"
  }

  if(!username){
    err.username="Please add your user name"

  }else if(username.replace(/ /g, '').length>25){
    err.username = "User name is up to 25 characters Long"
  }

  if(!email){
    err.email="Please add your email"

  }else if(!validateEmail(email)){
    err.email = "Email format is incorrect"
  }

  if(!password){
    err.password="Please add your Password"

  }else if(password.length<6){
    err.password = "Password must be atleast 6 characters"
  }

  if(password !== cf_password){
    err.cf_password="Confirm password did not match"


  }
  return{
    errMsg:err,
    errLength:Object.keys(err).length
  }


}


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid
