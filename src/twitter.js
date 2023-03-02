function displayPlayer() {
  var input = document.getElementById("player_stuff").elements;
  var position = input[0];
  var player_id = input[1];

  document.getElementById("disp_player").innerHTML = position + player_id;
}
/* button color */

/* start dark mood*/
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
const time2 = document.getElementById("time2");
const ellipsis = document.getElementById("ellipsis");
const percent = document.getElementById("percent");
const battery2 = document.getElementById("percent2");
const mobileTime = document.getElementById("mobileTime");

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");

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

    time.style.background = "white";
    time.style.color = "black";
    time.style.transition = "2s";

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

    time2.style.background = "white";
    time2.style.color = "black";
    time2.style.transition = "2s";

    ellipsis.style.background = "white";
    ellipsis.style.color = "black";
    ellipsis.style.transition = "2s";

    percent.style.background = "white";
    percent.style.color = "black";
    percent.style.transition = "2s";

    battery2.style.background = "white";
    battery2.style.color = "black";
    battery2.style.transition = "2s";

    mobileTime.style.background = "white";
    mobileTime.style.color = "black";
    mobileTime.style.transition = "2s";
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

    time.style.background = "black";
    time.style.color = "white";
    time.style.transition = "2s";

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

    time2.style.background = "black";
    time2.style.color = "white";
    time2.style.transition = "2s";

    ellipsis.style.background = "black";
    ellipsis.style.color = "white";
    ellipsis.style.transition = "2s";

    percent.style.background = "black";
    percent.style.color = "white";
    percent.style.transition = "2s";

    battery2.style.background = "black";
    battery2.style.color = "white";
    battery2.style.transition = "2s";

    mobileTime.style.background = "black";
    mobileTime.style.color = "white";
    mobileTime.style.transition = "2s";
  }
});
/*end dark mood*/

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

/* from submit*/
function updateInput(value) {
  document.getElementById("mobileTime").innerHTML =
    document.getElementById("input3").value;

  document.getElementById("batteryPercentage").innerHTML =
    document.getElementById("input4").value;

  document.getElementById("accountName").innerHTML =
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

/*mobile display */
function mobileStyle() {
  var element = document.getElementById("myElement");
  element.style.margin = "23px 135px 24px 141px";

  let desktopView = document.getElementById("desktopView");
  let mobileView = document.getElementById("mobileView");
  let mobileViewBody = document.getElementById("mobileViewBody");
  let desktopViewBody = document.getElementById("desktopViewBody");

  mobileViewBody.style.display = "";
  desktopViewBody.style.display = "none";
  desktopView.style.display = "none";
  mobileView.style.display = "";

  let iphoneView = document.getElementById("iphoneView");
  let androidView = document.getElementById("androidView");

  iphoneView.style.display = "none";
  androidView.style.display = "";
  //alert(checkBox.checked);
}
/*end mobile display*/

/*start disktop */
function desktopStyle() {
  var element = document.getElementById("myElement");
  element.style.margin = "0px";
  let desktopView = document.getElementById("desktopView");
  let mobileView = document.getElementById("mobileView");
  let mobileViewBody = document.getElementById("mobileViewBody");
  let desktopViewBody = document.getElementById("desktopViewBody");

  mobileViewBody.style.display = "none";
  desktopViewBody.style.display = "";

  desktopView.style.display = "";
  mobileView.style.display = "none";
}
/* end disktop */

function verifyAccount(value) {
  let checkBox;
  if (value == 1) {
    checkBox = document.getElementById("input2");
  } else {
    checkBox = document.getElementById("input21");
  }

  let element = document.getElementById("verifyAccount");
  //alert(checkBox.checked);
  if (checkBox.checked) {
    element.style.display = "";
  } else {
    element.style.display = "none";
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

/*=====*/
content = document.getElementById("myElement");

function downloadImage() {
  domtoimage.toBlob(content).then(function (blob) {
    window.saveAs(blob, "my-node.png");
  });
}

/*==============================*/
