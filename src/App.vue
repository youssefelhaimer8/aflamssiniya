<template>
  <v-app>
    <notifications :duration="10000" position="top left" group="errors">
    </notifications>
    <notifications :duration="10000" position="bottom left" group="success">
    </notifications>
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></loading>
    <v-main>
      <Nav />
      <router-view></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/nav/navbar";
import Footer from "./components/nav/footer";

export default {
  name: "App",

  components: {
    Nav,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
