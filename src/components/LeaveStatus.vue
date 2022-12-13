<template>
  
  <div class="timesheet-status">
    <div class="week-of-month">From: {{vacationsFrom}} to: {{vacationsTo}}</div>
    <div  class="timesheet-filled">{{numberOfDays}} Days</div>
    <div  class="timesheet-filled">{{Approved}}</div>
    
    
  </div>
</template>

<script>

export default {
   name: 'LeaveStatus',
   components: {    
  },
  props: {
    vacationsFrom: {
      type: String,
      required: true,
    },
    vacationsTo: {
      type: String,
      required: true,
    },
    numberOfDays: {
      type: String,
      required: true,
    },
    Approved: {
      type: Boolean,
      required: true,
    },
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
