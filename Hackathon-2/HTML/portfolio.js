if (typeof(projecs) !== "undefined") {
    // Lấy dữ liệu từ local storage (ví dụ: trường có tên là "userData")
    var userData = localStorage.getItem("heroInfo");
    // Kiểm tra xem có dữ liệu trong local storage không
    let userJS = JSON.parse(heroInfo);
    if (userData) {
      // Hiển thị dữ liệu trong HTML (ví dụ: trong một div có id là "displayData")
      document.getElementById("displayData").innerHTML = "Dữ liệu từ Local Storage: " + userData.name;
    } else {
      document.getElementById("displayData").innerHTML = "Không có dữ liệu trong Local Storage.";
    }
  } else {
    // Trình duyệt không hỗ trợ local storage
    document.getElementById("displayData").innerHTML = "Trình duyệt của bạn không hỗ trợ Local Storage.";
  }