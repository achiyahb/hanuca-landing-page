<template>
  <v-card
      color="#536d92"
      min-height="1600"
  >
      <div>
        <prospect-image></prospect-image>
      </div>
      <div
          style="height: 500px;"
      >
        <video-card></video-card>

        <landing-page></landing-page>
      </div>

  </v-card>
</template>

<script>
import LandingPage from "@/components/landingPage";
import VideoCard from "@/components/videoCard";
import ProspectImage from "@/components/prospectImage";
export default {
  name: "desktopScreen",
  components: {
    ProspectImage,
    VideoCard,
    LandingPage
  },
}
</script>

<style scoped>

</style>