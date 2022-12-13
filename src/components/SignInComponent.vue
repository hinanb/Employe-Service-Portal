<template>

<div class="diva">
 <br>
      <br>
 <br>
      <br>
 <br>
<div style="border: 3px solid #f1f1f1;">
  <div class="imgcontainer">
  <h1> SignIn </h1>
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input v-model= "username" type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input v-model= "password" type="password" placeholder="Enter Password" name="psw" required>

    <button v-on:click="login"  style="color: #00b3ff;">Sign in!</button>
    <router-link to="/Signup"> <button  style="color: #00b3ff;">Donot have an account? SignUp</button> </router-link >
    
    </div>

  
</div>
</div>
</template>

<script>
import { CognitoUser, AuthenticationDetails} from "amazon-cognito-identity-js";
import UserPool from "../cognito/UserPool";

  export default {
    name: 'SignInComponent',

    data: () => ({
  username: '',
  password: ''
    }),
    methods:{
      login (){

        const cognito_user = new CognitoUser({Username : this.username, Pool : UserPool});
const authDetails = new AuthenticationDetails({Username: this.username, Password: this.password});

cognito_user.authenticateUser(authDetails, {
    onSuccess: (data) => {
        
        console.log("Success", data);
        this.$router.push({path:"/Dashboard"});
    },
    onFailure: (data) => {
        console.log("Failed", data);
    },
    newPasswordRequired: (data) => {
        console.log("new password required", data);
    }

})

        
    }

    }
  }
</script>

<style>

.diva{
  width: 540px;
  float: right;
  vertical-align: bottom;
}

/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: white;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 40%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 3px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
