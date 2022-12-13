<template>

<container>
  <v-row>
  
  <v-col cols=3>
  <DashboardView/>
  </v-col>

  <v-col cols=9>
  <br><br><br><br><br><br>
  <TimeSheetStatus  weekOfMonth="Week 1"/>
  
  <br><br>
  <TimeSheetStatus weekOfMonth="Week 2"/>
  
  <br><br>
  <TimeSheetStatus weekOfMonth="Week 3"/>
  
  <br><br>
  <TimeSheetStatus  weekOfMonth="Week 4"/>
  
  
  
  </v-col>

</v-row>
  
</container>

</template>

<script>
import DashboardView from './DashboardView';
import TimeSheetStatus from './TimeSheetStatus';


export default {
    name: 'ManageTimesheets',
components: {    
    DashboardView, 
    TimeSheetStatus
  },
    data: () => ({  
    }),
    methods:{
},

}
</script>

<style>

</style>