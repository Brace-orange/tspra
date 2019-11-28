<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
     <div class="print">
        <div class="btn_print">
          <p :class="class1(a)">打印小票</p>
          <p :class="class2">打印小票</p>
          <p :class="`class-${c}`">打印小票</p>
          <p class="">打印小票</p>
          <p class="">打印小票</p>
        </div>
      </div>
      <p @click="change(1)">+</p>
      <p @click="change(2)">-</p>
  </div>
</template>
<script>
export default {
  name: 'about',
  data () {
    return {
      a: 1,
      b: 0,
      c: 1
    }
  },
  methods: {
    class1 (a) {
      return `class-${a}`
    },
    change (type) {
      type === 1 ? this.a++ : this.a--
      type === 1 ? this.b++ : this.b--
    }
  },
  computed: {
    class2 () {
      return `class-${this.b}`
    }
  },
  watch: {
    b: function () {
      console.log('b change')
      this.c > 3 ? this.c-- : this.c++
      // return `class-${this.c}`
    }
  }
}
</script>
<style scoped lang="scss">
// @import url('../assets/css/mixin.scss');
// @import url();
p {
  font-size: rem(20);
}
.class-1 {
  color: red;
}
.class-2 {
  color: blue;
}
.class-3 {
  color: yellow;
}
</style>
