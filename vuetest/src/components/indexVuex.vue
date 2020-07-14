<template>
  <div>
    <div>vuex演示自增数字 <span class="counterCss">{{counter}}</span> </div>

    <button @click="addMethods">++1</button>
    <addBtn></addBtn>
    <div>vuex演示自减数字 <span class="counterCss">{{counter}}</span> </div>
    <!--css样式测试-->
    <!--    <div>vuex演示自减数字 <span>{{counter}}</span> </div>-->
    <button @click="subMethods">--1</button>
    <subBtn></subBtn>

  </div>
</template>

<script>
import addBtn from './vuexAdd'
import subBtn from './vuexSub'
export default {
    name: "indexVuex",
    data() {
      return {
        counter: 0
      }
    },
    components: {
      addBtn,
      subBtn
    },
    methods: {
      addMethods() {
        this.counter += 1;
      },
      subMethods() {
        this.counter -= 1;
      }
    },
}
</script>

<style scoped>
  .counterCss {
    color:blue;
    font-weight: bold;
  }
  div span {
    color: yellow;
  }

</style>
