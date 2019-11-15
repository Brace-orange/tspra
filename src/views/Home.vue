<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Y  our Vue.js App"/> -->
    <!-- <header @click="goto">111</header> -->
    <div></div>
    <footer></footer>
    <section></section>
    <article></article>
    <router-view/>
  </div>
</template>

<script lang="ts">
// import Print from '../lib/index'
// @ is an alias to /src
import { mixinEl } from '../lib/mixin.js'
import HelloWorld from '@/components/HelloWorld.vue'
import { create } from '../lib/threepra.js'

export default {
  name: 'home',
  data () {
    return {

    }
  },
  // mixins: [mixinEl],
  created () {
    console.log('home created')
    console.log(this.libIndexs('-'))
    // this.one()
    create()
    // a.create()/
  },
  mounted () {

  },
  methods: {
    libIndexs (name:string):string {
      console.log('enter libIndexs')
      // Print('2222')
      return '-'
    },
    one () {
      console.log('enter component')
    },
    goto () {
      this.$router.replace({
        path: 'a'
      })
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
