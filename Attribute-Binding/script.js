Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      imageAttrs: {
        src: "https://picsum.photos/200/300",
        alt: "A cute dog",
      },
    };
  },
/*
  methods: {
    FHeadline: function () {
      return this.headline.replace(/\s/g, "-").toLowerCase();
    },
  },
 */
  computed: {
    FHeadline: function () {
      return this.headline.replace(/\s/g, "--").toLowerCase();
    },
/*
    reverseMsg: function () {
      return this.headline.split("").reverse().join("");
    },
*/
  },
 
}).mount("#app");
