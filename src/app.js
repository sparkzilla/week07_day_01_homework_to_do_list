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
      form: {
      newEvent: "",
      newCompleted: false
     }
    },
    methods: {

    completeEvent: function(index){
      this.events[index].completed = true;
    },

    unCompleteEvent: function(index){
      this.events[index].completed = false;
    },

    saveNewEvent: function(){
      let eventObject = {type: this.form.newEvent, completed: this.form.newCompleted}
      this.events.push(eventObject)
      this.form.newEvent = ""
      this.form.newCompleted = false
    }
  }
  });
});
