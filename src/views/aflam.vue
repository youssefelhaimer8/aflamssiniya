<template>
  <container class="home pa-2  col-md-12">
    <h3 class="p"><v-icon>mdi-access-point</v-icon> مسلسلات</h3>
    <v-container>
      <v-layout wrap row justify-space-around class="">
        <div v-if="!FatchData">
          <v-alert
            border="right"
            color="purple"
            dense
            elevation="22"
            outlined
            prominent
            text
            type="error"
            >لا يوجد أي فيديوات حالياً حاول لاحقاً</v-alert
          >
          <Err />
        </div>
        <div v-else-if="!FatchData.length">
          <v-layout wrap row justify-space-around class=" ">
            <v-flex v-for="n in 8" :key="n">
              <v-sheet class="pa-3">
                <v-skeleton-loader
                  class="mx-auto"
                  width="300"
                  type="card"
                ></v-skeleton-loader>
              </v-sheet>
            </v-flex>
          </v-layout>
        </div>
        <Post
          v-else
          v-for="(index, item) in FatchData"
          :key="item"
          :views="index.views"
          :title="index.title"
          :urlvideo="index.urlvideo"
          :typef="index.type"
          :film="index.film"
          :randomfilm="index.randomfilm"
          style="margin-top:10px"
        />
      </v-layout>
    </v-container>
  </container>
</template>
<script>
import Post from "@/components/posts/post.vue";
import Err from "@/components/svg/error.vue";
export default {
  components: {
    Err,
    Post,
  },
  data() {
    return {
      FatchData: [],
    };
  },

  created() {
    this.$http
      .get("/film")

      .then((result) => {
        this.FatchData = result.data;
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
