<template>
  <div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
console.log(11111111111111111111111);

export default defineComponent({
  name: "App",
  components: { ConfigProvider, AppProvider },
});
</script>
