<template>


    <div class="cont ma-5">
      <div
          style="height: 500px;margin-left: 0.5em"
      >
        <v-card
            color="#536d92"
        >
        <prospect-image></prospect-image>
        </v-card>
      </div>
      <div
          style="height: 500px; margin-right: 0.5em"
      >
        <v-card
            color="#536d92"
        >
        <landing-page
        style="padding-top: 2rem;"
        ></landing-page>
        </v-card>
          <v-card
              color="#536d92"
          >
        <video-card></video-card>
          </v-card>
      </div>
    </div>

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