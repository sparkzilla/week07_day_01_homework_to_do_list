import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        { event: "Shopping", status: false},
        { event: "Gym", status: true},
        { event: "Meeting", status: false}
      ],
      newItem: ""
    }
  });
});
