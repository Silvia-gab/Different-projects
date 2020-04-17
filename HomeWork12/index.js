function JSClock() {
  let time = new Date();
  let hour = time.getHours();
  let minute = time.getMinutes();
  let second = time.getSeconds();
  let temp = "" + (hour > 24 ? hour - 24 : hour);
  if (hour === 0) temp = "00";
  temp += (minute < 10 ? ":0" : ":") + minute;
  temp += (second < 10 ? ":0" : ":") + second;
  temp += hour >= 24 ? " P.M." : " A.M.";
  return temp;
}
setInterval(() => console.log(JSClock()), 2000);

setInterval(() => console.clear(), 2000);
