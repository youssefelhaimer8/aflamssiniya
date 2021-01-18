<template>
  <v-container> </v-container>
</template>
<script>
export default {
  data() {
    return {
      param: this.$route.params.id,
    };
  },
  created() {
    this.$router.push({ patch: "/watch/" + this.param });

    this.$router.push({ name: "Watch" });
    //   window.location.href = "/watch/" + this.param;
  },
};
</script>
