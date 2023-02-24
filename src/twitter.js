function displayPlayer() {
  var input = document.getElementById("player_stuff").elements;
  var position = input[0];
  var player_id = input[1];

  document.getElementById("disp_player").innerHTML = position + player_id;
}
/* button color */
function changeColor() {
  document.getElementById("").style.backgroundColor = "green";
}

function preview_image(event, id) {
  //alert("id : " + id);

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
  /*document.getElementById("").innerHTML =
    document.getElementById("input1").value;

  document.getElementById("").innerHTML =
    document.getElementById("input2").value;

 */

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
/*unction formSubmit() {
  document.getElementById("FormID").submit();
}*/

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

/*button style*/
/*function submitButtonStyle() {
  document.getElementsByClassName("is-fullwidth").style.backgroundColor = "red";
}*/

/*document.getElementById("smit").onclick = function () {
  var checkedPosition = document.querySelectorAll(
    "#player_stuff [name='position']:checked"
  );
  var playerId = document.querySelector("#player_stuff [name='player_id']");
  var position = checkedPosition[0].value;
  var player_id = playerId.value;

  document.getElementById("disp_player").innerHTML = position + " " + player_id;
}; */

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
