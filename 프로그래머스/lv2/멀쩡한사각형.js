function solution(w, h) {
  let 최대공약수 = 1;
  let 큰수 = Math.max(w, h);
  for (let i = 2; i <= 큰수; i++) {
    if (w % i === 0 && h % i === 0) {
      최대공약수 = i;
    }
  }

  let 서로소W = w / 최대공약수;
  let 서로소H = h / 최대공약수;

  let 서로소너비 = 서로소W * 서로소H;
  let 멀쩡한모눈 = (서로소W - 1) * (서로소H - 1);

  let 단위당잘린모눈수 = 서로소너비 - 멀쩡한모눈;
  let 잘린총모눈수 = 단위당잘린모눈수 * 최대공약수;

  let 전체너비 = w * h;
  return 전체너비 - 잘린총모눈수;
}
