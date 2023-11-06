north_indian_foods = ["Butter Chicken", "Paneer Tikka", "Chole Bhature", "Tandoori Chicken", "Aloo Paratha", "Palak Paneer", "Rajma Chawal", "Aloo Tikki", "Dal Makhani", "Pani Puri", "Samosa", "Matar Paneer", "Baingan Bharta", "Chicken Tikka Masala", "Kadai Paneer", "Murg Malaiwala", "Tandoori Roti", "Pulao", "Rogan Josh", "Biryani", "Lassi", "Gajar Ka Halwa", "Pakoras", "Kheer", "Aloo Gobi", "Dahi Vada", "Shahi Tukda", "Chana Masala", "Malai Kofta", "Pav Bhaji", "Ice Desserts"]
for(i=1;i<=30;i++){  
    document.getElementById("grid-items").innerHTML+=`
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

