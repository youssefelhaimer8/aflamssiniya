<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(data, ind) in sss.slice(0, 1)" :key="ind" class="primary ma-4">
      {{ data.url }}
    </div>
    {{ sss1 }}
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      sss: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/")

      .then((result) => {
        this.sss = result.data.streamingData.adaptiveFormats;
        console.log(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
