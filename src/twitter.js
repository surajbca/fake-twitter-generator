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

  document.getElementById("time").innerHTML =
    document.getElementById("input3").value;

  document.getElementById("Battery").innerHTML =
    document.getElementById("input4").value;

  document.getElementById("name").innerHTML =
    document.getElementById("input5").value;

  document.getElementById("userName").innerHTML =
    document.getElementById("input6").value;

  document.getElementById("Born").innerHTML =
    document.getElementById("input7").value;

  document.getElementById("join").innerHTML =
    document.getElementById("input8").value;

  document.getElementById("following").innerHTML =
    document.getElementById("input9").value;

  document.getElementById("followers").innerHTML =
    document.getElementById("input10").value;
}
/*unction formSubmit() {
  document.getElementById("FormID").submit();
}*/

/*mobile display */
function mobileStyle() {
  var element = document.getElementById("myElement");
  element.style.margin = "23px 135px 24px 141px";
}

function desktopStyle() {
  var element = document.getElementById("myElement");
  element.style.margin = "0px";
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
