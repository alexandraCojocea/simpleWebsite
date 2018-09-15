

$(window).load(function() {
			    $('.flexslider').flexslider();
			  });

function openNav() {
    document.getElementById("nav").style.width = "100%";
}

function closeNav() {
    document.getElementById("nav").style.width = "0";
}

$(document).ready(function(){
    $("button, .down").click(function(){
        $(this).closest(".smallmenu").find("ul.link").toggle();
    });
});

function myFunction() {
    alert("Thank you for your message! We will reply as soon as possible");
}

