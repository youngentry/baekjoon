function solution(priorities, location) {
    let count = 0;

    while (priorities.length > 0) {
        console.log(priorities, location);
        let front = priorities[0];

        priorities.shift();

        if (location === 0 && priorities.filter((el) => el > front).length > 0) {
            location += priorities.length;
            priorities.push(front);
            continue;
        }
        if (priorities.filter((el) => el > front).length > 0) {
            location--;
            priorities.push(front);
            continue;
        }
        if (location === 0) {
            console.log(count + 1);
            return count + 1;
        }
        location--;
        count++;
    }
}

solution([1, 2, 3, 4, 5], 3);
