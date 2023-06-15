function solution(my_string, alp) {
  const myStringArray = my_string.split("");
  const upperString = myStringArray.map((el) => (alp.includes(el) ? el.toUpperCase() : el));
  return upperString.join("");
}
