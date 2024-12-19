function idCheck() {
  var id = document.getElementById("id").value;
  var result = document.getElementById("result");
  result.innerHTML = "아이디: " + id + ", 글자수: " + id.length;
}

function pwCheck() {
  var pw1 = document.getElementById("pw").value;
  var pw2 = document.getElementById("pw2").value;
  var result = document.getElementById("result");
  if (pw1 === pw2) {
    result.innerHTML = "패스워드 일치";
  } else {
    result.innerHTML = "패스워드 불일치";
  }
}
