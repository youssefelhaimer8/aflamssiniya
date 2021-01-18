<template>
  <div>
    <router-link
      :to="{
        name: 'Play',
        params: { id: urlvideo },
      }"
    >
      <v-card
        flat
        tile
        outlined
        elevation="11"
        shaped
        class="d-flex align-content-start flex-wrap"
        width="350px"
      >
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          :src="'https://i.ytimg.com/vi/' + urlvideo + '/hqdefault.jpg'"
        ></v-img>
        <div class="typef ">
          <div v-if="typef === 'film'">
            <v-btn x-small rounded color="orange">
              <span> <v-icon>mdi-video</v-icon>مسلسلات </span>
            </v-btn>
            <br />
            <v-btn x-small rounded color="red" :to="'/series/' + randomfilm">
              <span class="ml-5"><v-icon>mdi-play</v-icon>{{ film }}</span>
            </v-btn>
          </div>

          <div v-else>
            <v-btn x-small rounded color="orange">
              <v-icon>mdi-access-point</v-icon>بت مباشر
            </v-btn>
          </div>
        </div>
        <v-chip
          x-small
          class="ma-2 pa-3 views"
          color="red"
          text-color="white"
          style="float:right"
        >
          <v-icon class="">mdi-eye</v-icon> {{ views }}</v-chip
        >

        <div class="icon_play ">
          <v-icon size="80" class="red--text">
            mdi-play
          </v-icon>
        </div>

        <div style="display:flex;width:100%;padding:2px;" class="title_player">
          <p class="greey--text" style="font-size:14px">
            {{ title }}
          </p>
        </div>
      </v-card>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["title", "urlvideo", "views", "typef", "film", "randomfilm"],
};
</script>
<style scoped>
.views {
  position: absolute;
  right: 10px;
}
.icon_play {
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100px;

  margin-top: 80px;
  margin-bottom: auto;
}
.title_player {
  position: absolute;
  bottom: 0px;
  border-top: 1px solid orangered;
  background-color: rgba(162, 147, 147, 0.398);
  padding: 3px;
  color: white;
  border-radius: 10px;
}
.typef {
  position: absolute;
  left: 10px;
  top: 10px;
}
</style>
