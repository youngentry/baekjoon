function solution(str1, str2) {
    [str1, str2] = [str1.toLowerCase(), str2.toLowerCase()];

    const 다중집합만들기 = (str) => {
        const 다중집합 = [];

        const alphabetReg = /[a-zA-Z]/;
        for (let i = 0; i < str.length - 1; i++) {
            if (alphabetReg.test(str[i]) && alphabetReg.test(str[i + 1])) {
                다중집합.push(str[i] + str[i + 1]);
            }
        }
        return 다중집합;
    };

    const [str1다중집합, str2다중집합] = [다중집합만들기(str1), 다중집합만들기(str2)];

    const 교집합만들기 = (array1, array2) => {
        const 교집합 = [];

        const [tempArray1, tempArray2] = [[], []];
        tempArray1.push(...array1);
        tempArray2.push(...array2);
        array1.forEach((el) => {
            if (tempArray2.includes(el)) {
                교집합.push(el);
                tempArray1.splice(tempArray1.indexOf(el), 1);
                tempArray2.splice(tempArray2.indexOf(el), 1);
            }
        });

        return 교집합;
    };

    const 교집합 = 교집합만들기(str1다중집합, str2다중집합);

    const 합집합만들기 = (array1, array2, 교집합) => {
        const 합집합 = [...array1, ...array2];
        교집합.forEach((el) => {
            합집합.splice(합집합.indexOf(el), 1);
        });

        return 합집합;
    };

    const 합집합 = 합집합만들기(str1다중집합, str2다중집합, 교집합);

    const 결과구하기 = (교집합, 합집합) => {
        const 길이나누기 = (교집합, 합집합) => {
            return Math.floor((교집합.length / 합집합.length) * 65536);
        };

        return isNaN(길이나누기(교집합, 합집합)) ? 65536 : 길이나누기(교집합, 합집합);
    };

    console.log(결과구하기(교집합, 합집합));
    return 결과구하기(교집합, 합집합);
}
// solution("FRANCE", "french");
// solution("E=M*C^2", "e=m*c^2");
// solution("BAAAA", "AAA");
solution("handshake", "shake hands");
