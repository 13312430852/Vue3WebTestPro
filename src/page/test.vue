<script lang="ts">

export default {
  props: {
    text: String,
  },
  created() {
    console.log('渲染渲染')
  },
  setup(props: any, {emit}: any) {
    function del(text: string): void {
      emit('del',text)
    }

    return {
      del
    }
  }
}

</script>

<template>
 <li><span style="margin-right: 30px">{{text}}</span><span @click="del(text)">删除</span></li>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
