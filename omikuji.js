// Generate a random value. 0 to 6
var rnd = Math.floor(Math.random() * 7);
var result;
switch (rnd) {
  case 0:
    result = "大吉：今日はいい日になりそう！";
    break;
  case 1:
    result = "中吉：気分転換が大事かも？";
    break;
  case 2:
    result = "小吉：今日は家でゆっくり過ごした方がいいかも...";
    break;
  case 3:
    result = "吉：普通の日々が過ごせそう！";
    break;
  case 4:
    result = "末吉：末吉って吉より運勢よくないんだよ！";
    break;
  case 5:
    result = "凶：今日は家でゆっくり過ごした方がいいかも...";
    break;
  case 6:
    result = "大凶：一日中寝ていた方がいいかも...";
    break;
}
document.write(result);
