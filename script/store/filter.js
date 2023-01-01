// 상단 filter 조건 배열
let filterArr = {};

// filter 배열에 담는 함수
const onClick = (event, clickedElements) => {
  if (clickedElements.length === 0) return;

  const { dataIndex, raw } = clickedElements[0].element.$context;
  const barLabel = event.chart.data.labels[dataIndex];
  console.log(`barLabel : ${barLabel}`);

  /* 
1. filter.weekOrder가 없는 상태  => 베열에 추가 
2. filter.weekOrder가 있는 상태  & 새로 들어가는 값이랑 중복안됨 => 배열에 추가
3. filter.weekOrder가 있는 상태  & 새로 들어가는 값이랑 중복됨 => 배열에서 제거
*/

  // filter.weekOrder가 없는 상태
  if (!filterArr.hasOwnProperty("weekOrder")) {
      console.log("weekOrder가 없습니다.");
      filterArr['weekOrder'] = new Array(1).fill(barLabel);
  // filter.weekOrder가 있는 상태
  } else {
    console.log("weekOrder가 있습니다.");
    if (filterArr["weekOrder"].includes(barLabel)) {
      filterArr["weekOrder"] = filterArr["weekOrder"].filter((el) => el !== barLabel);
    } else {
      filterArr["weekOrder"].push(barLabel);
    }
  }

  console.log(`filterArr: ${JSON.stringify(filterArr)}`);
};
