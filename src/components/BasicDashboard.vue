<template>
<container>
<v-row> 

<v-col cols=3>
<DashboardView/>
</v-col>

<v-col cols=9>
<br>
<br><br>

<v-card 
    class="mx-auto text-center justify-center"
    color="green"
    dark
    max-width="1200"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            PKR {{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="text-h4 font-weight-thin">
        Accumulative Expenses Claimed this Year
      </div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn
        block
        text
      >
        Go to Report
      </v-btn>
    </v-card-actions>
  </v-card>

</v-col>

</v-row>

</container>

</template>

<script>
import DashboardView from './DashboardView';



export default {
    name: 'BasicDashboard',
components: {    
    DashboardView
  },
    data: () => ({
       value: [
        7700,
        12000,
        15600,
        15900,
        33000
      ]
    }),
    methods:{
}

}
</script>

<style>

</style>