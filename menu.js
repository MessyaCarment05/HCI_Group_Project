function openMenu(menuName,elmnt,color) {
    var i, content, bttn;
    content = document.getElementsByClassName("menu-container");
    content1 = document.getElementsByClassName("menu-container1");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
    for (i = 0; i < content1.length; i++) {
      content1[i].style.display = "none";
    }
    bttn = document.getElementsByClassName("menu-title");
    for (i = 0; i < bttn.length; i++) {
      bttn[i].style.backgroundColor = "";
    }
    document.getElementById(menuName).style.display = "flex";
    elmnt.style.backgroundColor = color;
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();