const 분단위변환 = (시간) => {
    return 시간.split(":")[0] * 60 + parseInt(시간.split(":")[1]);
};

// #을 포함한 음정 구분하기
const 샾음정구분하기 = (악보) => {
    const temp = [];
    let 음정위치 = 0;
    while (음정위치 < 악보.length) {
        if (악보[음정위치 + 1] === "#") {
            temp.push(악보[음정위치] + 악보[음정위치 + 1]);
            음정위치 += 2;
        } else {
            temp.push(악보[음정위치]);
            음정위치 += 1;
        }
    }
    return temp;
};

const 치환표 = {
    "C#": "c",
    "D#": "d",
    "F#": "f",
    "G#": "g",
    "A#": "a",
};

const 치환 = (샾구분된악보) => {
    return 샾구분된악보.map((el) => {
        if (el.length === 2) {
            return (el = 치환표[el]);
        }
        return el;
    });
};

function solution(m, musicInfos) {
    const 일치하는노래정보 = [];

    musicInfos.forEach((musicInfo) => {
        const [시작시간, 끝난시간, 곡제목, 악보] = musicInfo.split(",");
        // 시작시간 00:00, 종료시간 00:00 처럼 재생되지 않았다면 넘기기
        if (시작시간 === 끝난시간) return;

        const [분단위끝난시간, 분단위시작시간] = [분단위변환(끝난시간), 분단위변환(시작시간)];
        const 시간차 = 분단위끝난시간 - 분단위시작시간;

        const [샾구분된악보, 샾구분된m] = [샾음정구분하기(악보).slice(0, 시간차), 샾음정구분하기(m)];

        const 재생된음악 = [];
        // 재생 시간이 악보보다 길면 처음으로 돌아가서 음정 반복하여 재생
        if (시간차 > 샾구분된악보.length) {
            for (let i = 0; i < 시간차; i++) {
                재생된음악.push(샾구분된악보[i % 샾구분된악보.length]);
            }
        } else {
            // 짧으면 악보까지만 재생
            재생된음악.push(...샾구분된악보);
        }

        const 치환된m = 치환(샾구분된m);
        const 치환된반복되는음악 = 치환(재생된음악);

        if (치환된반복되는음악.join("").includes(치환된m.join(""))) {
            일치하는노래정보.push([시간차, 곡제목]);
        }
    });

    if (일치하는노래정보.length === 0) return "(None)";
    if (일치하는노래정보.length === 1) return 일치하는노래정보[0][1];
    const 가장긴음악길이 = Math.max(...일치하는노래정보.map((el) => el[0]));
    return 일치하는노래정보[일치하는노래정보.flat().indexOf(가장긴음악길이) / 2][1];
}

solution("CC#BCC#BCC#BCC#B", ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]);
