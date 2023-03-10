



/* 
HTMLCanvasElement.getContext() 메소드는 캔버스의 드로잉 컨텍스트를 반환합니다.

getContext에 들어갈 수 있는 인수
- 2d 
    : 2차원 렌더링 컨텍스트를 나타내는 CanvasRenderingContext2D 객체를 반환한다.
- webgl 또는 experimental-webgl 
    : 3차원 렌더링 컨텍스트를 나타내는 WebGLRenderingContext 객체를 반환한다. 
      이 컨텍스트는 WebGL 버전 1(OpenGL ES2.0)을 구현하는 웹브라우저에서만 사용이 가능하다.
- webgl2 
    : 3차원 렌더링 컨텍스트를 나타내는 WebGL2RenderingContext 객체를 생성한다. 
      이 컨텍스트는 WebGL 버전 2(OpenGL ES3.0)를 구현하는 웹브라우저에서만 사용이 가능하다.
- bitmaprenderer 
    : ​canvas 콘텐츠를 주어진 ImageBitmap으로 대체하기위한 기능만을 제공하는 
      ImageBitmapRenderingContext 객체를 반환한다. 
*/
// let myChartOne = document.getElementById('myChartOne').getContext('2d');
let myChartOne = document.getElementById('myChartOne');

/* 
new Chart생성자를 사용하는데 첫번째 인수로는 컨텍스트 객체를, 
두번째 인수에는 해당 차트에 넣을 타입, 데이터 등을 객체로 넘겨주면 된다. 

*/



let barChartOne = new Chart(myChartOne, {
  type: "bar",
  data: {
    labels: ["일", "월", "화", "수", "목", "금", "토"],
    datasets: [
      {
        axis: "y",
        label: "분석기간",
        data: [20, 100, 150, 200, 100, 50, 300],
        backgroundColor: [
          "#c6e638",
          "#c6e638",
          "#c6e638",
          "#c6e638",
          "#c6e638",
          "#c6e638",
          "#c6e638",
        ],
      },
      {
        axis: "y",
        label: "비교기간",
        data: [20, 80, 120, 200, 300, 50, 100],
        backgroundColor: [
          "dodgerblue",
          "dodgerblue",
          "dodgerblue",
          "dodgerblue",
          "dodgerblue",
          "dodgerblue",
          "dodgerblue",
        ],
      },
    ],
  },

  options: {
    indexAxis: "y",
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "주차별 주문 실적",
        position: "top",
        align: "start",
        font: {
          size: 20,
        },
      },
      legend: {
        display: true,
        position: "right",
        align: "center",
      },
    },

    // filter 배열에 담는 함수
    onClick  
  },
  plugins: [
    {
      // 범례 색깔 정하기(클릭이벤트 때 이거 안하면 지멋대로 바뀜)
      beforeDraw: function (c) {
        let legends = c.legend.legendItems;
        legends[0].fillStyle = "#c6e638";
        legends[1].fillStyle = "dodgerblue";
      },
    },
  ],
});

function clickHandler(click) {
/* 
    const color1 =  [
                '#c6e638',
                '#c6e638',
                '#c6e638',
                '#c6e638',
                '#c6e638',
                '#c6e638',
                '#c6e638',
                ];
    const color2 = [
                "dodgerblue",
                "dodgerblue",
                "dodgerblue",
                "dodgerblue",
                "dodgerblue",
                "dodgerblue",
                "dodgerblue",
                ]; 


   barChartOne.config.data.datasets[0].backgroundColor = color1;
   barChartOne.config.data.datasets[1].backgroundColor = color2;

    */






   const points = barChartOne.getElementsAtEventForMode(click, 'nearest', {
    intersect : true
   }, true);
   console.log(points[0]);
   if(points[0]) {
    
    barChartOne.data.datasets.map(el => el.backgroundColor[points[0].index] = '#ff0000')
   }

   barChartOne.update();
}

myChartOne.onclick = clickHandler;

