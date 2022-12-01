function solution(record) {
    const result = [];
    const USER_DATA = {};

    let tempResult = [];
    for (const el of record) {
        const [상태, id, 닉네임] = el.split(" ");

        if (상태 === "Enter") {
            tempResult.push(`${id},님이 들어왔습니다.`);
        }
        if (상태 === "Leave") {
            tempResult.push(`${id},님이 나갔습니다.`);
            continue;
        }
        USER_DATA[id] = 닉네임;
    }

    tempResult.forEach((el) => result.push(USER_DATA[el.split(",")[0]] + el.split(",")[1]));

    console.log(result);
    return result;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid1234 Ryan", "Enter uid1234 asdasd"]);
