function solution(s) {
    const sliceSideBracketsS = s.slice(2, -2);
    const tupleArray = sliceSideBracketsS.split("},{");
    const sortedTupleArray = tupleArray.sort((a, b) => a.length - b.length);
    const joinedTupleArray = sortedTupleArray.join(",");
    const sortedTupleArrayToSet = new Set(joinedTupleArray.split(","));
    const tuple = [...sortedTupleArrayToSet].map((el) => parseInt(el));
    return tuple;
}

solution("{{2},{2,1},{2,1,3},{2,1,3,4}}");
solution("{{1,2,3},{2,1},{1,2,4,3},{2}}");
