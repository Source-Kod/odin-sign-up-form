function check_password() {
  let p1 = document.getElementById("password");
  let p2 = document.getElementById("confirm-password");
  let pcl = document.getElementById("confirm-password-label")

  if (p1.value === "" && p2.value === "") {
    p1.style.backgroundColor = "#E5E7EB";
    p2.style.backgroundColor = "#E5E7EB";
    return;
  }

  if (p1.value != "" && p2.value === "") {
    p1.style.backgroundColor = "green";
    p2.style.backgroundColor = "#E5E7EB";
    return;
  }

  if (p1.value != "" && p2.value != "") {

    if (p1.value === p2.value) {
      p1.style.backgroundColor = "green";
      p2.style.backgroundColor = "green";
      pcl.textContent = "Confirm Password"
      return;
    }

    if (p1.value != p2.value) {
      p1.style.backgroundColor = "green";
      p2.style.backgroundColor = "red";
      pcl.textContent = "Confirm Password *Password does not match*"
      return;
    }
  }
}

check_password();
