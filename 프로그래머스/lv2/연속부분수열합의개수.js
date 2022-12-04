function solution(elements) {
    const answer = new Set();
    const tempArray = [...elements, ...elements];

    let count = 0;
    while (count < elements.length) {
        count++;
        for (let i = 0; i < elements.length; i++) {
            answer.add([...tempArray].splice(i, count).reduce((a, b) => a + b));
        }
    }

    return answer.size;
}

solution([7, 9, 1, 1, 4]);
