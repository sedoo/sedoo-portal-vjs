<template>
<v-app class="minimum">
  <v-container >
      <v-row class="pb-5">
       <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#297E9E"  value="100" append="%" label="Findable" :step="10" ></SedooDashboardTitle>
        </v-col>
        <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#90BCD1"  value="100" append="%" label="Accessible" :step="10" ></SedooDashboardTitle>
        </v-col>
         <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#CC9933"  label="Interoperable" :step="10" ></SedooDashboardTitle>
        </v-col>
        <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#B6CC49"  label="Reusable"  ></SedooDashboardTitle>
        </v-col>
      
      </v-row>
      
  </v-container>
  </v-app>
</template>

<script>
import SedooDashboardTitle from "./sedoo-dashboard-tile"
export default {
  name: "sedoo-fair-dashboard",
  components: { SedooDashboardTitle },
  computed: {
   
  },

 props: {
   
  },

  data() {
    return {
    };
  },

  created() {
  
  },

  methods: {
    
  }
};
</script>


