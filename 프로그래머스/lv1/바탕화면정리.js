function solution(wallpaper) {
  let top = Infinity,
    left = Infinity,
    bottom = 0,
    right = 0;

  wallpaper.forEach((row, rowIndex) => {
    if (row.includes("#")) {
      top = Math.min(top, rowIndex);
      bottom = Math.max(bottom, rowIndex);
    }
    row.split("").forEach((char, columnIndex) => {
      if (char === "#") {
        left = Math.min(left, columnIndex);
        right = Math.max(right, columnIndex);
      }
    });
  });

  return [top, left, bottom + 1, right + 1];
}
