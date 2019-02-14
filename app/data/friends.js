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
    },
    {
      "name": "Jenna",
      "photo": "https://i.pinimg.com/originals/0c/cb/98/0ccb98e7884fea20df07f0bbfd2a088a.jpg",
      "scores":[
          1,
          2,
          3,
          4,
          5,
          5,
          4,
          3,
          2,
          1
      ]

    },
    {
      "name": "Jenae",
      "photo": "https://i.pinimg.com/originals/8f/6d/37/8f6d372c549cdc48a5b9749103e50308.jpg",
      "scores":[
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1

  ]
    },
    {
      "name": "Blake",
      "photo": "https://i.pinimg.com/originals/92/70/c6/9270c60a1d99c6f59bb011bacb65ea28.jpg",
      "scores":[
          2,
          4,
          3,
          2,
          5,
          4,
          3,
          4,
          4,
          5

  ]
    },
    {
      "name": "Kylee",
      "photo": "https://i.pinimg.com/originals/fe/9b/60/fe9b60788cc4a807647df35ece072bf3.jpg",
      "scores":[
          2,
          1,
          1,
          5,
          5,
          5,
          1,
          5,
          5,
          2

  ]
      
    },
    {
      "name": "Bethany",
      "photo": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
      "scores":[
          4,
          4,
          3,
          3,
          5,
          2,
          5,
          4,
          3,
          2

  ]
      
    },
    {
      "name": "Pam",
      "photo": "https://img.huffingtonpost.com/asset/5a53e9e71c0000220068f469.jpeg?ops=scalefit_720_noupscale",
      "scores":[
          4,
          4,
          1,
          1,
          4,
          2,
          5,
          1,
          5,
          2

  ]
      
    },

    {
      "name": "Leslie",
      "photo": "https://www.creativetribeworkshop.com/wp-content/uploads/bb-plugin/cache/Best-Leslie-Knope-GIFs-square.jpg",
      "scores":[
          5,
          1,
          5,
          1,
          5,
          4,
          5,
          1,
          5,
          3

  ]
      
    },

  ]


      
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendArray;
  