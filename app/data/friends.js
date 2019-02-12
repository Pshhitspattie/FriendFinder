// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
      "name": "Jess",
      "photo": "https://i.ytimg.com/vi/ktlQrO2Sifg/maxresdefault.jpg",
      "scores":[
          4,
          3,
          5,
          3,
          3,
          1,
          2,
          5,
          1,
          3
      ]
    }
  ];



      
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  