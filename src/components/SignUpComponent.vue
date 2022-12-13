<template>

<div  class="diva">
 <br>
      <br>
 <br>
      <br>
 <br>

  <div style="border: 3px solid #f1f1f1;">  
  <div  class="imgcontainer">
  <h1> Signup </h1>
  </div>

  <div class="container">
    <label v-if="waitingForOtp === 'false'" for="uname"><b>Username</b></label>
    <input v-if="waitingForOtp === 'false'" v-model= "username" type="text" placeholder="Enter Username" name="uname" required>

        <label v-if="waitingForOtp === 'false'" for="uname"><b>Email</b></label>
    <input v-if="waitingForOtp === 'false'" v-model= "email" type="text" placeholder="Enter Email" name="email" required>

    <label v-if="waitingForOtp === 'false'" for="psw"><b>Password</b></label>
    <input v-if="waitingForOtp === 'false'" v-model= "password" type="password" placeholder="Enter Password" name="psw" required>

        <label v-if="waitingForOtp === 'true'" for="otp"><b>OTP</b></label>
    <input v-if="waitingForOtp === 'true'" v-model= "otp" type="text" placeholder="Enter OTP" name="otp">
    <button v-if="waitingForOtp === 'true'"  style="color: #00b3ff;" v-on:click="confirmOTP">Verify OTP</button>
    
    <p v-if="otpVerified === 'true'" style="color: green; text-align: center;">OTP Verified Successfully! Account Created </p>
    <p v-if="otpVerified === 'true'" style="color: green; text-align: center;">Please login </p> 
    <router-link to="/Signin"> <button v-if="otpVerified === 'true'"  style="color: #00b3ff;"> Login</button> </router-link>
    
    <button v-if="waitingForOtp === 'false'"  style="color: #00b3ff;" v-on:click="signUp">Create Account!</button>
    <router-link to="/Signin"> <button v-if="waitingForOtp === 'false'"  style="color: #00b3ff;">Already have an account? SignIn</button> </router-link>
    
    </div>
</div>
</div>
</template>

<script>
import UserPool from "../cognito/UserPool";
import { CognitoUserAttribute, CognitoUser } from "amazon-cognito-identity-js";


  export default {
    name: 'SignUpComponent',

    data: () => ({
  username: "", 
  email: "",
  otp: "",
  password: "",
  waitingForOtp: "false",
  otpVerified: "false"
  
    }),
    methods:{
      confirmOTP (){
    
    const user = new CognitoUser({
        Username: this.username,
        Pool: UserPool
       });

    console.log(user);
    user.confirmRegistration(this.otp, true, (err, result) => {
        if (err) {
        console.log('error', err.message);
        }
        this.otpVerified = "true";
        console.log('call result: ' + JSON.stringify(result));
       });

}
      ,
      signUp(){
        this.waitingForOtp = 'true';
    const attributeList = [];
    attributeList.push(
      new CognitoUserAttribute({
        Name: 'email',
        Value: this.email,
      })
    );

UserPool.signUp(this.username, this.password,attributeList, null, (err, data)=>{
    if (err){
        console.log(err);
    }
    console.log(data);
});

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
  background-color: white;
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
