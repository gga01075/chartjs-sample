let myChartTwo = document.getElementById('myChartTwo');

let LineChartTwo = new Chart(myChartTwo, {
    type : 'line',
    data : {
        labels: ['11/01','11/02','11/03','11/04',
                 '11/05','11/06','11/07','11/08',
                 '11/09','11/10','11/11','11/12',
                 '11/13','11/14','11/15','11/16',],
        datasets: [
            {
                label: '분석기간',
                data: [20,100,150,200,
                       100,50,300,20,
                       140,20,120,70,
                       0,200,120,140
                      ],
                borderColor: '#c6e638',
                tension: 0  // 0: 직선,  1: 완전 흐물거리는 곡선
            },
            {
                
                label: '비교기간',
                data: [120,30,200,140,
                        20,50,140,20,
                        110,30,40,200,
                        200,40,150,200],
                 borderColor: 'dodgerblue',
                 tension: 0
            }
        ]
    },

    options : {

        responsive : true,
        plugins: {
            title: {
                display: true,
                text: '일일주문 실적',
                Position : 'top',
                align : 'start',
                font: {
                     weight : 'bold',
                     size: 20
                }
            },
            legend : {
                display: true,
                align : 'end',
            }
        }      
    },
    plugins: [
        
        {
        // 범례 색깔 정하기(클릭이벤트 때 이거 안하면 지멋대로 바뀜)
        beforeDraw: function(c) {
            let legends = c.legend.legendItems;
            legends[0].fillStyle = '#c6e638';
            legends[1].fillStyle = 'dodgerblue';

        }
    }
]

});