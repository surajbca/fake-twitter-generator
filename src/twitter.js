function displayPlayer() {
  var input = document.getElementById("player_stuff").elements;
  var position = input[0];
  var player_id = input[1];

  document.getElementById("disp_player").innerHTML = position + player_id;
}

/* start dark-mode*/
const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");
const form = document.getElementById("ml-12");
const Note = document.getElementById("Note");
const myElement = document.getElementById("myElement");
const pragraph = document.getElementById("mt-5");
const desktopViewBody = document.getElementById("desktopViewBody");
const androidView = document.getElementById("androidView");
const Select1 = document.getElementById("Select1");
const Select2 = document.getElementById("Select2");
const Tweet = document.getElementById("Tweet");
const iphoneView = document.getElementById("iphoneView");
const div1 = document.getElementById("div1");
const born1 = document.getElementById("born1");
const totalTweet = document.getElementById("totalTweet");
const dob = document.getElementById("dob");
const time = document.getElementById("time");
const following1 = document.getElementById("following1");
const followers1 = document.getElementById("followers1");
const wifiIcon = document.getElementById("wifi");
const signal2 = document.getElementById("signal2");
const battery = document.getElementById("battery");
const battery1 = document.getElementById("battery1");
const ellipsis = document.getElementById("ellipsis");
const percent = document.getElementById("percent");
const time2 = document.getElementById("time2");
const mobileTime = document.getElementById("mobileTime");
const battery2 = document.getElementById("battery2");
const checkIcon = document.getElementById("checkIcon");
const ellipsisH = document.getElementById("ellipsis-h");
const LiveLocation = document.getElementById("LiveLocation");
const signal = document.getElementById("signal");
const urldark = document.getElementById("url");

toggle.addEventListener("click", function () {
  /*this.classList.toggle("bi-moon");*/

  if (this.classList.toggle("dark")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "2s";

    form.style.background = "white";
    form.style.color = "black";
    form.style.transition = "2s";

    Note.style.background = "white";
    Note.style.color = "black";
    Note.style.transition = "2s";

    myElement.style.background = "white";
    myElement.style.color = "black";
    myElement.style.transition = "2s";

    pragraph.style.background = "white";
    pragraph.style.color = "black";
    pragraph.style.transition = "2s";

    desktopViewBody.style.background = "white";
    desktopViewBody.style.color = "black";
    desktopViewBody.style.transition = "2s";

    androidView.style.background = "white";
    androidView.style.color = "black";
    androidView.style.transition = "2s";

    Select1.style.background = "white";
    Select1.style.color = "black";
    Select1.style.transition = "2s";

    Select2.style.background = "white";
    Select2.style.color = "black";
    Select2.style.transition = "2s";

    Tweet.style.background = "white";
    Tweet.style.color = "black";
    Tweet.style.transition = "2s";

    iphoneView.style.background = "white";
    iphoneView.style.color = "black";
    iphoneView.style.transition = "2s";

    div1.style.background = "white";
    div1.style.color = "black";
    div1.style.transition = "2s";

    born1.style.background = "white";
    born1.style.color = "black";
    born1.style.transition = "2s";

    totalTweet.style.background = "white";
    totalTweet.style.color = "black";
    totalTweet.style.transition = "2s";

    dob.style.background = "white";
    dob.style.color = "black";
    dob.style.transition = "2s";

    following1.style.background = "white";
    following1.style.color = "black";
    following1.style.transition = "2s";

    followers1.style.background = "white";
    followers1.style.color = "black";
    followers1.style.transition = "2s";

    wifiIcon.style.background = "white";
    wifiIcon.style.color = "black";
    wifiIcon.style.transition = "2s";

    signal2.style.background = "white";
    signal2.style.color = "black";
    signal2.style.transition = "2s";

    battery.style.background = "white";
    battery.style.color = "black";
    battery.style.transition = "2s";

    battery1.style.background = "white";
    battery1.style.color = "black";
    battery1.style.transition = "2s";

    ellipsis.style.background = "white";
    ellipsis.style.color = "black";
    ellipsis.style.transition = "2s";

    percent.style.background = "white";
    percent.style.color = "black";
    percent.style.transition = "2s";

    time.style.background = "white";
    time.style.color = "#4a4a4a";
    time.style.transition = "2s";

    time2.style.background = "white";
    time2.style.color = "black";
    time2.style.transition = "2s";

    mobileTime.style.background = "white";
    mobileTime.style.color = "black";
    mobileTime.style.transition = "2s";

    battery2.style.background = "white";
    battery2.style.color = "black";
    battery2.style.transition = "2s";

    checkIcon.style.background = "white";
    checkIcon.style.color = "black";
    checkIcon.style.transition = "2s";

    ellipsisH.style.background = "white";
    ellipsisH.style.color = "grey";
    ellipsisH.style.transition = "2s";

    LiveLocation.style.background = "white";
    LiveLocation.style.color = "black";
    LiveLocation.style.transition = "2s";

    signal.style.background = "white";
    signal.style.color = "dark";
    signal.style.transition = "2s";

    urldark.style.background = "white";
    urldark.style.color = "dark";
    urldark.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "2s";

    form.style.background = "black";
    form.style.color = "white";
    form.style.transition = "2s";

    Note.style.background = "black";
    Note.style.color = "white";
    Note.style.transition = "2s";

    myElement.style.background = "black";
    myElement.style.color = "white";
    myElement.style.transition = "2s";

    pragraph.style.background = "black";
    pragraph.style.color = "white";
    pragraph.style.transition = "2s";

    wifiIcon.style.background = "black";
    wifiIcon.style.color = "white";
    wifiIcon.style.transition = "2s";

    desktopViewBody.style.background = "black";
    desktopViewBody.style.color = "white";
    desktopViewBody.style.transition = "2s";

    androidView.style.background = "black";
    androidView.style.color = "white";
    androidView.style.transition = "2s";

    Select1.style.background = "black";
    Select1.style.color = "white";
    Select1.style.transition = "2s";

    Select2.style.background = "black";
    Select2.style.color = "white";
    Select2.style.transition = "2s";

    Tweet.style.background = "black";
    Tweet.style.color = "white";
    Tweet.style.transition = "2s";

    iphoneView.style.background = "black";
    iphoneView.style.color = "white";
    iphoneView.style.transition = "2s";

    div1.style.background = "black";
    div1.style.color = "white";
    div1.style.transition = "2s";

    born1.style.background = "black";
    born1.style.color = "white";
    born1.style.transition = "2s";

    totalTweet.style.background = "black";
    totalTweet.style.color = "white";
    totalTweet.style.transition = "2s";

    dob.style.background = "black";
    dob.style.color = "white";
    dob.style.transition = "2s";

    following1.style.background = "black";
    following1.style.color = "white";
    following1.style.transition = "2s";

    followers1.style.background = "black";
    followers1.style.color = "white";
    followers1.style.transition = "2s";

    signal2.style.background = "black";
    signal2.style.color = "white";
    signal2.style.transition = "2s";

    battery.style.background = "black";
    battery.style.color = "white";
    battery.style.transition = "2s";

    battery1.style.background = "black";
    battery1.style.color = "white";
    battery1.style.transition = "2s";

    ellipsis.style.background = "black";
    ellipsis.style.color = "white";
    ellipsis.style.transition = "2s";

    percent.style.background = "black";
    percent.style.color = "white";
    percent.style.transition = "2s";

    time.style.background = "black";
    time.style.color = "white";
    time.style.transition = "2s";

    time2.style.background = "black";
    time2.style.color = "white";
    time2.style.transition = "2s";

    mobileTime.style.background = "black";
    mobileTime.style.color = "white";
    mobileTime.style.transition = "2s";

    battery2.style.background = "black";
    battery2.style.color = "white";
    battery2.style.transition = "2s";

    checkIcon.style.background = "black";
    checkIcon.style.color = "white";
    checkIcon.style.transition = "2s";

    ellipsisH.style.background = "black";
    ellipsisH.style.color = "white";
    ellipsisH.style.transition = "2s";

    LiveLocation.style.background = "black";
    LiveLocation.style.color = "white";
    LiveLocation.style.transition = "2s";

    signal.style.background = "black";
    signal.style.color = "white";
    signal.style.transition = "2s";

    urldark.style.background = "black";
    urldark.style.color = "white";
    urldark.style.transition = "2s";
  }
});
/*end dark-mode*/

/*start blue mode */
const toggle1 = document.getElementById("toggleBlue");
const body1 = document.querySelector("body");
const form1 = document.getElementById("ml-12");
const Note1 = document.getElementById("Note");
const myElement1 = document.getElementById("myElement");
const pragraph1 = document.getElementById("mt-5");
const desktopViewBody1 = document.getElementById("desktopViewBody");
const androidView1 = document.getElementById("androidView");
const Select3 = document.getElementById("Select1");
const Select4 = document.getElementById("Select2");
const Tweet1 = document.getElementById("Tweet");
const iphoneView1Blue = document.getElementById("iphoneView");
const div1Blue = document.getElementById("div1");
const born1Blue = document.getElementById("born1");
const totalTweetBlue = document.getElementById("totalTweet");
const BornBlue = document.getElementById("dob");
const timeBlue = document.getElementById("time");
const following1Blue = document.getElementById("following1");
const followers1Blue = document.getElementById("followers1");
const wifiBlue = document.getElementById("wifi");
const signalBlue = document.getElementById("signal");
const signal2Blue = document.getElementById("signal2");
const batteryBlue = document.getElementById("battery");
const battery1Blue = document.getElementById("battery1");
const ellipsisBlue = document.getElementById("ellipsis-h");
const percentBlue = document.getElementById("percent");
const time2Blue = document.getElementById("time2");
const mobileTimeBlue = document.getElementById("mobileTime");
const battery2Blue = document.getElementById("battery2");
const checkIconBlue = document.getElementById("checkIcon");
const LiveLocationBlue = document.getElementById("LiveLocation");
const urlBlue = document.getElementById("url");
const ellipsis1Blue = document.getElementById("ellipsis");

toggle1.addEventListener("click", function () {
  if (this.classList.toggle("Blue")) {
    body1.style.background = "white";
    body1.style.color = "black";
    body1.style.transition = "2s";

    form1.style.background = "white";
    form1.style.color = "black";
    form1.style.transition = "2s";

    Note1.style.background = "white";
    Note1.style.color = "black";
    Note1.style.transition = "2s";

    myElement1.style.background = "white";
    myElement1.style.color = "black";
    myElement1.style.transition = "2s";

    pragraph1.style.background = "white";
    pragraph1.style.color = "black";
    pragraph1.style.transition = "2s";

    desktopViewBody1.style.background = "white";
    desktopViewBody1.style.color = "black";
    desktopViewBody1.style.transition = "2s";

    androidView1.style.background = "white";
    androidView1.style.color = "black";
    androidView1.style.transition = "2s";

    Select3.style.background = "white";
    Select3.style.color = "black";
    Select3.style.transition = "2s";

    Select4.style.background = "white";
    Select4.style.color = "black";
    Select4.style.transition = "2s";

    Tweet1.style.background = "white";
    Tweet1.style.color = "black";
    Tweet1.style.transition = "2s";

    iphoneView1Blue.style.background = "white";
    iphoneView1Blue.style.color = "black";
    iphoneView1Blue.style.transition = "2s";

    div1Blue.style.background = "white";
    div1Blue.style.color = "black";
    div1Blue.style.transition = "2s";

    born1Blue.style.background = "white";
    born1Blue.style.color = "black";
    born1Blue.style.transition = "2s";

    totalTweetBlue.style.background = "white";
    totalTweetBlue.style.color = "black";
    totalTweetBlue.style.transition = "2s";

    BornBlue.style.background = "white";
    BornBlue.style.color = "black";
    BornBlue.style.transition = "2s";

    following1Blue.style.background = "white";
    following1Blue.style.color = "black";
    following1Blue.style.transition = "2s";

    followers1Blue.style.background = "white";
    followers1Blue.style.color = "black";
    followers1Blue.style.transition = "2s";

    wifiBlue.style.background = "white";
    wifiBlue.style.color = "black";
    wifiBlue.style.transition = "2s";

    signalBlue.style.background = "white";
    signalBlue.style.color = "black";
    signalBlue.style.transition = "2s";

    signal2Blue.style.background = "white";
    signal2Blue.style.color = "black";
    signal2Blue.style.transition = "2s";

    batteryBlue.style.background = "white";
    batteryBlue.style.color = "black";
    batteryBlue.style.transition = "2s";

    battery1Blue.style.background = "white";
    battery1Blue.style.color = "black";
    battery1Blue.style.transition = "2s";

    ellipsisBlue.style.background = "white";
    ellipsisBlue.style.color = "black";
    ellipsisBlue.style.transition = "2s";

    percentBlue.style.background = "white";
    percentBlue.style.color = "black";
    percentBlue.style.transition = "2s";

    timeBlue.style.background = "white";
    timeBlue.style.color = "black";
    timeBlue.style.transition = "2s";

    time2Blue.style.background = "white";
    time2Blue.style.color = "black";
    time2Blue.style.transition = "2s";

    mobileTimeBlue.style.background = "white";
    mobileTimeBlue.style.color = "black";
    mobileTimeBlue.style.transition = "2s";

    battery2Blue.style.background = "white";
    battery2Blue.style.color = "black";
    battery2Blue.style.transition = "2s";

    checkIconBlue.style.background = "white";
    checkIconBlue.style.color = "black";
    checkIconBlue.style.transition = "2s";

    LiveLocationBlue.style.background = "white";
    LiveLocationBlue.style.color = "black";
    LiveLocationBlue.style.transition = "2s";

    urlBlue.style.background = "white";
    urlBlue.style.color = "black";
    urlBlue.style.transition = "2s";

    ellipsis1Blue.style.background = "white";
    ellipsis1Blue.style.color = "black";
    ellipsis1Blue.style.transition = "2s";
  } else {
    body1.style.background = "#0000ff";
    body1.style.color = "white";
    body1.style.transition = "2s";

    form1.style.background = "#0000ff";
    form1.style.color = "white";
    form1.style.transition = "2s";

    Note1.style.background = "#0000ff";
    Note1.style.color = "white";
    Note1.style.transition = "2s";

    myElement1.style.background = "#0000ff";
    myElement1.style.color = "white";
    myElement1.style.transition = "2s";

    pragraph1.style.background = "#0000ff";
    pragraph1.style.color = "white";
    pragraph1.style.transition = "2s";

    desktopViewBody1.style.background = "#0000ff";
    desktopViewBody1.style.color = "white";
    desktopViewBody1.style.transition = "2s";

    androidView1.style.background = "#0000ff";
    androidView1.style.color = "white";
    androidView1.style.transition = "2s";

    Select3.style.background = "#0000ff";
    Select3.style.color = "white";
    Select3.style.transition = "2s";

    Select4.style.background = "#0000ff";
    Select4.style.color = "white";
    Select4.style.transition = "2s";

    Tweet1.style.background = "#0000ff";
    Tweet1.style.color = "white";
    Tweet1.style.transition = "2s";

    iphoneView1Blue.style.background = "#0000ff";
    iphoneView1Blue.style.color = "white";
    iphoneView1Blue.style.transition = "2s";

    div1Blue.style.background = "#0000ff";
    div1Blue.style.color = "white";
    div1Blue.style.transition = "2s";

    born1Blue.style.background = "#0000ff";
    born1Blue.style.color = "white";
    born1Blue.style.transition = "2s";

    totalTweetBlue.style.background = "#0000ff";
    totalTweetBlue.style.color = "white";
    totalTweetBlue.style.transition = "2s";

    BornBlue.style.background = "#0000ff";
    BornBlue.style.color = "white";
    BornBlue.style.transition = "2s";

    following1Blue.style.background = "#0000ff";
    following1Blue.style.color = "white";
    following1Blue.style.transition = "2s";

    followers1Blue.style.background = "#0000ff";
    followers1Blue.style.color = "white";
    followers1Blue.style.transition = "2s";

    wifiBlue.style.background = "#0000ff";
    wifiBlue.style.color = "white";
    wifiBlue.style.transition = "2s";

    signalBlue.style.background = "#0000ff";
    signalBlue.style.color = "white";
    signalBlue.style.transition = "2s";

    signal2Blue.style.background = "#0000ff";
    signal2Blue.style.color = "white";
    signal2Blue.style.transition = "2s";

    batteryBlue.style.background = "#0000ff";
    batteryBlue.style.color = "white";
    batteryBlue.style.transition = "2s";

    battery1Blue.style.background = "#0000ff";
    battery1Blue.style.color = "white";
    battery1Blue.style.transition = "2s";

    ellipsisBlue.style.background = "#0000ff";
    ellipsisBlue.style.color = "white";
    ellipsisBlue.style.transition = "2s";

    percentBlue.style.background = "#0000ff";
    percentBlue.style.color = "white";
    percentBlue.style.transition = "2s";

    timeBlue.style.background = "#0000ff";
    timeBlue.style.color = "white";
    timeBlue.style.transition = "2s";

    time2Blue.style.background = "#0000ff";
    time2Blue.style.color = "white";
    time2Blue.style.transition = "2s";

    mobileTimeBlue.style.background = "#0000ff";
    mobileTimeBlue.style.color = "white";
    mobileTimeBlue.style.transition = "2s";

    battery2Blue.style.background = "#0000ff";
    battery2Blue.style.color = "white";
    battery2Blue.style.transition = "2s";

    checkIconBlue.style.background = "#0000ff";
    checkIconBlue.style.color = "#0000ff";
    checkIconBlue.style.transition = "2s";

    LiveLocationBlue.style.background = "#0000ff";
    LiveLocationBlue.style.color = "white";
    LiveLocationBlue.style.transition = "2s";

    urlBlue.style.background = "#0000ff";
    urlBlue.style.color = "white";
    urlBlue.style.transition = "2s";

    ellipsis1Blue.style.background = "#0000ff";
    ellipsis1Blue.style.color = "white";
    ellipsis1Blue.style.transition = "2s";
  }
});
/*end blue mode*/

/*start gold mode*/
const toggle2 = document.getElementById("togglegold");
const body2 = document.querySelector("body");
const form2 = document.getElementById("ml-12");
const Note2 = document.getElementById("Note");
const myElement2 = document.getElementById("myElement");
const pragraph2 = document.getElementById("mt-5");
const followinggold = document.getElementById("following1");
const followersgold = document.getElementById("followers1");
const LiveLocationgold = document.getElementById("LiveLocation");
const dobgold = document.getElementById("dob");
const timegold = document.getElementById("time");
const urlgold = document.getElementById("url");
const ellipsisgold = document.getElementById("ellipsis-h");
const ellipsisglod2 = document.getElementById("ellipsis-h2");
const androidViewgold = document.getElementById("androidView");
const iphoneViewgold = document.getElementById("iphoneView");
const signalgold = document.getElementById("signal");
const signal2gold = document.getElementById("signal2");
const wifigold = document.getElementById("wifi");
const batterygold = document.getElementById("battery");
const mobileTimegold = document.getElementById("mobileTime");
const battery1gold = document.getElementById("battery1");
const time2gold = document.getElementById("time2");
const percentgold = document.getElementById("percent");
const battery2gold = document.getElementById("battery2");
const ellipsis1gold = document.getElementById("ellipsis");
/*const desktopViewBody = document.getElementById("desktopViewBody");

const Select1 = document.getElementById("Select1");
const Select2 = document.getElementById("Select2");
const Tweet = document.getElementById("Tweet");

const div1 = document.getElementById("div1");
const born1 = document.getElementById("born1");
const totalTweet = document.getElementById("totalTweet");

const time = document.getElementById("time");
const following1 = document.getElementById("following1");
const followers1 = document.getElementById("followers1");
const wifi = document.getElementById("wifi");









const checkIcon = document.getElementById("checkIcon");*/

toggle2.addEventListener("click", function () {
  if (this.classList.toggle("gold")) {
    body2.style.background = "white";
    body2.style.color = "black";
    body2.style.transition = "2s";

    form2.style.background = "white";
    form2.style.color = "black";
    form2.style.transition = "2s";

    Note2.style.background = "white";
    Note2.style.color = "black";
    Note2.style.transition = "2s";

    myElement2.style.background = "white";
    myElement2.style.color = "black";
    myElement2.style.transition = "2s";

    pragraph2.style.background = "white";
    pragraph2.style.color = "black";
    pragraph2.style.transition = "2s";

    desktopViewBody.style.background = "white";
    desktopViewBody.style.color = "black";
    desktopViewBody.style.transition = "2s";

    androidViewgold.style.background = "white";
    androidViewgold.style.color = "black";
    androidViewgold.style.transition = "2s";

    Select1.style.background = "white";
    Select1.style.color = "black";
    Select1.style.transition = "2s";

    Select2.style.background = "white";
    Select2.style.color = "black";
    Select2.style.transition = "2s";

    Tweet.style.background = "white";
    Tweet.style.color = "black";
    Tweet.style.transition = "2s";

    iphoneViewgold.style.background = "white";
    iphoneViewgold.style.color = "black";
    iphoneViewgold.style.transition = "2s";

    div1.style.background = "white";
    div1.style.color = "black";
    div1.style.transition = "2s";

    born1.style.background = "white";
    born1.style.color = "black";
    born1.style.transition = "2s";

    totalTweet.style.background = "white";
    totalTweet.style.color = "black";
    totalTweet.style.transition = "2s";

    followinggold.style.background = "white";
    followinggold.style.color = "black";
    followinggold.style.transition = "2s";

    followersgold.style.background = "white";
    followersgold.style.color = "black";
    followersgold.style.transition = "2s";

    LiveLocationgold.style.background = "white";
    LiveLocationgold.style.color = "black";
    LiveLocationgold.style.transition = "2s";

    dobgold.style.background = "white";
    dobgold.style.color = "black";
    dobgold.style.transition = "2s";

    timegold.style.background = "white";
    timegold.style.color = "black";
    timegold.style.transition = "2s";

    urlgold.style.background = "white";
    urlgold.style.color = "black";
    urlgold.style.transition = "2s";

    ellipsisgold.style.background = "white";
    ellipsisgold.style.color = "black";
    ellipsisgold.style.border = "1px solid gray";
    ellipsisgold.style.transition = "2s";

    ellipsisglod2.style.border = "1px solid gray";
    ellipsisglod2.style.transition = "2s";

    signal2gold.style.background = "white";
    signal2gold.style.color = "black";
    signal2gold.style.transition = "2s";

    wifigold.style.background = "white";
    wifigold.style.color = "black";
    wifigold.style.transition = "2s";

    batterygold.style.background = "white";
    batterygold.style.color = "black";
    batterygold.style.transition = "2s";

    battery1gold.style.background = "white";
    battery1gold.style.color = "black";
    battery1gold.style.transition = "2s";

    time2gold.style.background = "white";
    time2gold.style.color = "black";
    time2gold.style.transition = "2s";

    mobileTimegold.style.background = "white";
    mobileTimegold.style.color = "black";
    mobileTimegold.style.transition = "2s";

    percentgold.style.background = "white";
    percentgold.style.color = "black";
    percentgold.style.transition = "2s";

    battery2gold.style.background = "white";
    battery2gold.style.color = "black";
    battery2gold.style.transition = "2s";

    ellipsis1gold.style.background = "white";
    ellipsis1gold.style.color = "black";
    ellipsis1gold.style.transition = "2s";

    signalgold.style.background = "white";
    signalgold.style.color = "black";
    signalgold.style.transition = "2s";
  } else {
    body2.style.background = "#FFD700";
    body2.style.color = "white";
    body2.style.transition = "2s";

    form2.style.background = "#FFD700";
    form2.style.color = "white";
    form2.style.transition = "2s";

    Note2.style.background = "#FFD700";
    Note2.style.color = "white";
    Note2.style.transition = "2s";

    myElement2.style.background = "#FFD700";
    myElement2.style.color = "white";
    myElement2.style.transition = "2s";

    pragraph2.style.background = "#FFD700";
    pragraph2.style.color = "white";
    pragraph2.style.transition = "2s";

    desktopViewBody.style.background = "#FFD700";
    desktopViewBody.style.color = "white";
    desktopViewBody.style.transition = "2s";

    androidViewgold.style.background = "#FFD700";
    androidViewgold.style.color = "white";
    androidViewgold.style.transition = "2s";

    Select1.style.background = "#FFD700";
    Select1.style.color = "white";
    Select1.style.transition = "2s";

    Select2.style.background = "#FFD700";
    Select2.style.color = "white";
    Select2.style.transition = "2s";

    Tweet.style.background = "#FFD700";
    Tweet.style.color = "white";
    Tweet.style.transition = "2s";

    iphoneViewgold.style.background = "#FFD700";
    iphoneViewgold.style.color = "white";
    iphoneViewgold.style.transition = "2s";

    div1.style.background = "#FFD700";
    div1.style.color = "white";
    div1.style.transition = "2s";

    born1.style.background = "#FFD700";
    born1.style.color = "white";
    born1.style.transition = "2s";

    totalTweet.style.background = "#FFD700";
    totalTweet.style.color = "white";
    totalTweet.style.transition = "2s";

    followinggold.style.background = "#FFD700";
    followinggold.style.color = "white";
    followinggold.style.transition = "2s";

    followersgold.style.background = "#FFD700";
    followersgold.style.color = "white";
    followersgold.style.transition = "2s";

    LiveLocationgold.style.background = "#FFD700";
    LiveLocationgold.style.color = "white";
    LiveLocationgold.style.transition = "2s";

    dobgold.style.background = "#FFD700";
    dobgold.style.color = "white";
    dobgold.style.transition = "2s";

    timegold.style.background = "#FFD700";
    timegold.style.color = "white";
    timegold.style.transition = "2s";

    urlgold.style.background = "#FFD700";
    urlgold.style.color = "white";
    urlgold.style.transition = "2s";

    ellipsisgold.style.background = "#FFD700";
    ellipsisgold.style.color = "white";
    ellipsisgold.style.border = "1px solid white";
    ellipsisgold.style.transition = "2s";

    ellipsisglod2.style.border = "1px solid white";
    ellipsisglod2.style.transition = "2s";

    signal2gold.style.background = "#FFD700";
    signal2gold.style.color = "white";
    signal2gold.style.transition = "2s";

    wifigold.style.background = "#FFD700";
    wifigold.style.color = "white";
    wifigold.style.transition = "2s";

    signalgold.style.background = "#FFD700";
    signalgold.style.color = "white";
    signalgold.style.transition = "2s";

    batterygold.style.background = "#FFD700";
    batterygold.style.color = "white";
    batterygold.style.transition = "2s";

    battery1gold.style.background = "#FFD700";
    battery1gold.style.color = "white";
    battery1gold.style.transition = "2s";

    time2gold.style.background = "#FFD700";
    time2gold.style.color = "white";
    time2gold.style.transition = "2s";

    mobileTimegold.style.background = "#FFD700";
    mobileTimegold.style.color = "white";
    mobileTimegold.style.transition = "2s";

    percentgold.style.background = "#FFD700";
    percentgold.style.color = "white";
    percentgold.style.transition = "2s";

    battery2gold.style.background = "#FFD700";
    battery2gold.style.color = "white";
    battery2gold.style.transition = "2s";

    ellipsis1gold.style.background = "#FFD700";
    ellipsis1gold.style.color = "white";
    ellipsis1gold.style.transition = "2s";
  }
});

/*end gold mode*/

/*start gray mode*/
const toggle3 = document.getElementById("togglegrey");
const body3 = document.querySelector("body");
const form3 = document.getElementById("ml-12");
const Note3 = document.getElementById("Note");
const myElement3 = document.getElementById("myElement");
const pragraph3gray = document.getElementById("mt-5");
const desktopViewBodygray = document.getElementById("desktopViewBody");
const Tweetgrey = document.getElementById("Tweet");
const totalTweetgray = document.getElementById("totalTweet");
const ellipsisgray = document.getElementById("ellipsis-h");
const ellipsisgray2 = document.getElementById("ellipsis-h2");
const Tweetgray = document.getElementById("Tweet");
const born1gray = document.getElementById("born1");
const LiveLocationgray = document.getElementById("LiveLocation");
const dobgray = document.getElementById("dob");
const timegray = document.getElementById("time");
const following1gray = document.getElementById("following1");
const followers1gary = document.getElementById("followers1");
const urlgray = document.getElementById("url");
const Select1gray = document.getElementById("Select1");
const Select2gray = document.getElementById("Select2");
const div1gray = document.getElementById("div1");
const androidViewgray = document.getElementById("androidView");
const iphoneViewgray = document.getElementById("iphoneView");
const time2gray = document.getElementById("time2");
const battery1gray = document.getElementById("battery1");
const batterygray = document.getElementById("battery");
const signal2gray = document.getElementById("signal2");
const signalgray = document.getElementById("signal");
const wifigray = document.getElementById("wifi");
const mobileTimegray = document.getElementById("mobileTime");
const percentgray = document.getElementById("percent");
const battery2gray = document.getElementById("battery2");
const ellipsis1gray = document.getElementById("ellipsis");

toggle3.addEventListener("click", function () {
  if (this.classList.toggle("grey")) {
    body3.style.background = "white";
    body3.style.color = "black";
    body3.style.transition = "2s";

    form3.style.background = "white";
    form3.style.color = "black";
    form3.style.transition = "2s";

    Note3.style.background = "white";
    Note3.style.color = "black";
    Note3.style.transition = "2s";

    myElement3.style.background = "white";
    myElement3.style.color = "black";
    myElement3.style.transition = "2s";

    desktopViewBodygray.style.background = "white";
    desktopViewBodygray.style.color = "black";
    desktopViewBodygray.style.transition = "2s";

    Tweetgrey.style.background = "white";
    Tweetgrey.style.color = "black";
    Tweetgrey.style.transition = "2s";

    totalTweetgray.style.background = "white";
    totalTweetgray.style.color = "black";
    totalTweetgray.style.transition = "2s";

    ellipsisgray.style.background = "white";
    ellipsisgray.style.color = "black";
    ellipsisgray.style.border = "1px solid gray";
    ellipsisgray.style.transition = "2s";

    ellipsisgray2.style.border = "1px solid gray";
    ellipsisgray2.style.transition = "2s";

    totalTweetgray.style.background = "white";
    totalTweetgray.style.color = "black";
    totalTweetgray.style.transition = "2s";

    Tweetgray.style.background = "white";
    Tweetgray.style.color = "black";
    Tweetgray.style.transition = "2s";

    born1gray.style.background = "white";
    born1gray.style.color = "black";
    born1gray.style.transition = "2s";

    LiveLocationgray.style.background = "white";
    LiveLocationgray.style.color = "black";
    LiveLocationgray.style.transition = "2s";

    dobgray.style.background = "white";
    dobgray.style.color = "black";
    dobgray.style.transition = "2s";

    timegray.style.background = "white";
    timegray.style.color = "black";
    timegray.style.transition = "2s";

    following1gray.style.background = "white";
    following1gray.style.color = "black";
    following1gray.style.transition = "2s";

    followers1gary.style.background = "white";
    followers1gary.style.color = "black";
    followers1gary.style.transition = "2s";

    urlgray.style.background = "white";
    urlgray.style.color = "black";
    urlgray.style.transition = "2s";

    Select1gray.style.background = "white";
    Select1gray.style.color = "black";
    Select1gray.style.transition = "2s";

    Select2gray.style.background = "white";
    Select2gray.style.color = "black";
    Select2gray.style.transition = "2s";

    div1gray.style.background = "white";
    div1gray.style.color = "black";
    div1gray.style.transition = "2s";

    pragraph3gray.style.background = "white";
    pragraph3gray.style.color = "black";
    pragraph3gray.style.transition = "2s";

    androidViewgray.style.background = "white";
    androidViewgray.style.color = "black";
    androidViewgray.style.transition = "2s";

    iphoneViewgray.style.background = "white";
    iphoneViewgray.style.color = "black";
    iphoneViewgray.style.transition = "2s";

    time2gray.style.background = "white";
    time2gray.style.color = "black";
    time2gray.style.transition = "2s";

    battery1gray.style.background = "white";
    battery1gray.style.color = "black";
    battery1gray.style.transition = "2s";

    batterygray.style.background = "white";
    batterygray.style.color = "black";
    batterygray.style.transition = "2s";

    signal2gray.style.background = "white";
    signal2gray.style.color = "black";
    signal2gray.style.transition = "2s";

    signalgray.style.background = "white";
    signalgray.style.color = "black";
    signalgray.style.transition = "2s";

    wifigray.style.background = "white";
    wifigray.style.color = "black";
    wifigray.style.transition = "2s";

    mobileTimegray.style.background = "white";
    mobileTimegray.style.color = "black";
    mobileTimegray.style.transition = "2s";

    percentgray.style.background = "white";
    percentgray.style.color = "black";
    percentgray.style.transition = "2s";

    battery2gray.style.background = "white";
    battery2gray.style.color = "black";
    battery2gray.style.transition = "2s";

    ellipsis1gray.style.background = "white";
    ellipsis1gray.style.color = "black";
    ellipsis1gray.style.transition = "2s";
  } else {
    body3.style.background = "#808080";
    body3.style.color = "black";
    body3.style.transition = "2s";

    form3.style.background = "#808080";
    form3.style.color = "black";
    form3.style.transition = "2s";

    Note3.style.background = "#808080";
    Note3.style.color = "black";
    Note3.style.transition = "2s";

    myElement3.style.background = "#808080";
    myElement3.style.color = "black";
    myElement3.style.transition = "2s";

    desktopViewBodygray.style.background = "#808080";
    desktopViewBodygray.style.color = "black";
    desktopViewBodygray.style.transition = "2s";

    Tweetgray.style.background = "#808080";
    Tweetgray.style.color = "black";
    Tweetgray.style.transition = "2s";

    totalTweetgray.style.background = "#808080";
    totalTweetgray.style.color = "black";
    totalTweetgray.style.transition = "2s";

    born1gray.style.background = "#808080";
    born1gray.style.color = "black";
    born1gray.style.transition = "2s";

    LiveLocationgray.style.background = "#808080";
    LiveLocationgray.style.color = "black";
    LiveLocationgray.style.transition = "2s";

    dobgray.style.background = "#808080";
    dobgray.style.color = "black";
    dobgray.style.transition = "2s";

    timegray.style.background = "#808080";
    timegray.style.color = "black";
    timegray.style.transition = "2s";

    following1gray.style.background = "#808080";
    following1gray.style.color = "black";
    following1gray.style.transition = "2s";

    followers1gary.style.background = "#808080";
    followers1gary.style.color = "black";
    followers1gary.style.transition = "2s";

    urlgray.style.background = "#808080";
    urlgray.style.color = "black";
    urlgray.style.transition = "2s";

    Select1gray.style.background = "#808080";
    Select1gray.style.color = "white";
    Select1gray.style.transition = "2s";

    Select2gray.style.background = "#808080";
    Select2gray.style.color = "white";
    Select2gray.style.transition = "2s";

    div1gray.style.background = "#808080";
    div1gray.style.color = "white";
    div1gray.style.transition = "2s";

    pragraph3gray.style.background = "#808080";
    pragraph3gray.style.color = "black";
    pragraph3gray.style.transition = "2s";

    ellipsisgray.style.background = "#808080";
    ellipsisgray.style.color = "black";
    ellipsisgray.style.border = "1px solid white";
    ellipsisgray.style.transition = "2s";

    Tweetgrey.style.background = "#808080";
    Tweetgrey.style.color = "black";

    ellipsisgray2.style.border = "1px solid white";
    ellipsisgray2.style.transition = "2s";

    totalTweetgray.style.background = "#808080";
    totalTweetgray.style.color = "black";
    totalTweetgray.style.transition = "2s";

    androidViewgray.style.background = "#808080";
    androidViewgray.style.color = "white";
    androidViewgray.style.transition = "2s";

    iphoneViewgray.style.background = "#808080";
    iphoneViewgray.style.color = "white";
    iphoneViewgray.style.transition = "2s";

    time2gray.style.background = "#808080";
    time2gray.style.color = "black";
    time2gray.style.transition = "2s";

    battery1gray.style.background = "#808080";
    battery1gray.style.color = "black";
    battery1gray.style.transition = "2s";

    batterygray.style.background = "#808080";
    batterygray.style.color = "black";
    batterygray.style.transition = "2s";

    signal2gray.style.background = "#808080";
    signal2gray.style.color = "black";
    signal2gray.style.transition = "2s";

    signalgray.style.background = "#808080";
    signalgray.style.color = "black";
    signalgray.style.transition = "2s";

    wifigray.style.background = "#808080";
    wifigray.style.color = "black";
    wifigray.style.transition = "2s";

    mobileTimegray.style.background = "#808080";
    mobileTimegray.style.color = "black";
    mobileTimegray.style.transition = "2s";

    percentgray.style.background = "#808080";
    percentgray.style.color = "black";
    percentgray.style.transition = "2s";

    battery2gray.style.background = "#808080";
    battery2gray.style.color = "black";
    battery2gray.style.transition = "2s";

    ellipsis1gray.style.background = "#808080";
    ellipsis1gray.style.color = "black";
    ellipsis1gray.style.transition = "2s";
  }
});

/*end gray mode*/
function preview_image(event, id) {
  var reader = new FileReader();
  reader.onload = function () {
    var output = document.getElementById(id);
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);

  if (id == "changeImage2") {
    var reader1 = new FileReader();
    reader1.onload = function () {
      var output1 = document.getElementById("changeImage4");
      output1.src = reader1.result;
    };
    reader1.readAsDataURL(event.target.files[0]);
  } else {
    var reader2 = new FileReader();
    reader2.onload = function () {
      var output2 = document.getElementById("changeImage3");
      output2.src = reader2.result;
    };
    reader2.readAsDataURL(event.target.files[0]);
  }
}

function nFormatter(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
}
/*start from submit*/
function updateInput(value) {
  //alert(value);

  checkBox = document.getElementById("input1");
  checkBox1 = document.getElementById("iphoneInput");
  if (checkBox.checked) {
    document.getElementById("androidViewTime").innerHTML =
      document.getElementById("input3").value;
    document.getElementById("batteryPercentage").innerHTML =
      document.getElementById("input4").value;
  }
  if (checkBox1.checked) {
    document.getElementById("mobileTime").innerHTML =
      document.getElementById("input3").value;
    document.getElementById("batteryPercentage1").innerHTML =
      document.getElementById("input4").value;
  }

  document.getElementById("accountName").innerHTML =
    document.getElementById("input5").value;

  document.getElementById("subcribation").innerHTML =
    document.getElementById("inputSubcribation").value;

  document.getElementById("LiveLocation").innerHTML =
    document.getElementById("inputLiveLocation").value;

  var totalTweets = nFormatter(document.getElementById("input11").value);
  document.getElementById("totalTweet").innerHTML = totalTweets;

  document.getElementById("Tweet").innerHTML =
    document.getElementById("input5").value;

  document.getElementById("userName").innerHTML =
    document.getElementById("input6").value;

  document.getElementById("dob").innerHTML =
    document.getElementById("input7").value;
  var following = nFormatter(document.getElementById("input9").value);
  document.getElementById("following").innerHTML = following;

  var followers = nFormatter(document.getElementById("input10").value);
  document.getElementById("followers").innerHTML = followers;

  document.getElementById("joinDate").innerHTML =
    document.getElementById("input8").value;
}
/*end from submit*/

/*start mobile display */
function mobileStyle() {
  var element = document.getElementById("myElement");
  element.style.margin = "23px 135px 24px 141px";

  var joinDate = document.getElementById("time");
  joinDate.style.position = "absolute";
  joinDate.style.margin = "124px 0px 0px 0px";

  var outputborn = document.getElementById("born");
  outputborn.style.position = "absolute";
  outputborn.style.margin = "63px 0px 0px 0px";

  var followersDiv = document.getElementById("followersDiv");
  followersDiv.style.margin = "70px 0px 0px 0px";

  let rounded = document.getElementById("changeImage4");
  rounded.style.width = "80px";
  rounded.style.height = "80px";

  let followingButton = document.getElementById("followingButton");
  followingButton.style.marginTop = "20px";

  let footer = document.getElementById("footer");
  footer.style.marginLeft = "-12px";
  footer.style.marginRight = "-36px";

  let desktopView = document.getElementById("desktopView");
  let mobileView = document.getElementById("mobileView");
  let mobileViewBody = document.getElementById("mobileViewBody");
  let desktopViewBody = document.getElementById("desktopViewBody");
  let twitterIcon = document.getElementById("twitterIcon");

  mobileViewBody.style.display = "";
  desktopViewBody.style.display = "none";
  desktopView.style.display = "none";
  mobileView.style.display = "";
  twitterIcon.style.display = "";

  let iphoneView = document.getElementById("iphoneView");
  let androidView = document.getElementById("androidView");

  iphoneView.style.display = "none";
  androidView.style.display = "";

  let twitterHeaderIcon = document.getElementById("twitterHeaderIcon");
  mobileViewBody.style.display = "";
  desktopViewBody.style.display = "none";
  desktopView.style.display = "none";
  mobileView.style.display = "";
  twitterHeaderIcon.style.display = "";

  let activeButton2 = document.getElementById("activeButton2");
  activeButton2.style.backgroundColor = "#00d1b2";
  activeButton2.style.Color = "#FFFFFF";

  let activeButton = document.getElementById("activeButton");
  activeButton.style.backgroundColor = "";
  activeButton.style.Color = "";
}
/*end mobile display*/

/*start disktop display*/
function desktopStyle() {
  var outputborn = document.getElementById("born");
  outputborn.style.position = "";
  outputborn.style.margin = "";

  var joinDate = document.getElementById("time");
  joinDate.style.position = "";
  joinDate.style.margin = "";

  var followersDiv = document.getElementById("followersDiv");
  followersDiv.style.margin = "";

  let followingButton = document.getElementById("followingButton");
  followingButton.style.marginTop = "";

  let rounded = document.getElementById("changeImage4");
  rounded.style.width = "115px";
  rounded.style.height = "115px";

  let footer = document.getElementById("footer");
  footer.style.marginLeft = "20px";
  footer.style.marginRight = "-76px";

  var element = document.getElementById("myElement");
  element.style.margin = "0px";
  let desktopView = document.getElementById("desktopView");
  let mobileView = document.getElementById("mobileView");
  let mobileViewBody = document.getElementById("mobileViewBody");
  let desktopViewBody = document.getElementById("desktopViewBody");
  let twitterIcon = document.getElementById("twitterIcon");

  mobileViewBody.style.display = "none";
  desktopViewBody.style.display = "";

  desktopView.style.display = "";
  mobileView.style.display = "none";
  twitterIcon.style.display = "none";

  let twitterHeaderIcon = document.getElementById("twitterHeaderIcon");
  mobileViewBody.style.display = "none";
  desktopViewBody.style.display = "";
  desktopView.style.display = "";
  mobileView.style.display = "none";
  twitterHeaderIcon.style.display = "none";

  let activeButton = document.getElementById("activeButton");
  activeButton.style.backgroundColor = "#00d1b2 ";
  activeButton.style.Color = "#FFFFFF ";

  let activeButton2 = document.getElementById("activeButton2");
  activeButton2.style.backgroundColor = "";
  activeButton.style.Color = "";
}

function verifyAccount(value) {
  document.getElementById("blue").style.display = "none";
  document.getElementById("BlueIcon").style.display = "none";
  document.getElementById("gray").style.display = "none";
  document.getElementById("greyIcon").style.display = "none";
  document.getElementById("allow").style.display = "none";
  document.getElementById("yellowIcon").style.display = "none";
  document.getElementById("flag").style.display = "none";
  let checkBox;
  if (value == 1) {
    checkBox = document.getElementById("input2");
  } else {
    checkBox = document.getElementById("input21");
  }

  let element = document.getElementById("verifyAccount");
  let elements = document.getElementById("checkIcon");
  //alert(checkBox.checked);
  if (checkBox.checked) {
    element.style.display = "";
    elements.style.display = "";
  } else {
    element.style.display = "none";
    elements.style.display = "none";
  }
}

function switchAndroid() {
  let iphoneView = document.getElementById("iphoneView");
  let androidView = document.getElementById("androidView");

  iphoneView.style.display = "none";
  androidView.style.display = "";
}

function switchIphone() {
  let iphoneView = document.getElementById("iphoneView");
  let androidView = document.getElementById("androidView");

  iphoneView.style.display = "";
  androidView.style.display = "none";
}
/* end disktop display*/

/*start download imgags file */
content = document.getElementById("myElement");

function downloadImage() {
  domtoimage.toBlob(content).then(function (blob) {
    window.saveAs(blob, "my-node.png");
  });
}

/*end download imags file*/

/*active button color*/
function changeColor(htmlEl) {
  htmlEl.style.backgroundColor = "green";
}

/*differnce-diffence icon show*/
const showBlueIcon = (event) => {
  event.preventDefault();
  document.getElementById("blue").style.display = "";
  document.getElementById("BlueIcon").style.display = "";
  document.getElementById("gray").style.display = "none";
  document.getElementById("greyIcon").style.display = "none";
  document.getElementById("allow").style.display = "none";
  document.getElementById("yellowIcon").style.display = "none";
  document.getElementById("verifyAccount").style.display = "none";
  document.getElementById("checkIcon").style.display = "none";
  document.getElementById("flag").style.display = "none";
};

const showGreyIcon = (event) => {
  event.preventDefault();
  document.getElementById("flag").style.display = "";
  document.getElementById("gray").style.display = "";
  document.getElementById("greyIcon").style.display = "";
  document.getElementById("blue").style.display = "none";
  document.getElementById("BlueIcon").style.display = "none";
  document.getElementById("allow").style.display = "none";
  document.getElementById("yellowIcon").style.display = "none";
  document.getElementById("verifyAccount").style.display = "none";
  document.getElementById("checkIcon").style.display = "none";
};

const showYellowIcon = (event) => {
  event.preventDefault();
  document.getElementById("allow").style.display = "";
  document.getElementById("yellowIcon").style.display = "";
  document.getElementById("blue").style.display = "none";
  document.getElementById("BlueIcon").style.display = "none";
  document.getElementById("gray").style.display = "none";
  document.getElementById("greyIcon").style.display = "none";
  document.getElementById("verifyAccount").style.display = "none";
  document.getElementById("checkIcon").style.display = "none";
  document.getElementById("flag").style.display = "none";
};

const clearIcon = (event) => {
  event.preventDefault();
  document.getElementById("blue").style.display = "none";
  document.getElementById("BlueIcon").style.display = "none";
  document.getElementById("gray").style.display = "none";
  document.getElementById("greyIcon").style.display = "none";
  document.getElementById("allow").style.display = "none";
  document.getElementById("yellowIcon").style.display = "none";
  document.getElementById("verifyAccount").style.display = "none";
  document.getElementById("checkIcon").style.display = "none";
  document.getElementById("flag").style.display = "none";
};
