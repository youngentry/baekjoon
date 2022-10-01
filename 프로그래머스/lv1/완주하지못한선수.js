function solution(participant, completion) {
    if (
        participant.map((el) => {
            if (completion.includes(el)) {
                completion.splice((completion.indexOf(el), 1));
            }
        })
    )
        console.log(completion);
}
