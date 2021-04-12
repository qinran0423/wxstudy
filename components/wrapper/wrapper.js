Component({
  options: {
    multipleSlots: true,
    addGlobalClass: true,
    virtualHost: true
  },
  externalClasses: ['my-class'],
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