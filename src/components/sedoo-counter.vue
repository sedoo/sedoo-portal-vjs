<template>
  <div class="sedoo-counter" @click="opentarget()" :style="{ cursor: activeCursor}">
    <div v-if="hasIcon">
     <i :class="icon"></i>
    </div>
    <div  v-if="ok">
    <span v-if="preprend">{{preprend}}</span>{{counter}}<span v-if="append">{{append}}</span>
    </div>
    <div v-else>-</div>
    <div class="sedoo-counter-label" v-if="label">
    {{label}}
    </div>
  </div>
</template>

<script>

export default {
  name: "sedoo-counter",

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
    debugger
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
        if (this.counter+this.step> this.dValue) {
          this.counter = this.dValue;
        } else {
        this.counter=this.counter+this.step;
        }
      } else {
        clearInterval(this.timer);
      }
      
    }
    
  }
};
</script>

