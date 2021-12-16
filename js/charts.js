
// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");
let myChart = new Chart(ordersChart, {
    type: 'line',
    data:{
        labels: ['Aug 1', 'Aug 3', 'Aug 5', 'Aug 7', 'Aug 9', 'Aug 11', 'Aug 13'],
        datasets: [{
            label: 'Orders',
            data: [8000, 25000, 20000,32000, 30000,20000,40000],
            fill: true,
            backgroundColor: 'rgb(55, 49, 94,0.2)',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 3,
            tension: 0.1
          }]
    }, 
    options : {}
});


// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart").getContext('2d');
let myCharts = new Chart(visitorChart, {
    type: 'bar',

    data:{
      labels: ['Aug 1', 'Aug 3', 'Aug 5', 'Aug 7', 'Aug 9', 'Aug 11', 'Aug 13'],
      datasets: [{
          label: 'Orders',
          data: [8000, 25000, 20000,32000, 30000,20000,40000],
          fill: true,
          backgroundColor: 'rgb(55, 49, 94,0.2)',
          borderColor: 'rgb(255, 99, 132)',
          borderWidth: 3,
          tension: 0.1
        }]
  }, 
  options : {}
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