// Show alert when clicked this button.
document.getElementById("omikuji_btn").onclick = function () {
    // Generate a random value. 0 to 2
    var rnd = Math.floor ( Math.random() * 3);
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
    }
    alert(result);
}