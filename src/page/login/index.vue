<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div class="login">

  </div>
</template>

<style scoped>
.login {
  height: 100vh;
  background: url("../../../public/loginbg.jpg");
}
</style>
