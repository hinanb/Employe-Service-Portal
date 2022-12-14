<template>
  
  <div class="timesheet-status">
    <div class="week-of-month">  {{ weekOfMonth }}</div>
    <div v-if="isTimesheetFilled" class="timesheet-filled">Timesheet Filled</div>
    <div v-else class="timesheet-not-filled">Timesheet Not Filled</div>

    <router-link :to="'/AddTimeSheets' + weekOfMonth">
  <button v-if="!isTimesheetFilled" class="submit-timesheet-button" >
    Submit Timesheet
  </button>
</router-link>

  </div>
</template>

<script>
import UserPool from "../cognito/UserPool";


export default {
   name: 'TimeSheetStatus',
   components: {    
  },
  data: () => ({
    isTimesheetFilled:false
    }),
  props: {
    weekOfMonth: {
      type: String,
      required: false,
    },
    
  },
  mounted(){
    
const user = UserPool.getCurrentUser();
var userName = user["username"];  
console.log(userName);
var timesheet =  localStorage.getItem(`${userName}-${this.weekOfMonth}`);
if(timesheet){
  this.isTimesheetFilled = true;
}


console.log(timesheet);





  },
  methods: {
    submitTimesheet() {
      // Add code here to handle timesheet submission
    },
  },


};
</script>

<style>
.timesheet-status {
  display: flex;
  flex-direction: row;
  width: 100%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  padding: 16px;
}

.week-of-month {
  flex: 1;
  text-align: center;
  border-radius: 2px;
  background-color: #eee;
  padding: 8px;
}

.timesheet-filled,
.timesheet-not-filled {
  flex: 1;
  text-align: center;
  border-radius: 2px;
  background-color: #eee;
  padding: 8px;
}

.submit-timesheet-button {
   flex: 1;
  background-color: #00bcd4;
  color: white;
  border: none;
  padding: 3px 1px;
  border-radius: 1px;
}
</style>
