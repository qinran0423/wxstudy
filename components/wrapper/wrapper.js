Component({
  properties: {
    innerText: {
      type: String,
      value: 'default value'
    }
  },
  data: {
    someData: {}
  },
  methods: {
    doSometing(e) {
      console.log(this.data.innerText);
    }
  }

})