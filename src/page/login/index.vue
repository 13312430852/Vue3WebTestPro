<script lang="ts">
import { ref,reactive } from 'vue'
import test from "@/page/test.vue";
export default {
  components: {
    test
  },
  setup() {
    let count = ref(0)
    function addOne(){
      count.value++
    }

    let tableList = reactive({list: ['111','222','333','44444']})
    function add(){
      tableList.list.push(`${tableList.list.length}`.repeat(3))
    }
    function del(text: string):void {
      tableList.list = tableList.list.filter(i => i !== text)
    }

    return {
      count,
      addOne,

      tableList,
      add,
      del

    }
  }
}

</script>

<template>
  <div class="login">
    <h1>{{ count }}</h1>
    <button @click="addOne">Add one</button>
    <div>
      <ul>
        <test v-for="(item) in tableList.list"
              @del="del"
              :key="item"
              :text="item"></test>
      </ul>
    </div>
    <button @click="add">新增</button>
  </div>

</template>

<style scoped>
.login {
  height: 100vh;
  background: url("../../../public/loginbg.jpg");
}
</style>
