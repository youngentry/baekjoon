function solution(str1, str2) {
    [str1, str2] = [str1.toLowerCase(), str2.toLowerCase()];

    // 2글자씩 자르기
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

    const str1다중집합 = 다중집합만들기(str1);
    const str2다중집합 = 다중집합만들기(str2);

    console.log(str1다중집합, "str1다중집합");
    console.log(str2다중집합, "str2다중집합");

    const 교집합만들기 = (array1, array2) => {
        const 교집합 = [];

        const tempArray1 = [];
        const tempArray2 = [];
        tempArray1.push(...array1);
        tempArray2.push(...array2);

        tempArray1.forEach((el) => {
            if (tempArray2.includes(el)) {
                교집합.push(el);
                tempArray1.splice(tempArray1.indexOf(el), 1);
                tempArray2.splice(tempArray2.indexOf(el), 1);
            }
        });

        // tempArray1.forEach((el) => {
        //     if (tempArray2.includes(el)) {
        //         교집합.push(el);
        //     }
        // });
        return 교집합;
    };

    const 교집합 = 교집합만들기(str1다중집합, str2다중집합);
    console.log(교집합, "교집합");

    const 합집합만들기 = (array1, array2, 교집합) => {
        // const 합집합 = [];
        // array1
        //     .filter((el) => {
        //         if (!교집합.includes(el)) return el;
        //     })
        //     .forEach((el) => 합집합.push(el));

        // console.log(array1);
        // array2.forEach((el) => 합집합.push(el));
        const 합집합 = [...array1, ...array2];
        교집합.forEach((el) => {
            합집합.splice(합집합.indexOf(el), 1);
        });

        return 합집합;
    };

    const 합집합 = 합집합만들기(str1다중집합, str2다중집합, 교집합);
    console.log(합집합, "합집합");

    const 결과구하기 = (교집합, 합집합) => {
        const 길이나누기 = (교집합, 합집합) => {
            return Math.floor((교집합.length / 합집합.length) * 65536);
        };

        return isNaN(길이나누기(교집합, 합집합)) ? 65536 : 길이나누기(교집합, 합집합);
    };

    console.log(결과구하기(교집합, 합집합), "결과구하기");
    return 결과구하기(교집합, 합집합);
}
solution("FRANCE", "french");

solution("E=M*C^2", "e=m*c^2");
solution("BAAAA", "AAA");
solution("handshakeAAA", "shake hands");
