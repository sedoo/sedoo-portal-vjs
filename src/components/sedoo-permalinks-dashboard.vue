<template>
<v-app class="minimum">
  <v-container >
      <v-row class="pb-5">
       <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#297E9E"  url="https://api.sedoo.fr/aeris-permalink-rest/actuator/info" jsonkey="Statistics.permalinks" label="Permalinks" :step="20" ></SedooDashboardTitle>
        </v-col>

         <v-col cols="12" sm="3" class="pb-8">
            <SedooDashboardTitle color="#90BCD1"  url="https://api.sedoo.fr/aeris-permalink-rest/actuator/info" jsonkey="Statistics.users" label="Utilisateurs" :step="1" ></SedooDashboardTitle>
        </v-col>

       
      
      </v-row>
      
  </v-container>
  </v-app>
</template>

<script>
import SedooDashboardTitle from "./sedoo-dashboard-tile"
export default {
  name: "sedoo-permalinks-dashboard",
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


