const mixinEl = {
  data () {
    return {
      age: '12'
    }
  },
  created () {
    console.log('enter mixin' + this.age)
    this.one()
  },
  methods: {
    one () {
      console.log('enter mixins')
    }
  }
}

export { mixinEl }
