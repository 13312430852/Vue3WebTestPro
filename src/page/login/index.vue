<script lang="ts">
import { ref, reactive } from 'vue'
import axios from 'axios'
import test from '@/page/test.vue'

export default {
  components: {
    test,
  },
  setup() {
    const count = ref(0)
    function addOne() {
      count.value++
    }

    const tableList = reactive({ list: ['111', '222', '333', '44444'] })
    function add() {
      tableList.list.push(`${tableList.list.length}`.repeat(3))
    }
    function del(text: string):void {
      tableList.list = tableList.list.filter((i) => i !== text)
    }

    function getUser() {
      // axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
      //   console.log('请求到了数据:', res)
      // })
      axios.post('login/getUserById', { name: '哈哈哈' }).then((res) => {
        console.log('请求到了数据:', res)
      })
    }

    return {
      count,
      addOne,

      tableList,
      add,
      del,

      getUser,
    }
  },
}

</script>

<template>
    <div class="login" >
      <div class="login-modal">
        <div class="login-modal-header">
          <span>xxx系统</span>
        </div>
      </div>
      <div class="footer">
        <span style="color: white;">xxxxx有线折磨人</span>
      </div>
      <button @click="getUser">哈哈哈</button>
    </div>
</template>

<style scoped lang="less">
.login {
  height: 100vh;
  width: 100%;
  background: url("../../../public/loginbg.jpg");
  backdrop-filter: blur(9px);

  .login-modal {
    height: 350px;
    width: 300px;
    background: rgba(255,255,255,0.8);
    border-radius: 19px;
    box-shadow:0 0 5px rgba(0,0,0,.5);
    position: absolute;
    right: 60px;
    top: 100px;

    .login-modal-header {
      height: 50px;
      font-size: 20px;
      line-height: 50px;
      text-align: center;
      border-bottom: 1px solid @primaryColor;
      border-top-left-radius: 19px;
      border-top-right-radius: 19px;
    }
  }

  .footer {
    height: 70px;
    width: 100%;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    bottom: 0px;
    text-align: center;
    line-height: 70px;
  }
}
</style>
