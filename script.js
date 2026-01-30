function login() {
  let role = document.getElementById("role").value;

  if (role === "Farmer") {
    window.location.href = "farmer.html";
  } else if (role === "Vendor") {
    window.location.href = "vendor.html";
  } else {
    window.location.href = "customer.html";
  }
}
