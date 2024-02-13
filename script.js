/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
//   /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  // function closeNav() {
  //   document.getElementById("mySidebar").style.width = "0";
  //   document.getElementById("main").style.marginLeft = "0";
  // }
      var acc = document.getElementsByClassName("accordion");
      var i;

      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
          this.classList.toggle("active");
          this.parentElement.classList.toggle("active");

          var pannel = this.nextElementSibling;

          if (pannel.style.display === "block") {
            pannel.style.display = "none";
          } else {
            pannel.style.display = "block";
          }
        });
      }
