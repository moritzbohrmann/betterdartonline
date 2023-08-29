export default {
   terms: ["home", "about", "cookies", "help", "account", "rules", "developer", "author"],
   results: {
      home: {
         type: "LINK",
         label: "Home",
         link: "/home",
      },
      about: {
         type: "LINK",
         label: "about",
         link: "/about",
      },
      cookies: {
         type: "LINK",
         label: "Cookies",
         link: "/cookies",
      },
      help: {
         type: "LINK",
         label: "Help",
         link: "/help",
      },
      account: {
         type: "NAVIGATION",
         label: "Account",
         to: "",
      },
      rules: {
         type: "LINK",
         label: "Rules",
         link: "/rules",
      },
      developer: {
         type: "TEXT",
         label: "Developer",
         text: "Moritz Bohrmann",
      },
      author: {
         type: "TEXT",
         label: "Author",
         text: "Moritz Bohrmann",
      },
   },
};
