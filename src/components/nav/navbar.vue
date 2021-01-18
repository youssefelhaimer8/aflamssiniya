<template>
  <v-app-bar height="50%" bg>
    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <router-link to="/">
      <v-toolbar-title
        >مسلسلات <span class="red--text"> صينية</span></v-toolbar-title
      >
    </router-link>
    <v-spacer></v-spacer>
    <!-- <v-tooltip left>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-frequently-asked-questions</v-icon>
        </v-btn>
      </template>
  
    </v-tooltip> -->
    <router-link to="/">
      <v-btn x-small class="ml-2">
        <v-icon>mdi-video</v-icon>
        مسلسلات صينية
      </v-btn>
    </router-link>
    <router-link to="/aflam">
      <v-btn x-small color="red">
        <v-icon>mdi-access-point</v-icon>
        بت مباشر بنات
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "AuthAppBar",
};
</script>
<style scoped>
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: #fff;
}
</style>
