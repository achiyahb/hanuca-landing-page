<template>
  <div class="home">
    <v-card
    height="1300"
    color="#d7d9d8"
    v-show="windowInnerWidth >= 900"
    >
    <desktop-screen

        :windowInnerWidth="windowInnerWidth"
    ></desktop-screen>
    </v-card>
<mobile-screen
    v-show="windowInnerWidth < 900"
    :windowInnerWidth="windowInnerWidth"
></mobile-screen>
  </div>
</template>

<script>
// @ is an alias to /src
import DesktopScreen from "@/components/desktopScreen";
import MobileScreen from "@/components/mobileScreen";
export default {
  name: 'Home',
  components: {
    MobileScreen,
    DesktopScreen,
  },
  data:()=>({
    windowInnerWidth: null
  }),
  methods:{
    checkMode() {
      this.windowInnerWidth = window.innerWidth
      console.log(this.windowInnerWidth)
    },
  },
  created() {
    this.checkMode()
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.checkMode);
    })
  },
}
</script>

<style>
.cont{
  padding-top: 0;
  display: grid;
  grid-template-columns: 55% 45%;
}
</style>