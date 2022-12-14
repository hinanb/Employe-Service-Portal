import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import SignUpComponent from './components/SignUpComponent';
import SignInComponent from './components/SignInComponent';
import DashboardView from './components/DashboardView';
import BasicDashboard from './components/BasicDashboard';
import AddTimeSheets from './components/AddTimeSheets';
import ManageTimesheets from './components/ManageTimesheets';
import LeaveManagment from './components/LeaveManagment';
import ApplyForLeave from './components/ApplyForLeave';

Vue.use(VueRouter);

const routes=[
  {path:'/', component:SignInComponent},

  {path:'/Signup', component:SignUpComponent},
  {path:'/Signin', component:SignInComponent},

  {path:'/Dashboard', component:DashboardView},
  
  {path:'/BasicDashboard', component:BasicDashboard},
  {path:'/AddTimeSheets:week', component:AddTimeSheets, name: "AddTimeSheets", props:true},
  {path:'/ManageTimesheets', component:ManageTimesheets},
  {path:'/LeaveManagment', component:LeaveManagment},
  {path:'/ApplyForLeave', component:ApplyForLeave}
  
]
const router = new VueRouter({routes})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
