north_indian_foods = ["Butter Chicken", "Paneer Tikka", "Chole Bhature", "Tandoori Chicken", "Aloo Paratha", "Palak Paneer", "Rajma Chawal", "Aloo Tikki", "Dal Makhani", "Pani Puri", "Samosa", "Matar Paneer", "Baingan Bharta", "Chicken Tikka Masala", "Kadai Paneer", "Murg Malaiwala", "Tandoori Roti", "Pulao", "Rogan Josh", "Biryani", "Lassi", "Gajar Ka Halwa", "Pakoras", "Kheer", "Aloo Gobi", "Dahi Vada", "Shahi Tukda", "Chana Masala", "Malai Kofta", "Pav Bhaji", "Ice Desserts"];
const nodeList=document.querySelectorAll(".grid-items");
for(let j=0;j<nodeList.length;j++){  
	for(let i=1;i<=30;i++){  
    	nodeList[j].innerHTML+=`
    	<li>
    	    <a href="#">
    	        <div class="food-images">
    	            <img src="../images/${"res"+i}.avif" alt="North-indian food"/>
    	            <div class="offer">
		
    	            </div>
    	        </div>
    	        <div class="rating">
    	            <h5>${north_indian_foods[i]}</h5>
    	            <h6>3.9 <i class="fa fa-star"></i></h6>
    	        </div>
    	        <div class="food-type">
    	            <span>North Indian</span>
    	            <p>&#8377;250 for one</p>
    	        </div>
    	        <small>16 min</small>
    	        <div class="delivery-condition">
    	            <img src="../images/maxsafety.webp" alt=""/>
    	            <p>Follows all Max Safety measures to ensure your food is safe</p>
    	        </div>
    	    </a>
    	</li>`
    	if (i<=6){
    	    const collection = document.getElementsByClassName("offer");
    	    collection[i-1].innerHTML =`
    	        <small>Promoted</small>
    	        <span>20% OFF</span>`
    	}
    }
}
// Get the button for vertical scroll
let mybutton = document.getElementById("myBtn");
// When scrolls down show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 2000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// clicks on the button, scroll to the top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//hozizontal scroll

const buttonRight = document.getElementById('slider-right');
const buttonLeft = document.getElementById('slider-left');
buttonRight.onclick = function () {
  document.getElementById('slider-content').scrollLeft += 200;
  buttonLeft.style.display = "flex";
};
buttonLeft.onclick = function () {
  document.getElementById('slider-content').scrollLeft -= 200;
  if(document.getElementById('slider-content').scrollLeft ==0){
    buttonLeft.style.display = "none";
  }
};

//orderhome location dropdown
function droplocation() {
    document.getElementById("locdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.location')) {
        var dropdown = document.getElementById("locdown");
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}

// Tab selection jquery
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
	  loop:true,
	  margin:0,
	  items:1,
  });
  $("#orderhome .tab-head ul li a").on("click",function(){
	var $this=$(this);
	$("#orderhome .tab-head ul li a").removeClass("active");
	$this.addClass("active");
	$("#orderhome .order-option").removeClass("active");
	$this.parent().addClass("active");

	let clicked_tab=$this.data("id");
	$(".tab-body div.items").removeClass("active");
	$(`#${clicked_tab}`).addClass("active");
  });
  });

  //sticky top jquery
var fixmeTop = $('.tab-body .options').offset().top;     
$(window).scroll(function() {                 
    var currentScroll = $(window).scrollTop(); 
    if (currentScroll >= fixmeTop) {           
        $('.tab-body .options').css({                   
            position: 'fixed',
            top: '0',
            zIndex: '10',
            left: '0'
        });
    } else {                                   
        $('.tab-body .options').css({                     
            position: 'static'
        });
    }
});