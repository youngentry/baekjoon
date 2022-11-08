function solution(people, limit) {
    let result = 0;
    const sortedPeopleArray = people.sort((a, b) => a - b);

    for (i = 0, j = people.length - 1; i <= j; j--) {
        if (sortedPeopleArray[i] + sortedPeopleArray[j] <= limit) {
            i++;
        }
        result++;
    }
    return result;
}
