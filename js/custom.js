var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar", 
  data: {
labels: ["Python", "JavaScript", "PHP", "Java", "C#", "C++"],
 datasets: [
      { label: "Programming Languages",
       data: [13, 15, 5, 10, 9, 10],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },    
    ],
  },

  
  options: {
    responsive: false,
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    tooltips: {
      enabled: true, 
      backgroundColor: "red", 
      titleFontFamily: "Comic Sans MS", 
      titleFontSize: 30, 
      titleFontStyle: "bold italic",
      titleFontColor: "yellow",
      titleAlign: "center",
      titleSpacing: 3,
      titleMarginBottom: 50,
      bodyFontFamily: "Comic Sans MS",
      bodyFontSize: 20,
      bodyFontStyle: "italic",
      bodyFontColor: "black",
      bodyAlign: "center",
      bodySpacing: 3,
    },


    title: {
      display: true,
      text: "Custom Chart Title",
      position: "bottom",
      fontSize: 25,
      fontFamily: "Comic Sans MS",
      fontColor: "red",
      fontStyle: "bold italic",
      padding: 20,
      lineHeight: 5,
    },
    legend: {
      display: true,
      position: "bottom", 
      align: "end", 
      labels: {
        fontColor: "red",
        fontSize: 16,
        boxWidth: 20,
      },
    },

    animation: {
      duration: 5000,
      easing: "easeInOutBounce",
    },


   

    
  },

  
  
});