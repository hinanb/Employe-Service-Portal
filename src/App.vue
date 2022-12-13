<template>
    
    <v-main>
    <HeaderComponent/>
    <router-view>  </router-view>
    </v-main>
  
</template>

<script>
import HeaderComponent from './components/HeaderComponent';


export default {
  name: 'App',

  components: {    
    HeaderComponent
  },

  data: () => ({
    //
  }),
};
</script>
