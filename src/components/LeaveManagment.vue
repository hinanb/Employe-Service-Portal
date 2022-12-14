<template>

<container>
  <v-row>
  
  <v-col cols=3>
  <DashboardView/>
  </v-col>

  <v-col cols=9>
  
  <br><br><br><br><br><br>
  
  <div v-for="leave in this.leaveData" :key="leave.startDate"> 
  <LeaveStatus :vacationsFrom="leave.startDate" :vacationsTo="leave.endDate" :numberOfDays = "leave.numDays" Approved="Not Approved" />

  </div>
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

    this.leaveData = JSON.parse(localStorage.getItem(`${userName}-AllLeaves`));
    console.log(this.leaveData);

 

    
    },
components: {    
    DashboardView, 
    LeaveStatus
  },
    data: () => ({
      leaveData : []
    }),
    methods:{
},

}
</script>

<style>

</style>