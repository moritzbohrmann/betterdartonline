export default {
   template: {
      X01: {
         type: "X01",
         id: 0o00000000000,
         players: [],
         settings: {},
         state: {
            host: 0,
            guest: 0,
         },
         legs: [{}, {}],
         achievements: [],
      },
      Cricket: {
         type: "Cricket",
         id: 0o00000000000,
         players: [],
         state: {
            host: 0,
            guest: 0,
         },
         achievements: [],
         hits: {
            host: {
               15: 3,
               16: 2,
               17: 0,
               18: 1,
               19: 0,
               20: 3,
               BULL: 0,
            },
            guest: {
               15: 3,
               16: 2,
               17: 0,
               18: 1,
               19: 0,
               20: 3,
               BULL: 0,
            },
         },
      },
      SplitScore: {
         type: "SplitScore",
         id: 0o00000000000,
         players: [],
         state: {
            host: 0,
            guest: 0,
         },
         hits: {
            host: {
               15: [0, 45, 15],
               16: [48, 48, 32],
               DOUBLE: [0, 0, 40],
               17: [17, 17, 0],
               18: [54, 18, 18],
               TRIBLE: [60, 60, 0],
               19: [57, 57, 57],
               20: [60, 60, 60],
               BULL: [25, 0, 50],
            },
            guest: {
               15: [0, 45, 15],
               16: [48, 48, 32],
               DOUBLE: [0, 0, 40],
               17: [17, 17, 0],
               18: [54, 18, 18],
               TRIBLE: [60, 60, 0],
               19: [57, 57, 57],
               20: [60, 60, 60],
               BULL: [25, 0, 50],
            },
         },
      },
   },
};
