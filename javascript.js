// to load images as they comes on viewport
refresh_handler = function(e) {
	var elements = document.querySelectorAll("*[data-src]");
	for (var i = 0; i < elements.length; i++) {
			var boundingClientRect = elements[i].getBoundingClientRect();
			if (elements[i].hasAttribute("data-src") && boundingClientRect.top < window.innerHeight) {
				elements[i].setAttribute("src", elements[i].getAttribute("data-src"));
				elements[i].removeAttribute("data-src");
			}
		}
	};

	window.addEventListener('scroll', refresh_handler);
	window.addEventListener('load', refresh_handler);
	window.addEventListener('resize', refresh_handler);
  
  
function login()
{
	var a=(document.getElementById("t1").value);
	var b=(document.getElementById("t2").value);
	if(a!="" && b!="")
	{
	    document.getElementById('add_logout').innerHTML="Logout";
		alert("welcome"+" "+a);
	}
	else
	{
		alert("please fill the information");
	}
}



// WISHLIST

// load see-more content when the "loadmore" is clicked
$(function () {    
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".see-more1 div:hidden").slice(0, 4).slideDown(5);                
    });
});

$(function () {
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".see-more2:hidden").slice(0, 1).slideDown(5);                
    });
});


// loadMore disappears after clicking it
$(function () {
    $("#loadMore").on('click', function () {
       $("#loadMore").css({"display":"none",});              
    });
});

//POPUP FOR PRICE DETAILES


	//appends an "active" class to .popup and .popup-content when the "Open" button is clicked
$(".open").on("click", function() {
  $(" .popup-content").css({"display":"block",});
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".popup-content,.open").length) {
    $("body").find(".popup-content").css({"display":"none",});
  }
});



//POPUP FOR EMI

$(".emi").on("click", function() {
  $(" .popup-content1").css({"display":"block",});
  $('body').css('overflow', 'hidden');  //ADD THIS
});

//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
$(".close").on("click", function() {
  $(".popup-content1").css({"display":"none",});
  $('body').css('overflow', 'auto');  //ADD THIS
});

// select different EMI options
$(function() {
   $(".emi-plans-tabsnav li").click(function() {
      // remove classes from all
      $(".emi-plans-tabsnav li").removeClass("emi-plans-active");
      // add class to the one we clicked
      $(this).addClass("emi-plans-active");
   });
});


//DIFFERENT BANKS EMI

$(document).ready(function(){

  
  $(".emi-plans-tabsnav li").click(function(){
     var tabid = $(this).find("a").attr("href");
     $(".emi-plans-tab").removeClass("active1");   // removing active class from tab

     $(".emi-plans-tab").hide();   // hiding open tab
     $(tabid).show();    // show tab     

  });
});

//TERMS AND CONDITION

$(document).ready( function(){
	$(".emi-plans-terms").on("click", function() {
	  $(" #terms-conditions").css({"display":"block",});
	  $(" #emi-plans").css({"display":"none",});
	});


	$(".emiplan").on("click", function() {
	  $(" #terms-conditions").css({"display":"none",});
	  $(" #emi-plans").css({"display":"block",});
	});
});


//POPUP FOR SIZE CHART

$(document).ready( function(){
	$(".open1").on("click", function(e) {
		  e.preventDefault();
		  $(" .popup-content2").css({"display":"block",});
		  $('body').css('overflow', 'hidden');  //ADD THIS
	});

	//removes the "active" class to .popup and .popup-content when the "Close" button is clicked 
	$(".close1").on("click", function(e) {
			e.preventDefault();
			$(".popup-content2").css({"display":"none",});
			$('body').css('overflow', 'auto');  //ADD THIS
	});
});
//convert units
$(document).ready( function(){
	   $(".inchCmToggle button").click(function() {
		  // remove classes from all
		  $(".inchCmToggle button").removeClass("scaleAndUnits-selected");
		  // add class to the one we clicked
		  $(this).addClass("scaleAndUnits-selected");
	   });
	

	$(".inchCmToggle #inch").on("click", function() {
		  $(".inch").css({"display":"block",});
		  $(".cm").css({"display":"none",});
	});

	$(".inchCmToggle #cm").on("click", function() {
	  $(".cm").css({"display":"block",});
	  $(".inch").css({"display":"none",});
	});
});
// SELECT SIZE BUTTONS USING SIZE CHART
$(document).ready( function(){
	$(".size-buttons button").on("click", function() {
		  
		  $(".size-buttons button").css({"border":"1px solid  #bfc0c6", "color":"#282c3f", "outline":"none"});
		  $(this).css({"border":"1px solid #ff3f6c", "color":"#ff3f6c", "outline":"none"});
	});

	$(".table_row1").on("click", function() {	  
		   $(".size-buttons button").css({"border":"1px solid  #bfc0c6", "color":"#282c3f", "outline":"none"});
		  $("#size_XS").css({"border":"1px solid #ff3f6c", "color":"#ff3f6c", "outline":"none"});
	});

	$(".table_row2").on("click", function() {	  
		   $(".size-buttons button").css({"border":"1px solid  #bfc0c6", "color":"#282c3f", "outline":"none"});
		  $("#size_S").css({"border":"1px solid #ff3f6c", "color":"#ff3f6c", "outline":"none"});
	});

	$(".table_row3").on("click", function() {	  
		   $(".size-buttons button").css({"border":"1px solid  #bfc0c6", "color":"#282c3f", "outline":"none"});
		  $("#size_M").css({"border":"1px solid #ff3f6c", "color":"#ff3f6c", "outline":"none"});
	});

	$(".table_row4").on("click", function() {	  
		   $(".size-buttons button").css({"border":"1px solid  #bfc0c6", "color":"#282c3f", "outline":"none"});
		  $("#size_L").css({"border":"1px solid #ff3f6c", "color":"#ff3f6c", "outline":"none"});
	});

	$(".table_row5").on("click", function() {
		$(".size-buttons button").css({"border":"1px solid  #bfc0c6", "color":"#282c3f", "outline":"none"});		
		  $("#size_XL").css({"border":"1px solid #ff3f6c", "color":"#ff3f6c", "outline":"none"});
	});

	$(".table_row6").on("click", function() {	  
		   $(".size-buttons button").css({"border":"1px solid  #bfc0c6", "color":"#282c3f", "outline":"none"});
		  $("#size_XXL").css({"border":"1px solid #ff3f6c", "color":"#ff3f6c", "outline":"none"});
	});
});


// SELECT SIZE USING BUTTONS

$(document).ready( function(){
	$("#size_XS").on("click", function() {
		  $("#size-chart table tr").css({"font-weight":"400",});
		  $(".table_row1 input").prop("checked", true);
		  $(".table_row1").css({"font-weight":"bold",});
		  
	});

	$("#size_S").on("click", function() {
	  $("#size-chart table tr").css({"font-weight":"400",});
	  $(".table_row2 input").prop("checked", true);
	  $(".table_row2").css({"font-weight":"bold",});
	});

	$("#size_M").on("click", function() {
	  $("#size-chart table tr").css({"font-weight":"400",});
	  $(".table_row3 input").prop("checked", true);
	  $(".table_row3").css({"font-weight":"bold",});
	});

	$("#size_L").on("click", function() {
	  $("#size-chart table tr").css({"font-weight":"400",});
	  $(".table_row4 input").prop("checked", true);
	  $(".table_row4").css({"font-weight":"bold",});
	});

	$("#size_XL").on("click", function() {
	  $("#size-chart table tr").css({"font-weight":"400",});
	  $(".table_row5 input").prop("checked", true);
	  $(".table_row5").css({"font-weight":"bold",});
	});

	$("#size_XXL").on("click", function() {
	  $("#size-chart table tr").css({"font-weight":"400",});
	  $(".table_row6 input").prop("checked", true);
	  $(".table_row6").css({"font-weight":"bold",});
	});
});


//SELECT SIZE

$(document).ready( function(){
	$("#size-chart table .table_row1").on("click", function() {
	  $("#size-chart table tr").css({"font-weight":"400",});
	  $(".table_row1 input").prop("checked", true);
	  $(".table_row1").css({"font-weight":"bold",});
	  
	});

	$("#size-chart table .table_row2").on("click", function() {
	  $("#size-chart table tr").css({"font-weight":"400",});
	  $(".table_row2 input").prop("checked", true);
	  $(".table_row2").css({"font-weight":"bold",});
	});

	$("#size-chart table .table_row3").on("click", function() {
	  $("#size-chart table tr").css({"font-weight":"400",});
	  $(".table_row3 input").prop("checked", true);
	  $(".table_row3").css({"font-weight":"bold",});
	});

	$("#size-chart table .table_row4").on("click", function() {
	  $("#size-chart table tr").css({"font-weight":"400",});
	  $(".table_row4 input").prop("checked", true);
	  $(".table_row4").css({"font-weight":"bold",});
	});

	$("#size-chart table .table_row5").on("click", function() {
	  $("#size-chart table tr").css({"font-weight":"400",});
	  $(".table_row5 input").prop("checked", true);
	  $(".table_row5").css({"font-weight":"bold",});
	});
	$("#size-chart table .table_row6").on("click", function() {
	  $("#size-chart table tr").css({"font-weight":"400",});
	  $(".table_row6 input").prop("checked", true);
	  $(".table_row6").css({"font-weight":"bold",});
	});
});

// SIZE CHART

$(function() {
   $(".measurement div").click(function() {
      // remove classes from all
      $(".measurement div").removeClass("selected");
      // add class to the one we clicked
      $(this).addClass("selected");
   });
});

//SCROLLING

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    if (this.hash !== "") {
     
      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (500) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, .size-chart-popup').animate({
        scrollTop: $(hash).offset().top
      }, 600);
    } // End if
  });
});

// PINCODE CHECK
$(document).ready(function(){
	$(".pincode .check-pincode").on("click", function() { 					
		$(".pincode .change-pincode").css("display" , "block");	// Change text of button element
		$(".pincode .check-pincode").css("display" , "none");
	});
	$(".pincode .change-pincode").on("click", function() { 					
		$(".pincode .check-pincode").css("display" , "block");	// Change text of button element
		$(".pincode .change-pincode").css("display" , "none");
		
	});
});


// AUTOCOMPLETE



 var availableTags = [  
      "122001",  
      "403508",  
      "211001",  
      "500001",  
      "791111",  
      "248001",  
      "226001",  
      "600001",  
      "302001",  
      "160017",  
      "751001",  
      "400001",  
      "462001",  
      "695001",  
      "560001",  
      "190001",  
      "171001",  
      "382010",  
      "403001",  
      "110001",  
      "800001",  
      "781005"  
    ];  
$(function() {  	
    $( "#tags" ).autocomplete({  
      source: availableTags  
    });  	
});  

function checkpincode()
{
	var a = $("#tags").val();
	if(a=="")
	{
		alert("please enter a pincode");
	}
}
  
// BAG 
  
$(".bag-size-select").on("click", function() {
  $(" .popup-content3").css({"display":"block",});
}); 
$(".close3,.done-button").on("click", function() {
  $(" .popup-content3").css({"display":"none",});
});

$(".bag-qty-select").on("click", function() {
  $(" .popup-content4").css({"display":"block",});
});  
$(".close4,.done-button").on("click", function() {
  $(" .popup-content4").css({"display":"none",});
});

  
$(".apply-coupon1").on("click", function() {
  $(" .popup-content5").css({"display":"block",});
}); 
$(".close5,.done-button").on("click", function() {
  $(" .popup-content5").css({"display":"none",});
});
// load more content for bag
  
$(function () {
    $(".more-offers li:eq(1),.more-offers li:eq(2)").css("display","none");
    $("#loadMore1").on('click', function (e) {
        e.preventDefault();
        $(".more-offers li:hidden").slice(0, 2).slideDown();        
        $("#loadMore1").css("display","none");
		$("#loadless1").css("display","block");
    });
}); 

$(function () {    
    $("#loadless1").on('click', function (e) {
        e.preventDefault();
        $(".more-offers li:eq(1),.more-offers li:eq(2)").slideUp();       
        $("#loadMore1").css("display","block");
		$("#loadless1").css("display","none");
    });
}); 

// change the size 

$(document).ready(function(){
	$("#size_XS").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".size-change").html("XS");	// Change text of button element
		});
	});
	$("#size_S").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".size-change").html("S");	// Change text of button element
		});
	});
	$("#size_M").on("click", function() {
		$(".done-button").on("click", function() {
			$(".size-change").html("M");	// Change text of button element
		});
	});
	$("#size_L").on("click", function() {
		$(".done-button").on("click", function() {
			$(".size-change").html("L");	// Change text of button element
		});
	});
	$("#size_XL").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".size-change").html("XL");	// Change text of button element
		});
	});
	$("#size_XXL").on("click", function() {
		$(".done-button").on("click", function() {
			$(".size-change").html("XXL");	// Change text of button element
		});
	});
});
  
//select quantity
  
$(document).ready(function(){
	$("#qty_1").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".qty-change").html("1");	// Change text of button element
			$(".bag-discount").html("Rs. -300");
			$("#qty-price").html("Rs. 9,99");
			$(".total-order-price").html("Rs. 7,99 ");
			$(".total-price").html("Rs. 7,99 ");
		});
	});
	$("#qty_2").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".qty-change").html("2");	// Change text of button element
			$(".bag-discount").html("Rs. -600");
			$("#qty-price").html("Rs. 1,998");
			$(".total-order-price").html("Rs. 1,598 ");
			$(".total-price").html("Rs. 1,598 ");
		});
	});
	$("#qty_3").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".qty-change").html("3");	// Change text of button element
			$(".bag-discount").html("Rs. -900");
			$("#qty-price").html("Rs. 2,997");
			$(".total-order-price").html("Rs. 2,397 ");
			$(".total-price").html("Rs. 2,397");
		});
	});
	$("#qty_4").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".qty-change").html("4");	// Change text of button element
			$(".bag-discount").html("Rs. -1200");
			$("#qty-price").html("Rs. 3,996");
			$(".total-order-price").html("Rs. 3,196 ");
			$(".total-price").html("Rs. 3,196 ");
		});
	});
	$("#qty_5").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".qty-change").html("5");	// Change text of button element
			$(".bag-discount").html("Rs. -1500");
			$("#qty-price").html("Rs. 4,995");
			$(".total-order-price").html("Rs. 3,995 ");
			$(".total-price").html("Rs. 3,995 ");
		});
	});
	$("#qty_6").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".qty-change").html("6");	// Change text of button element
			$(".bag-discount").html("Rs. -1800");
			$("#qty-price").html("Rs. 5,994");
			$(".total-order-price").html("Rs. 4,794 ");
			$(".total-price").html("Rs. 4,794 ");
		});
	});
	$("#qty_7").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".qty-change").html("7");	// Change text of button element
			$(".bag-discount").html("Rs. -2100");
			$("#qty-price").html("Rs. 6,993");
			$(".total-order-price").html("Rs. 5,593 ");
			$(".total-price").html("Rs. 5,593 ");
		});
	});
	$("#qty_8").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".qty-change").html("8");	// Change text of button element
			$(".bag-discount").html("Rs. -2400");
			$("#qty-price").html("Rs. 7,992");
			$(".total-order-price").html("Rs. 6,392 ");
			$(".total-price").html("Rs. 6,392 ");
		});
	});
	$("#qty_9").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".qty-change").html("9");	// Change text of button element
			$(".bag-discount").html("Rs. -2700");
			$("#qty-price").html("Rs. 9,991");
			$(".total-order-price").html("Rs. 7,191 ");
			$(".total-price").html("Rs. 7,191 ");
		});										
	});
	$("#qty_10").on("click", function() { 
		$(".done-button").on("click", function() {
			$(".qty-change").html("Rs. 10");	// Change text of button element
			$(".bag-discount").html("Rs. -3000");
			$("#qty-price").html("Rs. 9,990");
			$(".total-order-price").html("Rs. 7,990 ");
			$(".total-price").html("Rs. 7,990 ");
		});
	});
});



	
	


$(document).ready( function(){
		
	$(function () {    
		$(".priceDetail-base-action").on('click', function (e) {
			e.preventDefault();
			$(".priceDetail-base-row-hide").slideDown();        
			$(".priceDetail-base-action").css("display","none");			//hide information
			$(".priceDetail-base-action1").css("display","block");
		});
	}); 
	$(function () {   
		$(".priceDetail-base-action1").on('click', function (e) {
			e.preventDefault();
			$(".priceDetail-base-row-hide").slideUp();        
			$(".priceDetail-base-action1").css("display","none");
			$(".priceDetail-base-action").css("display","block");
		});
	}); 
	//popup for adding adding address
	$(".open-new-address-form").on("click", function() {
		$(" .popup-content6").css({"display":"block",});
	}); 
	$(".close6,.done-button1").on("click", function() {
		$(" .popup-content6").css({"display":"none",});
	});
	$("#edit-other-added-address").on("click", function() {
		$(" .popup-content6").css({"display":"block",});
	});
	//popup for adding adding address
	$("#edit-other-address").on("click", function() {
		$(" .popup-content7").css({"display":"block",});
	}); 
	
	$(".close6,.done-button").on("click", function() {
		$(" .popup-content7").css({"display":"none",});
	});
	
	
	//popup for adding adding address
	$("#edit-default-address").on("click", function() {
		$(" .popup-content8").css({"display":"block",});
	}); 
	 
	$(".close6,.done-button").on("click", function() {
		$(" .popup-content8").css({"display":"none",});
	});
	
	// select home or work
	$(".addressFormUI-base-addressTypes div").on("click", function(){
		$(".addressFormUI-base-addressTypes div").removeClass("addressFormUI-base-selectedAddressType");
      // add class to the one we clicked
		$(this).addClass("addressFormUI-base-selectedAddressType");
	});	
	
	$(".done-button1").on("click", function appendText() {
		  var txt1 = $("#name").val();        // Create text with HTML
		  var txt2 = $("#mobile").val(); 
		  var txt3 = $("#streetAddress").val(); 
		  var txt4 = $("#locality").val();
		  var txt5 = $("#city").val(); 
		  var txt6 = $("#state").val(); 
		  var txt7 = $("#pincode").val();
		  
		
		  
		   // Create text with jQuery
			 // Create text with DOM
		  $("#name-of-the-customer b").html(txt1);   // Append new elements
		  $("#number-of-the-customer").html(txt2);
		  $("#home-of-the-customer").html(txt3);
		  $("#locality-of-the-customer").html(txt4);
		  $("#city-of-the-customer").html(txt5);
		  $("#state-of-the-customer").html(txt6);
		  $("#pincode-of-the-customer").html(txt7);
		  
		});
	$(".done-button1").on("click", function(){
		$(".add-other-addresses").css({"display":"block"});
		
	});
	
	
	$(".done-button").on("click", function () {
		  var txt1 = $("#name1").val();        // Create text with HTML
		  var txt2 = $("#mobile1").val(); 
		  var txt3 = $("#streetAddress1").val(); 
		  var txt4 = $("#locality1").val();
		  var txt5 = $("#city1").val(); 
		  var txt6 = $("#state1").val(); 
		  var txt7 = $("#pincode1").val();
		  
		
		  
		   // Create text with jQuery
			 // Create text with DOM
		  $("#name-of-the-customer1 b").html(txt1);   // Append new elements
		  $("#number-of-the-customer1").html(txt2);
		  $("#home-of-the-customer1").html(txt3);
		  $("#locality-of-the-customer1").html(txt4);
		  $("#city-of-the-customer1").html(txt5);
		  $("#state-of-the-customer1").html(txt6);
		  $("#pincode-of-the-customer1").html(txt7);
		  
	});
	
	$(".done-button").on("click", function () {
		  var txt1 = $("#name2").val();        // Create text with HTML
		  var txt2 = $("#mobile2").val(); 
		  var txt3 = $("#streetAddress2").val(); 
		  var txt4 = $("#locality2").val();
		  var txt5 = $("#city2").val(); 
		  var txt6 = $("#state2").val(); 
		  var txt7 = $("#pincode2").val();
		  
		
		  
		   // Create text with jQuery
			 // Create text with DOM
		  $("#name-of-the-customer2 b").html(txt1);   // Append new elements
		  $("#number-of-the-customer2").html(txt2);
		  $("#home-of-the-customer2").html(txt3);
		  $("#locality-of-the-customer2").html(txt4);
		  $("#city-of-the-customer2").html(txt5);
		  $("#state-of-the-customer2").html(txt6);
		  $("#pincode-of-the-customer2").html(txt7);
		  
	});
	
	$(".done-button").on("click", function () {
		  var txt1 = $(".popup-content6 .addressFormUI-base-selectedAddressType").html();        // Create text with HTML		  
		  $(".add-other-addresstype").html(txt1);		  
	});
	
	$(".done-button").on("click", function () {
		  var txt1 = $(".popup-content7 .addressFormUI-base-selectedAddressType").html();        // Create text with HTML		  
		  $(".other-addresstype").html(txt1);		  
	});
	$(".done-button").on("click", function () {
		  var txt1 = $(".popup-content8 .addressFormUI-base-selectedAddressType").html();        // Create text with HTML		  
		  $(".default-addresstype").html(txt1);		  
	});
	// remove address
	$("#remove-default-address").on("click", function() {
		$("#default-address-of-customer").css({"display":"none",});
	});
	$("#remove-other-address").on("click", function() {
		$("#other-address-of-customer").css({"display":"none",});
	});
	
});


// JS FOR Profile PAGE

$(document).ready(function(){
	$(".profile-editButton").on("click", function() {
		$(" .popup-content9").css({"display":"block",});
	}); 
	 
	$(".close9,.done-button").on("click", function() {
		$(" .popup-content9").css({"display":"none",});
	});
	$(".done-button").on("click", function () {
		  var txt1 = $(".popup-content9 .addressFormUI-base-selectedAddressType").html();        // Create text with HTML		  
		  $(".other-addresstype").html(txt1);		  
	});
});	


// JS FOR FAQ PAGE

$(document).ready(function(){
	$(".faqSection-question").click(function(){				// accordion for FAQs
		$(this).next().toggle(5); 
	});
	$(".faqspage-sidebar a ").click(function(){
		$(".faqspage-sidebar a ").removeClass("faqspage-active");		
		$(this).addClass("faqspage-active");
		$(this).removeClass("false");
	});
	$(".faqspage-sidebar #Q1 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q1 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q2 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q2 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q3 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q3 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q4 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q4 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q5 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q5 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q6 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q6 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q7 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q7 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q8 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q8 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q9 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q9 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q10 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q10 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q11 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q11 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q12 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q12 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q13 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q13 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q14 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q14 span img ").attr('src','image/faq-star-2.png');		
	});
	$(".faqspage-sidebar #Q15 ").click(function(){
		$(".faqspage-sidebar a span img ").attr('src','image/faq-star-1.png');		
		$("#Q15 span img ").attr('src','image/faq-star-2.png');		
	});
	
	
	$(".faqspage-sidebar a").click(function(){
     var tabid1 = $(this).attr("href");
     $(".faqSection-section").removeClass("active_queries");   // removing active class from tab

     $(".faqSection-section").hide();   // hiding open tab
     $(tabid1).show();    // show tab     

    });
	
});




// JS FOR GIFT-CARD PAGE

$(document).ready(function () {    
	$(".occasionspicker-occasionsContainer div").slice(0, 12).show();
	$(".occasionspicker-occasionsContainer div").slice(12, 24).hide();
    $(".occasionspicker-showMoreLink").on('click', function () {        
        $(".occasionspicker-occasionsContainer div").slice(12, 24).show(2);   
		$(".occasionspicker-hide").css({"display":"none",});
    });
	
	
	$(".occasionspicker-occasionsContainer div").on("click", function(){
		$(".occasionspicker-occasionsContainer div").removeClass("occasionspicker-occasionDivSelected");
      // add class to the one we clicked
		$(this).addClass("occasionspicker-occasionDivSelected");
	});	
	
	$("#card1").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard1.jpg")');	
		$(".personalize-occasionCardImage").attr('src','image/giftcard1.jpg');
		$("#message").attr('value','Wish you a very Happy Raksha Bandhan!');
	});
	$("#card2").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard2.jpg")');		
		$(".personalize-occasionCardImage").attr('src','image/giftcard2.jpg');
		$("#message").attr('value','Happy Married Life!');
	});
	$("#card3").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard3.jpg")');		
		$(".personalize-occasionCardImage").attr('src','image/giftcard3.jpg');
		$("#message").attr('value','Best wishes for the festive season!');
	});
	$("#card4").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard4.jpg")');		
		$(".personalize-occasionCardImage").attr('src','image/giftcard4.png');
		$("#message").attr('value','Wish you a great year ahead!');
	});
	$("#card5").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard5.jpg")');		
		$(".personalize-occasionCardImage").attr('src','image/giftcard5.png');
		$("#message").attr('value','Look your best, Its on me!');
	});
	$("#card6").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard6.jpg")');		
		$(".personalize-occasionCardImage").attr('src','image/giftcard6.png');
		$("#message").attr('value','Wish you a very happy anniversary!');
	});
	$("#card7").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard7.jpg")');		
		$(".personalize-occasionCardImage").attr('src','image/giftcard7.jpg');
		$("#message").attr('value','Welcome aboard. Hope you have a great journey!');
	});
	$("#card8").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard8.jpg")');		
		$(".personalize-occasionCardImage").attr('src','image/giftcard8.png');
		$("#message").attr('value','Wish you all the best!');
	});
	$("#card9").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard9.jpg")');		
		$(".personalize-occasionCardImage").attr('src','image/giftcard9.png');
		$("#message").attr('value','Hearty congratulations to you!');
	});
	$("#card10").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard10.jpg")');		
		$(".personalize-occasionCardImage").attr('src','image/giftcard10.png');
		$("#message").attr('value','Best of luck!');
	});
	$("#card11").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard11.jpg")');		
		$(".personalize-occasionCardImage").attr('src','image/giftcard11.jpg');
		$("#message").attr('value','I Love You, Mom!');
	});
	$("#card12").on("click", function(){
		$(".personalize-occasionBg").css('background-image','url("image/background_for _giftcard12.jpg")');		
		$(".personalize-occasionCardImage").attr('src','image/giftcard12.jpg');
		$("#message").attr('value','I love you, Dad!');
	});
	
});
