<template>
<container>
  <v-row>

  <v-col cols = 3>
  <DashboardView/>
  
  </v-col>
  
  <v-col cols = 9>
  
  <br> <br><br><br><br><br><br><br><br><br><br><br>
  
  <div class="hours-form">
    <div class="form-header"><h4 >  Submit Timesheet for {{ week }} </h4></div>
    <div class="form-body">
      <div class="form-group" v-for="day in daysOfWeek" :key="day">
        <label>{{ day }}</label>
        <input type="text" v-model="hours[day]" />
      </div>
    </div>
    <div class="form-footer">
      <button @click="submitHours" class="submit-button">Submit Hours</button>
    </div>
  </div>
  
  </v-col>
  
  </v-row>
</container>
</template>

<script>
import DashboardView from './DashboardView';
import UserPool from "../cognito/UserPool";
  
export default {
  name : "AddTimeSheets",
  components: {
        DashboardView
  },
  props: {
    week: {
      type: String,
      required: true
    }
    },
  
  data() {
      
    return {
      weekName: "",
      daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      hours: {
      "Monday": "",
      "Tuesday": "",
      "Wednesday": "",
      "Thursday": "",
      "Friday": "",
      "Saturday": "",
      "Sunday": "",
    },
      userName: ""
    };
  },
  mounted() {
  
  const user = UserPool.getCurrentUser();
  this.userName = user["username"];   
  },
  methods: {
    submitHours() {
      // Save data to local storage
      const user = UserPool.getCurrentUser();
      this.userName = user["username"];  

      localStorage.setItem(`${this.userName}-${this.week}`, JSON.stringify(this.hours));

      this.$router.push('/ManageTimesheets'); 
    }
  }
};
</script>

<style>
.hours-form {
  display: flex;
  flex-direction: row;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  padding: 20px;
  margin: 20px;
}
.form-header {
  font-size: 20px;
  font-weight: bold;
  margin-right: auto;
}
.form-body {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.form-group {
  margin-right: 20px;
}
.form-footer {
  margin-left: auto;
}
.submit-button {
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.2);
  background-color: #eee;
  color: #333;
}
</style>
