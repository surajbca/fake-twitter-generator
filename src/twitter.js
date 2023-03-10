function displayPlayer() {
  var input = document.getElementById("player_stuff").elements;
  var position = input[0];
  var player_id = input[1];

  document.getElementById("disp_player").innerHTML = position + player_id;
}

/* start dark-mod*/
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
const Born = document.getElementById("Born");
const time = document.getElementById("time");
const following1 = document.getElementById("following1");
const followers1 = document.getElementById("followers1");
const wifi = document.getElementById("wifi");
const signal = document.getElementById("signal");
const signal2 = document.getElementById("signal2");
const battery = document.getElementById("battery");
const battery1 = document.getElementById("battery1");
const ellipsis = document.getElementById("ellipsis");
const percent = document.getElementById("percent");
const time2 = document.getElementById("time2");
const mobileTime = document.getElementById("mobileTime");
const battery2 = document.getElementById("battery2");
const checkIcon = document.getElementById("checkIcon");

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

    Born.style.background = "white";
    Born.style.color = "black";
    Born.style.transition = "2s";

    following1.style.background = "white";
    following1.style.color = "black";
    following1.style.transition = "2s";

    followers1.style.background = "white";
    followers1.style.color = "black";
    followers1.style.transition = "2s";

    wifi.style.background = "white";
    wifi.style.color = "black";
    wifi.style.transition = "2s";

    signal.style.background = "white";
    signal.style.color = "black";
    signal.style.transition = "2s";

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
    time.style.color = "black";
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

    Born.style.background = "black";
    Born.style.color = "white";
    Born.style.transition = "2s";

    following1.style.background = "black";
    following1.style.color = "white";
    following1.style.transition = "2s";

    followers1.style.background = "black";
    followers1.style.color = "white";
    followers1.style.transition = "2s";

    wifi.style.background = "black";
    wifi.style.color = "white";
    wifi.style.transition = "2s";

    signal.style.background = "black";
    signal.style.color = "white";
    signal.style.transition = "2s";

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
  }
});
/*end dark-mod*/

/*start blue mod */

const toggle1 = document.getElementById("toggleBlue");
const body1 = document.querySelector("body");
const form1 = document.getElementById("ml-12");
const Note1 = document.getElementById("Note");
const myElement1 = document.getElementById("myElement");
const pragraph1 = document.getElementById("mt-5");
/*const desktopViewBody = document.getElementById("desktopViewBody");
const androidView = document.getElementById("androidView");
const Select1 = document.getElementById("Select1");
const Select2 = document.getElementById("Select2");
const Tweet = document.getElementById("Tweet");
const iphoneView = document.getElementById("iphoneView");
const div1 = document.getElementById("div1");
const born1 = document.getElementById("born1");
const totalTweet = document.getElementById("totalTweet");
const Born = document.getElementById("Born");
const time = document.getElementById("time");
const following1 = document.getElementById("following1");
const followers1 = document.getElementById("followers1");
const wifi = document.getElementById("wifi");
const signal = document.getElementById("signal");
const signal2 = document.getElementById("signal2");
const battery = document.getElementById("battery");
const battery1 = document.getElementById("battery1");
const ellipsis = document.getElementById("ellipsis");
const percent = document.getElementById("percent");
const time2 = document.getElementById("time2");
const mobileTime = document.getElementById("mobileTime");
const battery2 = document.getElementById("battery2");
const checkIcon = document.getElementById("checkIcon");*/

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

    Born.style.background = "white";
    Born.style.color = "black";
    Born.style.transition = "2s";

    following1.style.background = "white";
    following1.style.color = "black";
    following1.style.transition = "2s";

    followers1.style.background = "white";
    followers1.style.color = "black";
    followers1.style.transition = "2s";

    wifi.style.background = "white";
    wifi.style.color = "black";
    wifi.style.transition = "2s";

    signal.style.background = "white";
    signal.style.color = "black";
    signal.style.transition = "2s";

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
    time.style.color = "black";
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

    desktopViewBody.style.background = "#0000ff";
    desktopViewBody.style.color = "white";
    desktopViewBody.style.transition = "2s";

    androidView.style.background = "#0000ff";
    androidView.style.color = "white";
    androidView.style.transition = "2s";

    Select1.style.background = "#0000ff";
    Select1.style.color = "white";
    Select1.style.transition = "2s";

    Select2.style.background = "#0000ff";
    Select2.style.color = "white";
    Select2.style.transition = "2s";

    Tweet.style.background = "#0000ff";
    Tweet.style.color = "white";
    Tweet.style.transition = "2s";

    iphoneView.style.background = "#0000ff";
    iphoneView.style.color = "white";
    iphoneView.style.transition = "2s";

    div1.style.background = "#0000ff";
    div1.style.color = "white";
    div1.style.transition = "2s";

    born1.style.background = "#0000ff";
    born1.style.color = "white";
    born1.style.transition = "2s";

    totalTweet.style.background = "#0000ff";
    totalTweet.style.color = "white";
    totalTweet.style.transition = "2s";

    Born.style.background = "#0000ff";
    Born.style.color = "white";
    Born.style.transition = "2s";

    following1.style.background = "#0000ff";
    following1.style.color = "white";
    following1.style.transition = "2s";

    followers1.style.background = "#0000ff";
    followers1.style.color = "white";
    followers1.style.transition = "2s";

    wifi.style.background = "#0000ff";
    wifi.style.color = "white";
    wifi.style.transition = "2s";

    signal.style.background = "#0000ff";
    signal.style.color = "white";
    signal.style.transition = "2s";

    signal2.style.background = "#0000ff";
    signal2.style.color = "white";
    signal2.style.transition = "2s";

    battery.style.background = "#0000ff";
    battery.style.color = "white";
    battery.style.transition = "2s";

    battery1.style.background = "#0000ff";
    battery1.style.color = "white";
    battery1.style.transition = "2s";

    ellipsis.style.background = "#0000ff";
    ellipsis.style.color = "white";
    ellipsis.style.transition = "2s";

    percent.style.background = "#0000ff";
    percent.style.color = "white";
    percent.style.transition = "2s";

    time.style.background = "#0000ff";
    time.style.color = "white";
    time.style.transition = "2s";

    time2.style.background = "#0000ff";
    time2.style.color = "white";
    time2.style.transition = "2s";

    mobileTime.style.background = "#0000ff";
    mobileTime.style.color = "white";
    mobileTime.style.transition = "2s";

    battery2.style.background = "#0000ff";
    battery2.style.color = "white";
    battery2.style.transition = "2s";

    checkIcon.style.background = "#0000ff";
    checkIcon.style.color = "#0000ff";
    checkIcon.style.transition = "2s";
  }
});
/*end blue mod*/

/*start gold mon*/
const toggle2 = document.getElementById("togglegold");
const body2 = document.querySelector("body");
const form2 = document.getElementById("ml-12");
const Note2 = document.getElementById("Note");
const myElement2 = document.getElementById("myElement");
const pragraph2 = document.getElementById("mt-5");
/*const desktopViewBody = document.getElementById("desktopViewBody");
const androidView = document.getElementById("androidView");
const Select1 = document.getElementById("Select1");
const Select2 = document.getElementById("Select2");
const Tweet = document.getElementById("Tweet");
const iphoneView = document.getElementById("iphoneView");
const div1 = document.getElementById("div1");
const born1 = document.getElementById("born1");
const totalTweet = document.getElementById("totalTweet");
const Born = document.getElementById("Born");
const time = document.getElementById("time");
const following1 = document.getElementById("following1");
const followers1 = document.getElementById("followers1");
const wifi = document.getElementById("wifi");
const signal = document.getElementById("signal");
const signal2 = document.getElementById("signal2");
const battery = document.getElementById("battery");
const battery1 = document.getElementById("battery1");
const ellipsis = document.getElementById("ellipsis");
const percent = document.getElementById("percent");
const time2 = document.getElementById("time2");
const mobileTime = document.getElementById("mobileTime");
const battery2 = document.getElementById("battery2");
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

    Born.style.background = "white";
    Born.style.color = "black";
    Born.style.transition = "2s";

    following1.style.background = "white";
    following1.style.color = "black";
    following1.style.transition = "2s";

    followers1.style.background = "white";
    followers1.style.color = "black";
    followers1.style.transition = "2s";

    wifi.style.background = "white";
    wifi.style.color = "black";
    wifi.style.transition = "2s";

    signal.style.background = "white";
    signal.style.color = "black";
    signal.style.transition = "2s";

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
    time.style.color = "black";
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

    androidView.style.background = "#FFD700";
    androidView.style.color = "white";
    androidView.style.transition = "2s";

    Select1.style.background = "#FFD700";
    Select1.style.color = "white";
    Select1.style.transition = "2s";

    Select2.style.background = "#FFD700";
    Select2.style.color = "white";
    Select2.style.transition = "2s";

    Tweet.style.background = "#FFD700";
    Tweet.style.color = "white";
    Tweet.style.transition = "2s";

    iphoneView.style.background = "#FFD700";
    iphoneView.style.color = "white";
    iphoneView.style.transition = "2s";

    div1.style.background = "#FFD700";
    div1.style.color = "white";
    div1.style.transition = "2s";

    born1.style.background = "#FFD700";
    born1.style.color = "white";
    born1.style.transition = "2s";

    totalTweet.style.background = "#FFD700";
    totalTweet.style.color = "white";
    totalTweet.style.transition = "2s";

    Born.style.background = "#FFD700";
    Born.style.color = "white";
    Born.style.transition = "2s";

    following1.style.background = "#FFD700";
    following1.style.color = "white";
    following1.style.transition = "2s";

    followers1.style.background = "#FFD700";
    followers1.style.color = "white";
    followers1.style.transition = "2s";

    wifi.style.background = "#FFD700";
    wifi.style.color = "white";
    wifi.style.transition = "2s";

    signal.style.background = "#FFD700";
    signal.style.color = "white";
    signal.style.transition = "2s";

    signal2.style.background = "#FFD700";
    signal2.style.color = "white";
    signal2.style.transition = "2s";

    battery.style.background = "#FFD700";
    battery.style.color = "white";
    battery.style.transition = "2s";

    battery1.style.background = "#FFD700";
    battery1.style.color = "white";
    battery1.style.transition = "2s";

    ellipsis.style.background = "#FFD700";
    ellipsis.style.color = "white";
    ellipsis.style.transition = "2s";

    percent.style.background = "#FFD700";
    percent.style.color = "white";
    percent.style.transition = "2s";

    time.style.background = "#FFD700";
    time.style.color = "white";
    time.style.transition = "2s";

    time2.style.background = "#FFD700";
    time2.style.color = "white";
    time2.style.transition = "2s";

    mobileTime.style.background = "#FFD700";
    mobileTime.style.color = "white";
    mobileTime.style.transition = "2s";

    battery2.style.background = "#FFD700";
    battery2.style.color = "white";
    battery2.style.transition = "2s";

    checkIcon.style.background = "#FFD700";
    checkIcon.style.color = "#0000ff";
    checkIcon.style.transition = "2s";
  }
});

/*end gold mon*/

/*start grey mon*/
const toggle3 = document.getElementById("togglegrey");
const body3 = document.querySelector("body");
const form3 = document.getElementById("ml-12");
const Note3 = document.getElementById("Note");
const myElement3 = document.getElementById("myElement");
const pragraph3 = document.getElementById("mt-5");
/*const desktopViewBody = document.getElementById("desktopViewBody");
const androidView = document.getElementById("androidView");
const Select1 = document.getElementById("Select1");
const Select2 = document.getElementById("Select2");
const Tweet = document.getElementById("Tweet");
const iphoneView = document.getElementById("iphoneView");
const div1 = document.getElementById("div1");
const born1 = document.getElementById("born1");
const totalTweet = document.getElementById("totalTweet");
const Born = document.getElementById("Born");
const time = document.getElementById("time");
const following1 = document.getElementById("following1");
const followers1 = document.getElementById("followers1");
const wifi = document.getElementById("wifi");
const signal = document.getElementById("signal");
const signal2 = document.getElementById("signal2");
const battery = document.getElementById("battery");
const battery1 = document.getElementById("battery1");
const ellipsis = document.getElementById("ellipsis");
const percent = document.getElementById("percent");
const time2 = document.getElementById("time2");
const mobileTime = document.getElementById("mobileTime");
const battery2 = document.getElementById("battery2");
const checkIcon = document.getElementById("checkIcon");*/

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

    pragraph3.style.background = "white";
    pragraph3.style.color = "black";
    pragraph3.style.transition = "2s";

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

    Born.style.background = "white";
    Born.style.color = "black";
    Born.style.transition = "2s";

    following1.style.background = "white";
    following1.style.color = "black";
    following1.style.transition = "2s";

    followers1.style.background = "white";
    followers1.style.color = "black";
    followers1.style.transition = "2s";

    wifi.style.background = "white";
    wifi.style.color = "black";
    wifi.style.transition = "2s";

    signal.style.background = "white";
    signal.style.color = "black";
    signal.style.transition = "2s";

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
    time.style.color = "black";
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
  } else {
    body3.style.background = "#808080";
    body3.style.color = "white";
    body3.style.transition = "2s";

    form3.style.background = "#808080";
    form3.style.color = "white";
    form3.style.transition = "2s";

    Note3.style.background = "#808080";
    Note3.style.color = "white";
    Note3.style.transition = "2s";

    myElement3.style.background = "#808080";
    myElement3.style.color = "white";
    myElement3.style.transition = "2s";

    pragraph3.style.background = "#808080";
    pragraph3.style.color = "white";
    pragraph3.style.transition = "2s";

    desktopViewBody.style.background = "#808080";
    desktopViewBody.style.color = "white";
    desktopViewBody.style.transition = "2s";

    androidView.style.background = "#808080";
    androidView.style.color = "white";
    androidView.style.transition = "2s";

    Select1.style.background = "#808080";
    Select1.style.color = "white";
    Select1.style.transition = "2s";

    Select2.style.background = "#808080";
    Select2.style.color = "white";
    Select2.style.transition = "2s";

    Tweet.style.background = "#808080";
    Tweet.style.color = "white";
    Tweet.style.transition = "2s";

    iphoneView.style.background = "#808080";
    iphoneView.style.color = "white";
    iphoneView.style.transition = "2s";

    div1.style.background = "#808080";
    div1.style.color = "white";
    div1.style.transition = "2s";

    born1.style.background = "#808080";
    born1.style.color = "white";
    born1.style.transition = "2s";

    totalTweet.style.background = "#808080";
    totalTweet.style.color = "white";
    totalTweet.style.transition = "2s";

    Born.style.background = "#808080";
    Born.style.color = "white";
    Born.style.transition = "2s";

    following1.style.background = "#808080";
    following1.style.color = "white";
    following1.style.transition = "2s";

    followers1.style.background = "#808080";
    followers1.style.color = "white";
    followers1.style.transition = "2s";

    wifi.style.background = "#808080";
    wifi.style.color = "white";
    wifi.style.transition = "2s";

    signal.style.background = "#808080";
    signal.style.color = "white";
    signal.style.transition = "2s";

    signal2.style.background = "#808080";
    signal2.style.color = "white";
    signal2.style.transition = "2s";

    battery.style.background = "#808080";
    battery.style.color = "white";
    battery.style.transition = "2s";

    battery1.style.background = "#808080";
    battery1.style.color = "white";
    battery1.style.transition = "2s";

    ellipsis.style.background = "#808080";
    ellipsis.style.color = "white";
    ellipsis.style.transition = "2s";

    percent.style.background = "#808080";
    percent.style.color = "white";
    percent.style.transition = "2s";

    time.style.background = "#808080";
    time.style.color = "white";
    time.style.transition = "2s";

    time2.style.background = "#808080";
    time2.style.color = "white";
    time2.style.transition = "2s";

    mobileTime.style.background = "#808080";
    mobileTime.style.color = "white";
    mobileTime.style.transition = "2s";

    battery2.style.background = "#808080";
    battery2.style.color = "white";
    battery2.style.transition = "2s";

    checkIcon.style.background = "#808080";
    checkIcon.style.color = "#0000ff";
    checkIcon.style.transition = "2s";
  }
});

/*end grey mon*/
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

  document.getElementById("Tweet").innerHTML =
    document.getElementById("input5").value;

  document.getElementById("userName").innerHTML =
    document.getElementById("input6").value;

  document.getElementById("dob").innerHTML =
    document.getElementById("input7").value;

  document.getElementById("joinDate").innerHTML =
    document.getElementById("input8").value;

  document.getElementById("following").innerHTML =
    document.getElementById("input9").value;

  document.getElementById("followers").innerHTML =
    document.getElementById("input10").value;
  document.getElementById("totalTweet").innerHTML =
    document.getElementById("input11").value;
}
/*end from submit*/

/*start mobile display */
function mobileStyle() {
  var element = document.getElementById("myElement");
  element.style.margin = "23px 135px 24px 141px";

  var rounded = document.getElementById("rounded");
  rounded.style.width = "80px";
  rounded.style.height = "80px";

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
