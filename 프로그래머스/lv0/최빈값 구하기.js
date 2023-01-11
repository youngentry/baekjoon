const arr = [100, 200, 300, 200, 200, 200, 500, 500, 600];

const getMode = (arr) => {
  /**
   * 1. 배열들을 순회하면서 해당하는 value들을 키값, count를 value로 하는 Object를 만든다.
   * 2. 만들어진 Object에 있는 value들을 확인하며 최대값을 확인한다.
   */
  const newObject = {};
  arr.forEach((item) => {
    if (newObject[item]) {
      newObject[item] += 1;
    } else {
      newObject[item] = 1;
    }
  });

  /*
  만들어진 새로운 newObject에서 첫번째 값을 최빈값으로 설정해두고
  Object.keys로 순회하면서 더 큰 value를 가진 값이 있으면 mode를 바꾸어 준다.
  */
  let modeValue = newObject[Object.keys(newObject)[0]];
  let modeKey = Object.keys(newObject)[0];

  for (const item in newObject) {
    if (newObject[item] > modeValue) {
      modeValue = newObject[item];
      modeKey = Object.keys(newObject)[modeValue];
    }
  }
  return modeKey;
};

const result = getMode(arr);
console.log(`Mode is ${result}`);

function solution(array) {
  // 객체 생성하기
  const countObject = {};

  // 등장하는 숫자 카운트하기
  array.forEach((el) => (countObject[el] ? (countObject[el] += 1) : (countObject[el] = 1)));

  // 카운트가 높은 순서대로 정렬하기
  const sortedCountArray = Object.entries(countObject).sort((a, b) => b[1] - a[1]);

  // 첫번째 값이 최빈값
  const [modeKey, modeValue] = [parseInt(sortedCountArray[0][0]), sortedCountArray[0][1]];

  // 두번째 요소가 존재하고 그 값의 카운트가 최빈값과 같으면 최빈값이 여러개이므로 -1을 리턴
  if (sortedCountArray[1] && sortedCountArray[1][1] === modeValue) {
    return -1;
  }

  // 아니면 하나니까 최빈값 리턴
  return modeKey;
}

solution([1]);
