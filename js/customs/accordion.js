var accdn = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < accdn.length; i++) {
    accdn[i].addEventListener("click", function() {
    
         this.classList.toggle("active");

        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
var accdn = document.getElementsByClassName("acc");
var i;

for (i = 0; i < accdn.length; i++) {
    accdn[i].addEventListener("click", function() {
    
         this.classList.toggle("active");

        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}