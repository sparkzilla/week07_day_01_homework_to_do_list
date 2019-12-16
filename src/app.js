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
      newItem: ""
    }
  });
});
