function solution(s, n) {
    let word = "";

    for (i = 0; i < s.length; i++) {
        let asNum = s.charCodeAt(i);
        if (s[i] != " ") {
            if (asNum >= 65 && asNum <= 90) {
                asNum + n > 90 ? (word += String.fromCharCode(64 + ((asNum + n) % 90))) : (word += String.fromCharCode(asNum + n));
            } else {
                asNum + n > 122 ? (word += String.fromCharCode(96 + ((asNum + n) % 122))) : (word += String.fromCharCode(asNum + n));
            }
        } else {
            word += " ";
        }
    }
    return word;
}

// charCodeAt / fromCharCode
// A65~90
// a97~122
//문자열.charCodeAt(문자열 자릿수)
//String.fromCharCode(아스키코드 번호)
