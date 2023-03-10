function addTeams(a) {
    var computerScore = document.getElementById('submittedTeams'+a);
    var number = computerScore.innerHTML;
    if (number < 12) { number++; }
    if (number ==12 ) {document.getElementById("anmäl").style.color = "red"}
    computerScore.innerHTML = number;
}
function mobileMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
function hoverNyheter(){
  document.getElementById("nyhet").style.width = "90%";
}
function hoverOutNyheter(){
  document.getElementById("nyhet").style.width = "50%";
}

  $(document).ready(function(){
    $(".pilV").click(function(){
      $(".nyhet:nth-child(1)").animate({ 
        marginRight: "+=250px",
      }, 1000 );
    });
    $(".image .kop").click(function(){
      $(this).parent().find(".tillagd").show(); 
      $(this).parent().find(".shoptext").hide(); 
      $(this).hide(); 
    });
    $(".fiskekort:nth-child(1)").click(function(){
      $(".popUp").slideDown("slow");
      $(".fiskekort:nth-child(1)").css("background-color", "green"); 
    });
  });
  $(function() {  
    $("#draggable").draggable();  
    $("#draggable").stop().css("color", "#C6A523")
    .animate({ color: "#FFFFFF"}, 1000);
  }); 