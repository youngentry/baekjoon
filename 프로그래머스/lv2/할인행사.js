function solution(want, number, discount) {
    const productObject = {};
    want.forEach((el, index) => (productObject[el] = number[index]));
    console.log(productObject);

    let possibleDates = 0;

    for (let i = 0; i < discount.length - 9; i++) {
        const tempProductObject = { ...productObject };
        let needs = "";

        for (let j = i; j < i + 10; j++) {
            tempProductObject[discount[j]] = tempProductObject[discount[j]] - 1 || 0;
        }

        // console.log(tempProductObject);
        needs += Object.values(tempProductObject).join("");
        if (needs === "0".repeat(Object.keys(tempProductObject).length)) {
            possibleDates++;
        }
        console.log(needs, " needs");
    }
    // console.log(possibleDates);
    return possibleDates;
}

solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"]);
solution(["apple"], [10], ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"]);
// 10일 연속으로 원하는 제품과 수량이 할인하는 날짜에 일치하도록 회원가입
// 회원가입을 할 수 있는 날짜의 총 일수를 반환, 불가능하면 0 반환
