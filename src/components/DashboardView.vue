<template>
  <div class="ma-60 pa-60">
    
      <v-navigation-drawer
        permanent
      >
        <v-list>
          <v-list-item class="px-15">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Welcome {{username}}!
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
          nav
          
        >
        <router-link to="/BasicDashboard">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </router-link>  
        <router-link to="/ManageTimesheets">
        
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Timesheets Managment</v-list-item-title>
          </v-list-item>
        </router-link> 
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Approvals</v-list-item-title>
          </v-list-item>

        <router-link to="/LeaveManagment">
        
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-party-popper</v-icon>
            </v-list-item-icon>
            <v-list-item-title> Leave Managment</v-list-item-title>
          </v-list-item>
        </router-link>
        
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-cash</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Expense Managment</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-cash</v-icon>
            </v-list-item-icon>
            <v-list-item-title>NWADA</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-gold</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Loan Managment</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-cash-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Payroll Details</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-help-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Help Section</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-alert</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Personal Information</v-list-item-title>
          </v-list-item>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-spotlight-beam</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Systems Spotlight</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-navigation-drawer>
    
  </div>
</template>


<script>
import UserPool from "../cognito/UserPool";


//this.username = user["idToken"]["payload"]["Cognito:username"];
//this.email = user["idToken"]["payload"]["email"];

  export default {
    name: 'DashboardView',

    data: () => ({
      username: '', 
      email: ''
    }),
   
   mounted() {
  const user = UserPool.getCurrentUser();
  this.username = user["username"];  
  }
}
    
  
</script>

