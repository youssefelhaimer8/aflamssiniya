<template>
  <v-container>
    <v-layout wrap row justify-space-between class="pa-4">
      <v-flex xs12 md7 sm10>
        <v-card class="" style="dispay:flex;height:">
          <div class="ad-container">
            <!-- <p>spons ads :</p>
            <a
              href="//whugesto.net/afu.php?zoneid=2222761"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/play.png" alt="" width="250px" height="300px"
            /></a> -->

            <!-- <Adsense
              data-ad-client="ca-pub-9225575939386535"
              data-ad-slot="5528189542"
              data-ad-format="auto"
              :data-full-width-responsive="true"
            >
            </Adsense> -->
          </div>
          <div v-if="!simpleData">
            <v-alert
              border="right"
              color="orange"
              dense
              elevation="22"
              outlined
              prominent
              text
              type="warning"
              >هدا الفيديو غير موجود أو تم حدفه أو تم إخفاءه</v-alert
            >
            <Err />
          </div>
          <div v-if="!FatchData.length">
            <v-sheet class="pa-">
              <v-skeleton-loader
                class="mx-auto"
                width="100%"
                type="card-avatar, article, actions,list-item-avatar"
              ></v-skeleton-loader>
            </v-sheet>
          </div>
          <div v-else>
            <h3 class="pa-1 ml-4">{{ simpleData.title }}</h3>
            <v-container class="">
              <div class="">
                <v-img
                  height="250"
                  :src="
                    'https://i.ytimg.com/vi/' +
                      simpleData.urlvideo +
                      '/hqdefault.jpg'
                  "
                ></v-img>
                <!-- <v-container
                  class="mt-8 "
                  style="height:400px;width:auto"
                  v-bind:class="{ active: isActive }"
                  ><v-progress-circular
                    :size="70"
                    :width="7"
                    color="purple"
                    indeterminate
                  ></v-progress-circular>
                  <p class="mt-2">جاري التحميل إنتضر من فضلك</p></v-container
                > -->
                <!-- <div>
                  <v-btn
                    class="ma-3"
                    x-small
                    v-for="(serv, plays) in watchplayer"
                    :key="plays"
                  >
                    الجودة {{ serv.qualityLabel }}
                  </v-btn>
                </div> -->
                <!-- <iframe
                  v-bind:class="{ iframplayer: isActive }"
                  marginheight="1"
                  marginwidth="1"
                  name="cboxmain"
                  id="cboxmain"
                  seamless="seamless"
                  scrolling="no"
                  frameborder="0"
                  width="100%"
                  height="400px"
                  allowFullScreen="true"
                  :src="
                    'https://serie.livebotola.com/video/iframe.php?id=' +
                      simpleData.urlvideo
                  "
                >
                </iframe> -->

                <video
                  v-bind:class="{ videoplayer: videoplayer }"
                  controls
                  rossorigin
                  playsinline
                  width="100%"
                  height="400px"
                  :data-poster="
                    'https://i.ytimg.com/vi/' +
                      simpleData.urlvideo +
                      '/hqdefault.jpg'
                  "
                  id="player"
                >
                  <source :src="jhjhg" type="video/mp4" />
                </video>
              </div>

              <v-btn class="ma-2 views" color="red" text-color="white">
                {{ simpleData.views }} <v-icon>mdi-eye</v-icon></v-btn
              >

              <div class="ifosoc">
                <a href="https://www.facebook.com/mar7abaaaa">
                  <p>
                    تابع صفحتنا عبر الفيسبوك لتواصل بكل جديد
                    <v-icon color="blue">mdi-facebook</v-icon>
                  </p>
                </a>
                <a href="https://www.instagram.com/aflam_siniya/ ">
                  <p>
                    تابعنا عبر الإنستجرام لتواصل بكل جديد
                    <v-icon>mdi-instagram</v-icon>
                  </p>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC0yyWNepMmP0Djf1fxm8XpA"
                >
                  <p>
                    تابعنا عبر اليوتوب
                    <v-icon color="red">mdi-youtube</v-icon>
                  </p>
                </a>
              </div>

              <!-- simple usage -->
              <!-- time is a dateString that can be parsed by Date.parse() -->
              <!-- <timeago :datetime="simpleData.date"></timeago> -->

              <!-- Auto-update time every 60 seconds -->
              <div class="float-left">
                <v-icon :size="12">mdi-clock</v-icon>
                <timeago :datetime="simpleData.date" :auto-update="60">
                </timeago>
              </div>
              <!-- custom locale -->
              <!-- use a different locale instead of the global config -->
              <!-- <timeago :datetime="simpleData.time" locale="zh-CN"></timeago> -->
            </v-container>
          </div>

          <!-- ads  -->
          <hr style="clear:both;width: auto;" />
          <div id="container-3d32b6ba70305fe7c3dd7373c3e75554"></div>
          <p>spons ads :</p>
          <InArticleAdsense
            data-ad-client="ca-pub-9225575939386535"
            data-ad-slot="5528189542"
            data-ad-format="auto"
            :data-full-width-responsive="true"
          >
          </InArticleAdsense>
          <hr style="clear:both;width: auto;" />
        </v-card>
        <v-content class="pa-5">
          <div class="cmnts">
            <v-col cols="12" sm="12">
              <v-textarea
                v-model="cmnts"
                d="CreateTextArea"
                label="علق الأن"
                outlined
                height="100px"
                clearable
              ></v-textarea>

              <v-btn
                x-small
                color="red"
                @click="addcom()"
                class="addcomment pa-3"
                rounded
                outlined
              >
                <v-icon style=" transform: rotate(175deg);">mdi-send</v-icon>
              </v-btn>
            </v-col>
          </div>
          <div>
            <div v-if="!FatchData.length">
              <v-sheet class="pa-1 ma-1" v-for="n in 5" :key="n">
                <v-skeleton-loader
                  class="mx-auto"
                  width="100%"
                  type="list-item-avatar"
                ></v-skeleton-loader>
              </v-sheet>
            </div>
            <v-card
              v-else
              elevation="24"
              outlined
              shaped
              class="pa-1 ma-1"
              v-for="(com, comment) in allcom.slice(0, 15)"
              :key="comment"
            >
              <p class="">{{ com.text }}</p>
              <strong
                class="float-left grey--text"
                size="10"
                style="clear:both;font-size:10px"
              >
                <v-icon :size="14">mdi-clock</v-icon>
                <timeago
                  class="float-left"
                  :datetime="com.date"
                  :auto-update="60"
                ></timeago>
              </strong>
              <br style="clear:both" />
            </v-card>
          </div>
        </v-content>

        <v-container class="pa-1 mt-6">
          تقدم لكم احدث المسلسلات الصينية مترجمة الى اللغة العربية و بشكل حصري
          .⭐️⭐️ 🌟🌟نقدم لكم فيديوهات بدقة عالية الجودة مع ترجمة عالية المستوى
          🌟🌟 مسلسلات متنوعة تلبي جميع اذواق متابعينا ( رومانسي , درامي ,
          تاريخي , رياضي , مدرسي شبابي و غيرها الكثير )
          <v-divider></v-divider>
          <div class="ad-container">
            <p>spons ads :</p>
            <ins
              class="adsbygoogle"
              style="display:block; text-align:center;"
              data-ad-layout="in-article"
              data-ad-format="fluid"
              data-ad-client="ca-pub-9225575939386535"
              data-ad-slot="2689978726"
            ></ins>
          </div>
          <h2 class="red--text">المزيد :</h2>
          <p>
            {{ desc }}
          </p>
          <div class="pa-2">
            <p class="orange--text">مسلسلات :</p>
            <v-btn
              class=" ma-2"
              :to="'/series/' + item.random"
              color="red"
              rounded
              outlined
              v-for="(item, fil) in films"
              :key="fil"
            >
              {{ item.namefilm }}
            </v-btn>
          </div>
        </v-container>
      </v-flex>
      <v-flex xs12 md4 sm10 justify-center>
        <v-card class="pa-3">
          <v-icon>
            mdi-trending-up
          </v-icon>
          باقي الحلقات :
          <v-divider></v-divider>
          <p>spons ads :</p>
          <!-- InFeedAdsense -->
          <ins
            data-ad-format="auto"
            data-ad-layout-key="-fg+5n+6t-e7+r"
            data-ad-client="ca-pub-9225575939386535"
            data-ad-slot="5528189542"
            data-ad-test=""
            class="adsbygoogle"
            style="display: block;"
          ></ins>
          <v-content class="pa-4">
            <div v-if="!FatchData">no</div>
            <div v-else-if="!FatchData.length">
              <v-layout wrap row justify-space-around class=" col-md-12">
                <v-content v-for="n in 4" :key="n">
                  <v-sheet class="pa-3">
                    <v-skeleton-loader
                      class="mx-auto"
                      width="300"
                      type="card"
                    ></v-skeleton-loader>
                  </v-sheet>
                </v-content>
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
          /></v-content> </v-card
      ></v-flex>
    </v-layout>
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></loading>
  </v-container>
</template>
<script>
// import axios from "axios";
import Post from "@/components/posts/random.vue";
import "vue-loading-overlay/dist/vue-loading.css";
import Loading from "vue-loading-overlay";
import Err from "@/components/svg/error.vue";
export default {
  components: {
    Err,
    Loading,
    Post,
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      watchplayer: [],
      param: this.$route.params.id,
      simpleData: [],
      films: [],
      FatchData: [],
      isActive: true,
      videoplayer: true,
      cmnts: "",
      allcom: [],
    };
  },
  metaInfo() {
    return {
      title: this.simpleData.title,
      meta: [
        {
          name: "description",
          content: this.simpleData.desc,
        },
        {
          property: "og:title",
          content: this.simpleData.title,
        },
        { property: "og:site_name", content: "glamour" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
  methods: {
    selectEmoji(emoji) {
      const cmnts = this.cmnts;
      const cursorPosition = cmnts.selectionEnd;
      const start = this.value.substring(0, cmnts.selectionStart);
      const end = this.value.substring(cmnts.selectionStart);
      const text = start + emoji.native + end;
      this.$emit("input", text);
      cmnts.focus();
      this.$nextTick(() => {
        cmnts.selectionEnd = cursorPosition + emoji.native.length;
        alert(cursorPosition);
      });
    },
    addcom: function() {
      this.isLoading = true;
      this.$http
        .post("/addcomnt/", {
          id: this.param,
          text: this.cmnts,
        })

        .then((result) => {
          this.isLoading = false;
          console.log(result.data);
          if (result.data.status == 1) {
            this.cmnts = "";
          }
        })
        .catch((err) => {
          this.isLoading = false;
          console.log(err);
        });
    },
  },

  mounted() {
    /////// player video
    // axios
    //   .get("https://fm.albatkora.online/down/" + this.param)

    //   .then((result) => {
    //     this.watchplayer = result.data.streamingData.adaptiveFormats;
    //     console.log(result.data);
    //     this.isActive = true;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    ///// end player video

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

  updated() {
    // com
    this.$http
      .get("/comm/" + this.param)

      .then((result) => {
        this.allcom = result.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  beforeMount() {
    this.$http
      .get("/post/" + this.param)

      .then((result) => {
        this.simpleData = result.data;
        if (result.data == "") {
          this.$router.push({ name: "NotFound" });
        }
        this.desc = result.data.desc;
        this.title = result.data.title;

        if (result.data.type === "video") {
          // this.videoplayer = false;
          this.isActive = false;
          // this.iframe = "https://serie.livebotola.com/video/live.php?id=";
        } else {
          this.isActive = false;
          // this.iframe = "https://serie.livebotola.com/video/iframe.php?id=";
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // com
    this.$http
      .get("/comm/" + this.param)

      .then((result) => {
        this.allcom = result.data;
      })
      .catch((err) => {
        console.log(err);
      });

    this.$http
      .get("/update/" + this.param)

      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //   aflamall
    this.$http
      .get("/aflamall")

      .then((result) => {
        this.films = result.data;
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });

    if (!this.$route.query.list) {
      this.$http
        .get("/random")

        .then((result) => {
          this.FatchData = result.data;
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.$http
        .get("/series/" + this.$route.query.list)

        .then((result) => {
          this.FatchData = result.data;
          console.log(result.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>

<style scoped>
.videoplayer {
  display: none;
}
.iframplayer {
  display: none;
}
.addcomment {
  position: absolute;
  left: 46px;
  top: 30px;
}

.v-input__slot::before {
  content: unset !important;
}
.v-input__slot::after {
  content: unset !important;
}
.options {
  position: relative !important;
}
.menu-list {
  position: absolute !important;
}
.container-emoji {
  height: 280px !important;
}
.play_ifr {
  height: 400px;
}
@media (max-width: 800px) {
  .topnav {
    display: none;
  }
  .play_ifr {
    height: 400px;
  }
  .ifosoc {
    font-size: 12px;
  }
}
</style>
