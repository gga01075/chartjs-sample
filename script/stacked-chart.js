let myChartThree = document.getElementById('myChartThree');


let barChartThree = new Chart(myChartThree, {
  type: "bar",
  data : {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Sales',
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: [
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    },
    {
        label: 'Weekly Sales',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
        ],
        borderWidth: 1
      },{
        label: 'Line Sales',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor:'rgba(0, 0, 0, 1)',
        tension: 0,
        type : 'line'
      },{
        label: 'Line Sales',
        data: [18, 12, 6, 9, 12, 3, 9],
        backgroundColor: 'rgba(255, 26, 104, 0.2)',
        borderColor:'rgba(255, 26, 104, 1)',
        tension: 0,
        type : 'line'
      }]
  },
  options: {
    scales: {
      x : {
        stacked : true,
      },
      y: {
        beginAtZero: true,
        stacked : true,
      }
    }
  }

});