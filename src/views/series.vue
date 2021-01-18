<template>
  <v-container class="home pa-2  col-md-12">
    <h3 class="p"><v-icon>mdi-access-point</v-icon> مسلسل {{ title }}</h3>
    <v-container>
      <!-- <p>ads by google</p>
      <Adsense
        style="display:block"
        data-ad-client="ca-pub-9225575939386535"
        data-ad-slot="8473405360"
        data-ad-format="auto"
        data-full-width-responsive="true"
      >
      </Adsense> -->
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
          <v-layout wrap row justify-space-around class="">
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
  </v-container>
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
      param: this.$route.params.id,
    };
  },
  mounted() {
    let timeout = 200;
    if (this.timeout) timeout = this.timeout;
    this.googleInit = setTimeout(() => {
      if (typeof window !== "undefined")
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, timeout);
  },
  destroyed() {
    if (this.googleInit) clearTimeout(this.googleInit);
  },
  created() {
    this.title = atob(this.$route.params.id);
    this.$http
      .get("/series/" + this.param)

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
