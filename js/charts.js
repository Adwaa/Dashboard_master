
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");
let myChart = new Chart(ordersChart, {
    type: 'line',
    data:{
        labels: ['Aug 1', 'Aug 3', 'Aug 5', 'Aug 7', 'Aug 9', 'Aug 11', 'Aug 13'],
        datasets: [{
           // label: 'My First Dataset',
            data: [1000, 4000, 2000, 3000, 500, 4000, 1500],
            fill: true,
            borderColor: '#da4167!important',
            //tension: 0.1
          }]
    }, 
    options : {}
});


// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart").getContext('2d');

let myCharts = new Chart(visitorChart, {
    type: 'bar',
    data:{
        labels: ['m', 'v', 's', 'e', 'n'],
        datasets: [{
            label: 'My First Dataset',
            data: [100, 200, 350, 400, 600, 40],
            backgroundColor:[
              "rgba(255, 99, 132, 0.6)",
             "rgba(255, 99, 132, 0.6)",
             "rgba(255, 99, 132, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ],
            //fill: false,
            borderWidth:1,
            borderColor: 'rgb(75, 192, 192)',
            hoverBorderWidth: 1,
            hoverBorderColor: '#000',
           // tension: 0.1,
           
           options: {
            scales: {
              y: {
                beginAtZero: true
              }
            }
          },
         // borderWidth: 1
  }]
          
    }, 
   //options : {}
});

// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");
let myChartt = new Chart(citiesChart, {
    type: 'pie',
    data:{
        labels: ['m', 'v', 's', 'e'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 55, 40],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            borderWidth:1,
            borderColor: 'rgb(75, 192, 192)',
            //hoverBorderWidth: 5,
            //radius: '50%',
            hoverBorderColor: '#000',
            tension: 0.1,
            
          }]
    }, 
    options : {
      maintainAspectRatio: false,
      //responsive: true,
    }
});



// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
let myLinearChart = new Chart(ratChart, {
  type: 'line',
  data:{
      labels: ['Aug 1', 'Aug 3', 'Aug 5', 'Aug 7', 'Aug 9', 'Aug 11', 'Aug 13'],
      datasets: [{
         // label: 'My First Dataset',
          data: [1000, 4000, 2000, 3000, 500, 4000, 1500],
          fill: true,
          borderColor: '#da4167!important',
          //tension: 0.1
        }]
  }, 
  options : {}
  
});