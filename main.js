Vue.component("message-row", {
  props: ["message"],
  template:
    '<li v-bind:style="{ color: getColor() }">{{ message.id }} {{ message.text }}</li>',
  data: function(){
    return {
      colors: ["blue", "green", "red" ],   
      color: 'red'
    }
  },
  methods: {
    getColor: function() {
      let index = Math.floor(Math.random() * 3)
      console.log(this.colors[index])
      return this.colors[index]
    }
  }
});

Vue.component("messages-list", {
  props: ["messages"],
  template:
    "<ul> " +
    '<message-row v-for="message in messages" :key="message.id" :message="message" />' +
    "</ul>"
});

Vue.component("input-message", {
  props: ["message", "addMessage"],
  template:
    // "<div>" + '<input v-model="value" placeholder="text here...">' + "</div>"
    '<form v-on:submit.prevent="addMessage">' +
    '<input v-model="message.text" placeholder="text here..."/>' +
    // '<input v-model="user.age" />' +
    '<button type="submit">Add new message</button>' +
    "</form>"
});

var app = new Vue({
  el: "#app",
  // props: ["newMessage"],
  template:
    "<div>" +
    '<input-message :message="message" :addMessage="addMessage" />' +
    '<messages-list :messages="messages" />' +
    "</div>",
  data: {
    messages: [
      { id: 1, text: "Hello" },
      { id: 2, text: "Hi" },
      { id: 3, text: "Good day" },
      { id: 4, text: "Good night" }
    ],
    message: { id: 0, text: "" },
    incr: 5    
  },
  methods: {
    addMessage() {
      if (this.message.text.length == 0) {
        alert('Nothing to add')
      } else {
        // messages.push({ id: messages.length()++, text: message });
        // this.message.id = 5,
        // this.message.text = value,
        let i = this.messages.length + 1
        console.log(i)
        this.messages.push({ id: i, text: this.message.text })
        this.message.text = ''
      }
      
    }
  }
});
