<template>
  <div class="home ">
    <h3 class="p"><v-icon>mdi-access-point</v-icon> مسلسلات</h3>
    <v-container>
      <v-layout wrap row justify-space-around class=" col-md-12">
        <v-flex>
          <v-card class="pa-3">
            <h3>نشر الفيديو</h3>
            <v-col cols="12" sm="12">
              <v-text-field
                v-model="title"
                label="العنوان"
                outlined
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-text-field
                v-model="url"
                label="الرابط"
                outlined
                clearable
              ></v-text-field>
            </v-col>
            <v-col class="d-flex" cols="12" sm="12">
              <select
                name=""
                id=""
                v-model="film"
                style=" border:2px solid white;width:100%;height:40px"
              >
                <!-- <option>إختر من هنا</option> -->
                <option
                  v-for="(item, index) in films"
                  :key="index"
                  :value="item.namefilm"
                  >{{ item.namefilm }}
                </option>
              </select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="12">
              <v-select
                :items="items"
                label="نوع الفيديو"
                v-model="typef"
                outlined
              ></v-select>
            </v-col>
            <v-col class="d-flex" cols="12" sm="12">
              <v-text-field v-model="desc" label="الوصف"></v-text-field>
            </v-col>
            <div class="text-center">
              <v-btn color="primary" outlined rounded @click="addvideo">
                نشر الفيديو
              </v-btn>
            </div>
          </v-card>
        </v-flex>
        <v-flex class="mr-4">
          <v-card class="pa-3">
            <h3 class="text-center">إضافة فيلم</h3>
            <v-col cols="12" sm="12">
              <v-text-field
                v-model="titlefilm"
                label="العنوان"
                outlined
                clearable
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-file-input
                counter
                v-model="file"
                v-on:change="onChangeFileUpload()"
                id="file"
                ref="file"
                label="إضافة صورة"
                show-size
                rounded
                dense
                filled
                prepend-icon="mdi-camera"
                small-chips
              ></v-file-input>
            </v-col>
            <div class="text-center">
              <v-btn color="red" outlined rounded @click="addfilm">
                إضافة فيلم
              </v-btn>
            </div>
          </v-card>
        </v-flex>
        <loading
          :active.sync="isLoading"
          :can-cancel="true"
          :on-cancel="onCancel"
          :is-full-page="fullPage"
        ></loading>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import "vue-loading-overlay/dist/vue-loading.css";
import Loading from "vue-loading-overlay";
export default {
  components: {
    Loading,
  },
  data() {
    return {
      isLoading: false,
      fullPage: true,
      films: [],
      items: ["film", "video"],
      title: "",
      titlefilm: "",
      url: "",
      show: false,
      file: "",
    };
  },
  methods: {
    addvideo: function() {
      this.isLoading = true;
      this.$http
        .post("/adddata", {
          title: this.title,
          typef: this.typef,
          url: this.url,
          film: this.film,
          desc: this.desc,
        })

        .then((result) => {
          console.log(result.data);
          if (result.data.status == 1) {
            this.$notify({
              group: "errors",
              type: "success",
              title: "تم بنجاح",
              text: result.data.message,
            });
          } else if (result.data.status == 2) {
            this.$notify({
              group: "errors",
              type: "warn",
              title: "عدرا",
              text: result.data.message,
            });
          } else {
            this.$notify({
              group: "errors",
              type: "warn",
              title: "حدت خطأ",
              text: result.data.message,
            });
          }
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    addfilm: function() {
      this.isLoading = true;
      let formData = new FormData();

      formData.append("avatar", this.file);
      formData.append("title", this.titlefilm);

      this.$http
        .post(
          "/upload-avatar",
          formData,

          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((result) => {
          console.log(result.data);

          if (result.data.status == 1) {
            this.$notify({
              group: "errors",
              type: "success",
              title: "تم بنجاح",
              text: result.data.message,
            });
          } else if (result.data.status == 2) {
            this.$notify({
              group: "errors",
              type: "warn",
              title: "عدرا",
              text: result.data.message,
            });
          } else {
            this.$notify({
              group: "errors",
              type: "warn",
              title: "حدت خطأ",
              text: result.data.message,
            });
          }
          this.isLoading = false;

          //   aflamall
          this.$http
            .get("/aflamall")

            .then((result) => {
              this.films = result.data;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          this.isLoading = true;
          console.log(err);
        });
    },
  },
  onChangeFileUpload() {
    this.file = this.$refs.file.files[0];
  },
  created() {
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
  },
};
</script>
