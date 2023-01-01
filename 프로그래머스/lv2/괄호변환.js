function solution(p) {
  // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.

  const bracketObject = {
    "(": ")",
    ")": "(",
  };

  const splitBalancedBrackets = (brackets) => {
    if (p === "") return "";
    let stack = [];
    let index = 0;
    for (let i = 0; i < brackets.length; i++) {
      if (brackets[i] === bracketObject[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        stack.push(brackets[i]);
      }
      if (stack.length === 0) {
        index = i;
        break;
      }
    }
    return [brackets.slice(0, index + 1), brackets.slice(index + 1)];
  };

  const isRightBracketString = (u) => {
    let stack = [];
    console.log(u);
    for (let i = 0; i < u.length; i++) {
      if (u[i] === bracketObject[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        stack.push(u[i]);
      }
    }
    if (stack.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
  [u, v] = [...splitBalancedBrackets(p)];
  console.log(`u: "${u}" v: "${v}"`);

  // 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
  if (isRightBracketString(u)) {
    console.log(splitBalancedBrackets(v), "v결과");
    splitBalancedBrackets(v);

    const u2 = splitBalancedBrackets(v)[0];
    const v2 = splitBalancedBrackets(v)[1];

    if (isRightBracketString(u2)) {
      console.log(splitBalancedBrackets(v2), "v2결과");
    }
  }
}
// ()))((()
solution("(()())()");
//       3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
//     4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
//       4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
//       4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
//       4-3. ')'를 다시 붙입니다.
//       4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
//       4-5. 생성된 문자열을 반환합니다.
