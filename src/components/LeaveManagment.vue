<template>

<container>
  <v-row>
  
  <v-col cols=3>
  <DashboardView/>
  </v-col>

  <v-col cols=9>
  <br><br><br><br><br><br>

  <LeaveStatus vacationsFrom="" vacationsTo="" numberOfDays="1" Approved="true" />
  
  <div class="text-center">
    <router-link to="/ApplyForLeave">
    <v-btn
      rounded
      color="primary"
      dark
    >
      Apply For A Leave
    </v-btn>
    </router-link>
  </div>
  
  </v-col>

</v-row>
  
</container>

</template>

<script>
import DashboardView from './DashboardView';
import LeaveStatus from './LeaveStatus';
import UserPool from "../cognito/UserPool";

export default {
    name: 'LeaveManagment',
    mounted() {
    const user = UserPool.getCurrentUser();
    var userName = user["username"];  
    this.leaveData =  localStorage.getItem(`${userName}-Leaves`);
    console.log(this.leaveData);
    
    },
components: {    
    DashboardView, 
    LeaveStatus
  },
    data: () => ({
      leaveData : {}
    }),
    methods:{
},

}
</script>

<style>

</style>