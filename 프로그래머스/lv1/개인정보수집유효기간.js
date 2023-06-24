function solution(today, terms, privacies) {
  const result = [];

  const termsObject = {};
  terms.forEach((term) => (termsObject[term.split(" ")[0]] = term.split(" ")[1]));

  privacies.forEach((privacy, index) => {
    const [date, term] = privacy.split(" ");
    const expireDate = new Date(date);
    expireDate.setMonth(expireDate.getMonth() + parseInt(termsObject[term]));
    if (new Date(today) >= expireDate) {
      result.push(index + 1);
    }
  });
  return result;
}

solution(
  "2020.01.01",
  ["Z 3", "D 5"],
  ["2019.01.01 D", "2019.11.15 Z", "2019.08.02 D", "2019.07.01 D", "2018.12.28 Z"]
);
