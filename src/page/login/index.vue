<script setup>
import { ref } from 'vue'

let count = ref(0)
function addOne(){
  count.value++
}

</script>

<template>
  <div class="login">
    <h1>{{ count }}</h1>
    <button @click="addOne">Add one</button>
  </div>
</template>

<style scoped>
.login {
  height: 100vh;
  background: url("../../../public/loginbg.jpg");
}
</style>
