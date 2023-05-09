var tabLinks = document.querySelectorAll(".tab-links a");
var tabContent = document.querySelectorAll(".tab-content .tab");
 
for (var i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener("click", function(e) {
    e.preventDefault();
    var id = this.getAttribute("href").replace("#", "");
 
    for (var j = 0; j < tabContent.length; j++) {
      tabContent[j].classList.remove("active");
    }
    document.getElementById(id).classList.add("active");
 
    for (var k = 0; k < tabLinks.length; k++) {
      tabLinks[k].classList.remove("active");
    }
    this.classList.add("active");
  });
}

