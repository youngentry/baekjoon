function solution(skill, skill_trees) {
    let answer = 0;

    for (let i = 0; i < skill_trees.length; i++) {
        const sortedSkillTree = skill_trees[i]
            .split("")
            .filter((el1) => skill.split("").includes(el1))
            .join("");

        if (skill.startsWith(sortedSkillTree)) answer++;
    }

    console.log(answer);
    return answer;
}
solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
