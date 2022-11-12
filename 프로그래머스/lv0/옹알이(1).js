function solution(babbling) {
    const pronunciation = ["aya", "ye", "woo", "ma"];

    let count = 0;

    for (let i = 0; i < babbling.length; i++) {
        let length = babbling[i].length;
        for (let j = 0; j < pronunciation.length; j++) {
            if (babbling[i].indexOf(pronunciation[j]) !== -1) {
                length -= pronunciation[j].length;
            }
        }
        if (length === 0) {
            count++;
        }
    }

    return count;
}

// 1. babbling의 원소에서 옹알이 발음은 각각 최대 한 번씩 등장한다는 제한사항이 있습니다.
// 2. babbling의 원소의 길이 - pronunciation 각 원소의 길이 = 0 이 된다면 가능한 발음입니다.

// ex)
// (ayaye의 길이 5) - (aya의 길이 3) - (ye의 길이 2) = (남은 발음 없음 0) 발음 가능
// (uuuma의 길이 5) - (ma의 길이 2) = (남은 uuu의 길이 3) 발음 불가능
