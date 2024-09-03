window.addEventListener('scroll', reveal);
    function reveal(){
        var reveals = document.querySelectorAll('.revealRight');
        for(var i = 0; i < reveals.length; i++){
        var height = window.innerHeight;
        var top = reveals[i].getBoundingClientRect().top;
        if(top < height-70){
            reveals[i].classList.add('active');
        }
        else{
             reveals[i].classList.remove('active');
        }
    }
}