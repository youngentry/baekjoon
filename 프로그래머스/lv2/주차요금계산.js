function solution(요금표, records) {
    const 주차정보 = [];
    const splitRecord = (record) => {
        const recordData = record.split(" ");
        return [[recordData[0], recordData[1]], recordData[2]];
    };

    records.forEach((el) => 주차정보.push(splitRecord(el)));

    const [입차기록장부, 출차기록장부] = [[], []];
    주차정보.forEach((el) => {
        el[1] === "IN" ? 입차기록장부.push(el[0]) : 출차기록장부.push(el[0]);
    });

    const [정렬된입차기록장부, 정렬된출차기록장부] = [입차기록장부.sort((a, b) => a[1] - b[1]), 출차기록장부.sort((a, b) => a[1] - b[1])];

    const 요금 = new Object();
    입차기록장부.forEach((el) => (요금[el[1]] = 0));

    const 시간계산 = (시간) => {
        const 시분 = 시간.split(":");
        return parseInt(시분[0] * 60) + parseInt(시분[1]);
    };

    const 요금계산1 = (누적시간) => {
        if (누적시간 < 요금표[0]) {
            return 요금표[1];
        }
        return 요금표[1] + Math.ceil((누적시간 - 요금표[0]) / 요금표[2]) * 요금표[3];
    };

    while (정렬된입차기록장부.length > 0) {
        const 출차차량번호 = 정렬된출차기록장부.map((el) => el[1]);
        let 입차시간, 출차시간, 누적시간;

        입차시간 = 시간계산(정렬된입차기록장부[0][0]);

        if (출차차량번호.includes(정렬된입차기록장부[0][1])) {
            출차시간 = 시간계산(정렬된출차기록장부[출차차량번호.indexOf(정렬된입차기록장부[0][1])][0]);
            정렬된출차기록장부.shift();
        } else {
            출차시간 = 시간계산("23:59");
        }

        누적시간 = 출차시간 - 입차시간;
        요금[정렬된입차기록장부[0][1]] += 누적시간;

        정렬된입차기록장부.shift();
    }

    const 요금Keys = Object.entries(요금).sort((a, b) => a[0] - b[0]);
    return 요금Keys.map((el) => 요금계산1(el[1]));
}

solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]);
// solution([1, 461, 1, 10], ["00:00 1234 IN"]);
// solution([120, 0, 60, 591], ["16:00 3961 IN", "16:00 0202 IN", "18:00 3961 OUT", "18:00 0202 OUT", "23:58 3961 IN"]);
