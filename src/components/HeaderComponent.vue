<template>
<v-toolbar>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>ESS Plus</v-toolbar-title>

    <v-col cols="4.5">
    </v-col>

    <div class="center">
                    <v-img src="https://syshcm.visionetsystems.com/Logo/systems.png" width="150px" />
                
            </div>
      <v-spacer></v-spacer>


      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      

      <v-btn icon v-on:click="logOut">
      Logout
      </v-btn>

    </v-toolbar>
</template>

<script>
import UserPool from "../cognito/UserPool";

export default {
  name: 'HeaderComponent',

  components: {
    
  },

  data: () => ({
    //
  }),
  methods:{
  
  logOut(){
    const user = UserPool.getCurrentUser();
    if (user) {
        console.log(user); 
        user.signOut();
        this.$router.push("/Signin");
    }
  }

  }

}
</script>

<style>

</style>