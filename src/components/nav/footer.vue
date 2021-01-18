<template>
  <v-footer color=" lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn color="white" text to="/" rounded class="my-2 ml-2">
        مسلسلات
      </v-btn>
      <v-btn color="white" text to="/aflam" rounded class="my-2 ml-2">
        مباشر بنات
      </v-btn>
      <v-btn color="white" text to="/pricvacy" rounded class="my-2 ml-2">
        سياسات الخصوصية
      </v-btn>
      <v-btn
        color="white"
        text
        to="https://facebook.com/mar7abaaa"
        rounded
        class="my-2 ml-2"
      >
        إتصل بنا
      </v-btn>
      <v-col class=" lighten-2 py-4 text-center white--text" cols="12">
        {{ dat }}
        {{ new Date().getFullYear() }} — <strong>كلامورات أفلام</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    dat: [],
    links: ["Home", "About Us", "Team", "Services", "Blog", "Contact Us"],
  }),

  beforeMount() {
    // com
    this.$http
      .get("/allviews/")

      .then((result) => {
        this.dat = result.data;
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
