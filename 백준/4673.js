function findSelfNumber() {
  let constructor = [];

  for (i = 1; i < 10000; i++) {
    let dn = 0;
    dn += i;
    for (j = 0; j < 4; j++) {
      dn += Number(String(i).charAt(j));
    }
    constructor.push(dn);
  }

  let result = "";

  for (i = 1; i < 10000; i++) {
    if (!constructor.includes(i)) {
      result += i + "\n";
    }
  }
  console.log(result);
}

findSelfNumber();
