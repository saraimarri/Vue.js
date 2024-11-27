const app = Vue.createApp({
  data() {
    return {
      username: "Joe Doe",
      currentDate: new Date().toLocaleString("en-us"),
    };
  },
}).mount("#aaa");
