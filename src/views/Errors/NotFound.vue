<template>
  <v-container class="pa-5 col-md-5 text-center">
    <v-alert
      border="left"
      color="orange"
      dense
      elevation="24"
      prominent
      text
      type="warning"
      >الصفحة التي تريد زيارتها غير موجودة حالياً</v-alert
    >
    <Err />
  </v-container>
</template>
<script>
import Err from "@/components/svg/error.vue";
export default {
  components: {
    Err,
  },
};
</script>
