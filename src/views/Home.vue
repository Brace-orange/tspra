<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Y  our Vue.js App"/> -->
    <!-- <header @click="goto">111</header> -->
    <div></div>
    <footer></footer>
    <section></section>
    <article></article>
    <van-button>11</van-button>
    <router-view/>
  </div>
</template>

<script lang="ts">
// import Print from '../lib/index'
// @ is an alias to /src
import { mixinEl } from '../lib/mixin.js'
import HelloWorld from '@/components/HelloWorld.vue'
import { create } from '../lib/threepra.js'
import { Button } from 'vant'

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
    // create()
    // a.create()/
  },
  mounted () {
    // this.clear()
    // create()
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
    },
    clear () {
      if (document.getElementsByTagName('canvas')) {
        console.log(document.getElementsByTagName('canvas'))
        let canvasArr = document.getElementsByTagName('canvas')
        console.log(canvasArr[0].getContext('2d'))
        const canvass = canvasArr[0].setAttribute('id', 'canvas1')
        var canvas = document.getElementById('canvas1')
        let b = canvas.getContext('2d')
        // console.log('a', canvas)
        // console.log('context', canvas.getContext('2d'))
        canvasArr.forEach((item) => {
          console.log('item', item)
          // item.getContext('2d').clearRect(0, 0, item.width, item.height)
        })
        // document.getElementsByTagName('canvas').getContext('2d').clearRect(0, 0, window.innerWidth, window.innerHeight)
      }
    }
  },
  components: {
    // HelloWorld
    vanButton: Button
  }
}
</script>
