function solution(s) {
    const sliceSideBracketsS = s.slice(2, -2);
    console.log(sliceSideBracketsS);
    const tupleArray = sliceSideBracketsS.split("},{");
    console.log(tupleArray);
    const sortedTupleArray = tupleArray.sort((a, b) => a.length - b.length);
    console.log(sortedTupleArray);
    const joinedTupleArray = sortedTupleArray.join(",");
    console.log(joinedTupleArray);
    const sortedTupleArrayToSet = new Set(joinedTupleArray.split(","));
    console.log(sortedTupleArrayToSet);
    const tuple = [...sortedTupleArrayToSet].map((el) => parseInt(el));
    return tuple;
}

solution("{{2},{2,1},{2,1,3},{2,1,3,4}}");
solution("{{1,2,3},{2,1},{1,2,4,3},{2}}");
