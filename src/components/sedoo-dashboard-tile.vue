<template>

    <v-card :color="color" :elevation="2" tile class="sedoo-counter" @click="opentarget()" :style="{ cursor: activeCursor}">
        <v-row>
        <v-col cols="12">
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="text-h2 mb-1 white--text">
                <span v-if="preprend">{{preprend}}</span>{{counter}}<span v-if="append">{{append}}</span>
                </v-list-item-title>
                <v-list-item-subtitle class="white--text text-h5">{{label}}</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
        </v-col>
        </v-row>
    </v-card>
       
</template>

<script>

export default {
  name: "sedoo-dashboard-tile",

  computed: {
    activeCursor: function () {
      if (this.targeturl) {
        return "pointer"
      } else {
        return "default"
      }
    },

    hasIcon: function() {
      if (!this.icon) {
        return false;
      }
      if (this.icon.length==0) {
        return false
      }
      return true
    }
  },

 props: {
   
    value: {
      type: String
    },

     color: {
      type: String
    },

    icon: {
      type: String,
      default:""
    },

    url: {
      type: String
    },

    jsonkey: {
      type: String
    },

    targeturl: {
      type: String
    },

    preprend: {
      type: String
    },
    append: {
      type: String
    },

    speed: {
      type: Number,
      default: 100
    },
    label: {
      type: String
    },

     step: {
      type: Number,
      default: 1
    }
  },

  data() {
    return {
      timer: null,
      counter: 0,
      ok: false,
      dValue: null
    };
  },

  created() {
   if (this.value) {
     this.dValue = this.value
     this.launchAnimation()
   } else {
     this.loadDynamicValue();
   }
  },

  methods: {

    getStyle() {
      if (this.targeturl) {
        return "cursor:pointer";
      }
    },

    opentarget() {
      debugger
      if (this.targeturl) {
        window.open(this.targeturl, "_blank")
      }
    },

    loadDynamicValue() {
      
    this.axios
          .get(
            this.url)
          .then(res => {
            let aux = res.data;
            this.dValue = aux[this.jsonkey]
            this.launchAnimation() 
          }).catch(error => {
            
          });
    },

    launchAnimation() {

     this.ok = true;
    this.timer = setInterval(() => {
      this.increaseCounter();
    }, this.speed);

    },

    increaseCounter() {
      if (this.counter < this.dValue) {
        if (this.counter+Number.parseInt(this.step)> this.dValue) {
          this.counter = this.dValue;
        } else {
        this.counter=Number.parseInt(this.counter)+Number.parseInt(this.step);
        }
      } else {
        clearInterval(this.timer);
      }
      
    }
    
  }
};
</script>

