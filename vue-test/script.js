const app = Vue.createApp({
  data() {
    return {
      name: "Elyass",
      age: "21",
      skills: ["HTML", "CSS", "JS"],
      isSubscribed: true,
      completedTests: [
        {
          testName: "First Test",
          testResult: "80%",
        },
        {
          testName: "Second Test",
          testResult: "70%",
        },
        {
          testName: "Third Test",
          testResult: "90%",
        },
      ],
      


    };

  },
}).mount("#app");
