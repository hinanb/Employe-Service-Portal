<template>
<container>
  <v-row>

  <v-col cols = 3>
  <DashboardView/>
  
  </v-col>
  
  <v-col cols = 9>
    <br><br><br><br><br><br><br><br><br><br><br><br><br>
  <div class="leave-application-form">
  <h2 style="text-align:center;"> Leave Creation Form </h2>
    <form>
      <label>Start Date:</label>
      <input type="date" v-model="startDate" />
      <label>End Date:</label>
      <input type="date" v-model="endDate" />
      <label>Number of Days:</label>
      <input type="number" v-model="numDays" />
      <label>Reason for Leave:</label>
      <textarea v-model="reason"></textarea>
      <button @click.prevent="submitForm">Apply for Leave</button>
    </form>
  </div>
  </v-col>
</v-row>  
</container>
</template>
<script>
import DashboardView from './DashboardView';
import UserPool from "../cognito/UserPool";

export default {
    name : "ApplyForLeave",
    components : {DashboardView},

  data() {
    return {
      userName: "",
      startDate: "",
      endDate: "",
      numDays: "",
      reason: "",
    };
  },
  methods: {
    submitForm() {
      const leaveData = {
        startDate: this.startDate,
        endDate: this.endDate,
        numDays: this.numDays,
        reason: this.reason
      };
      const user = UserPool.getCurrentUser();
      this.userName = user["username"];  
      localStorage.setItem(`${this.userName}-Leaves`, JSON.stringify(leaveData));
      this.$router.push('/LeaveManagment'); 
    },
  },
};
</script>
<style scoped>
.leave-application-form {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
}
.leave-application-form button {
  background-color: #00b894;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>