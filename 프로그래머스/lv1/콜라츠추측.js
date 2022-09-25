function solution(num) {
    let count = 0;

    while (count <= 500) {
        if (num == 1) {
            return count;
        }
        count++;
        num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    }

    return -1;
}
