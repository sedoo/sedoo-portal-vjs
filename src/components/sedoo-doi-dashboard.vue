<template>
<v-app class="minimum">
  <v-container >
      <v-row class="pb-5">
       <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#297E9E"  url="https://api.sedoo.fr/aeris-doi-rest/actuator/info" jsonkey="Statistics.Aeris" label="Aeris" :step="20" ></SedooDashboardTitle>
        </v-col>

         <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#90BCD1"  url="https://api.sedoo.fr/aeris-doi-rest/actuator/info" jsonkey="Statistics.Odatis" label="Odatis" :step="10" ></SedooDashboardTitle>
        </v-col>

        <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#CC9933"  url="https://api.sedoo.fr/aeris-doi-rest/actuator/info" jsonkey="Statistics.Theia" label="Theia" :step="10" ></SedooDashboardTitle>
        </v-col>

        <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#B6CC49"  url="https://api.sedoo.fr/aeris-doi-rest/actuator/info" jsonkey="Statistics.Ovgso" label="Ovgso" :step="10" ></SedooDashboardTitle>
        </v-col>
      
      </v-row>
      
  </v-container>
  </v-app>
</template>

<script>
import SedooDashboardTitle from "./sedoo-dashboard-tile"
export default {
  name: "sedoo-doi-dashboard",
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


