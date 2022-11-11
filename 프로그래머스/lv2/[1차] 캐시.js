function solution(cacheSize, cities) {
    const map = new Map();
    let time = 0;
    lowerCities = cities.map((el) => el.toLowerCase());

    const hit = (lowerCity) => {
        map.delete(lowerCity);
        map.set(lowerCity);
        time += 1;
    };

    const miss = (lowerCity, cacheSize) => {
        // map의 첫번째 키의 값을 찾는 방법
        map.size === cacheSize && map.delete(map.keys().next().value);
        map.set(lowerCity);
        time += 5;
    };

    for (let lowerCity of lowerCities) {
        if (cacheSize === 0) {
            time += 5 * cities.length;
            break;
        }

        if (map.has(lowerCity)) {
            hit(lowerCity);
        } else {
            miss(lowerCity, cacheSize);
        }
    }
    return time;
}

// LRU(Least Recently Used) 캐시 교체 알고리즘
// 캐시 크기가 3 => 도시 이름을 최대 3개 담을 수 있습니다.
// 새로 참조한 값이 기존에 없는 값이면 마지막으로 참조된 값을 삭제합니다.
// 새로 참조한 값이 기존에 있는 값이면 해당 값을 가장 앞으로 가져옵니다.

// 캐시 안에 찾는 도시가 있다면 cache hit(+1), 없다면 cache miss(+5)
// ["Jeju", "Pangyo", "NewYork", "newyork"]
// Jeju(+5)5 Pangyo(+5)10 NewYork(+5)15 newyork(+1)16
