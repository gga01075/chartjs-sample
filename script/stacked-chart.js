let myChartThree = document.getElementById('myChartThree');


let barChartThree = new Chart(myChartThree, {
  type: "bar",
  data : {
    labels: ['비교기간', '분석기간'],
    datasets: [{
      label: '정상',
      data: [4.3, 2.5],
      backgroundColor: [
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1,
      datalabels: {
        align: 'center',
        anchor: 'center'
      }
    },
    {
        label: '취소',
        data: [2.4, 4.4],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
        ],
        borderWidth: 1,
        datalabels: {
            align: 'center',
            anchor: 'center'
          }
      },
    {
        label: '반품/교환',
        data: [2, 2],
        backgroundColor: [
          'rgba(255, 255, 104, 0.2)',
        ],
        borderColor: [
          'rgba(255, 255, 104, 0.2)',
        ],
        borderWidth: 1,
        datalabels: {
            align: 'center',
            anchor: 'center'
          }
      },
      
      
      
      
      
      
      
      
      {
        label: '정상',
        data: [4.3, 2.5],
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderColor:'rgba(0, 0, 0, 1)',
        tension: 0,
        type : 'line'
      },{
        label: '취소',
        data: [2.4, 4.4],
        backgroundColor: 'rgba(255, 26, 104, 0.2)',
        borderColor:'rgba(255, 26, 104, 1)',
        tension: 0,
        type : 'line'
      },{
        label: '반품/교환',
        data: [2, 2],
        backgroundColor:  '#4444ff',
        borderColor: '#4444ff',
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
  },
  

});