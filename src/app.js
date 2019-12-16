import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      events: [
        { type: "Shopping", completed: false},
        { type: "Gym", completed: true},
        { type: "Meeting", completed: false}
      ],
      newEvent: ""
    },
    methods: {

    completeEvent: function(index){
      this.events[index].completed = true;
    },

    unCompleteEvent: function(index){
      this.events[index].completed = false;
    },

    saveNewEvent: function(){
      let eventObject = {type: this.newEvent, completed: false}
      this.events.push(eventObject)
      this.newEvent = ""
    }
  }
  });
});
