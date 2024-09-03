const addReview = document.getElementById('addReview');
const reviewPopup = document.getElementById('reviewPopup');
const thankyouPopup = document.getElementById('thankyouPopup');

addReview.addEventListener("click", () => review());

function review(){
    reviewPopup.style.display="block";
}

const closeButton1 = document.getElementById('closeButton1');
const closeButton2 = document.getElementById('closeButton2');

closeButton1.addEventListener("click", () => close());
closeButton2.addEventListener("click", () => close());

function close(){
    reviewPopup.style.display="none";
    thankyouPopup.style.display="none"
    event.preventDefault();
}



const submitButton = document.getElementById('submitButton');

submitButton.addEventListener("click", () => submit());

function submit(){
   reviewPopup.style.display="none";
   thankyouPopup.style.display="block";
   event.preventDefault();
}

star1.addEventListener("click", () => rating(1));
star2.addEventListener("click", () => rating(2));
star3.addEventListener("click", () => rating(3));
star4.addEventListener("click", () => rating(4));
star5.addEventListener("click", () => rating(5));

function rating(number){
    if(number == 1){
        star1.style.color="rgb(255, 225, 0)";
        star2.style.color="rgb(175, 175, 175)";
        star3.style.color="rgb(175, 175, 175)";
        star4.style.color="rgb(175, 175, 175)";
        star5.style.color="rgb(175, 175, 175)";
    }
    else if(number == 2){
        star1.style.color="rgb(255, 225, 0)";
        star2.style.color="rgb(255, 225, 0)";
        star3.style.color="rgb(175, 175, 175)";
        star4.style.color="rgb(175, 175, 175)";
        star5.style.color="rgb(175, 175, 175)";
    }
    else if(number == 3){
        star1.style.color="rgb(255, 225, 0)";
        star2.style.color="rgb(255, 225, 0)";
        star3.style.color="rgb(255, 225, 0)";
        star4.style.color="rgb(175, 175, 175)";
        star5.style.color="rgb(175, 175, 175)";
    }
    else if(number == 4){
        star1.style.color="rgb(255, 225, 0)";
        star2.style.color="rgb(255, 225, 0)";
        star3.style.color="rgb(255, 225, 0)";
        star4.style.color="rgb(255, 225, 0)";
        star5.style.color="rgb(175, 175, 175)";
    }
    else if(number == 5){
        star1.style.color="rgb(255, 225, 0)";
        star2.style.color="rgb(255, 225, 0)";
        star3.style.color="rgb(255, 225, 0)";
        star4.style.color="rgb(255, 225, 0)";
        star5.style.color="rgb(255, 225, 0)";
    }
}