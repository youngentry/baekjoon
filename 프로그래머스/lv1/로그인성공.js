function solution(id_pw, db) {
    for (i = 0; i < db.length; i++) {
        if (db[i][0] == id_pw[0]) {
            if (db[i][1] == id_pw[1]) {
                return "login";
            } else {
                return "wrong pw";
            }
        }
    }
    if (!db.includes(id_pw)) {
        return "fail";
    }
}
