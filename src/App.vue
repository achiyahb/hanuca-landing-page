<template>
  <v-app
  color="#d7d9d8"
  >


    <v-main
    style="margin-top: 0"
    >
<router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
  methods:{
    colorChanger(){
      let labels = document.querySelectorAll('.v-label.theme--light')
      labels.forEach(label =>{
        label.style.color = '#ffce43'
      })

    }

  },
  created() {
    this.$vuetify.rtl = true
  },
  mounted() {
    this.colorChanger()
  }
};
</script>

<style>
  div{
    color:#ffce43;
  }
  button{
    color:#ffce43;
  }
  .custom-label-color .v-label {
    color: white;
    opacity: 1;
  }
  .custom-placeholer-color input::placeholder {
    color: red!important;
    opacity: 1;
  }
  .v-main__wrap{
    padding-top: 0;
    margin-top: 0;
  }
</style>