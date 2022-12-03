function solution(files) {
    // head,number,tail 배열만들기
    const [number, fileArray] = [[], []];
    let isContinuousCount = 0;
    files.forEach((file, index) => {
        const tempNumber = [];
        for (let i = 0; i < file.length; i++) {
            if (tempNumber.length >= 5) break;

            if (isNaN(parseInt(file[i]))) {
                if (isContinuousCount === 1) break;
                continue;
            }
            if (!isNaN(file[i]) && file[i] !== " ") {
                isContinuousCount = 1;
                tempNumber.push(file[i]);
                continue;
            }
        }
        // number 배열을 먼저 만들고 number를 기준으로 head와 tail 나누면서 순서 부여하기
        isContinuousCount = 0;
        number.push(tempNumber.join(""));
        const numberArrayLength = number[number.length - 1];
        const numberIndex = file.indexOf(numberArrayLength[0]);
        fileArray.push([file.slice(0, numberIndex), number[index], file.slice(numberIndex + numberArrayLength.length), index]);
    });

    // 헤드 순으로 정렬하기
    fileArray.sort((a, b) => {
        if (a[0].toUpperCase() > b[0].toUpperCase()) return 1;
        if (a[0].toUpperCase() < b[0].toUpperCase()) return -1;
        if (parseInt(a[1]) < parseInt(b[1])) return -1;
    });

    const result = [];
    fileArray.forEach((el) => {
        el.pop();
        result.push(el.join(""));
    });
    return result;
}
solution(["ee0e", " 1e1e1e1e", "-1", "  1", " 0"]);
