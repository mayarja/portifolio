let up = document.getElementById('sc');
window.onscroll=function(){
    if(window.scrollY >= 600){
        up.style.display = "block"
    }
    else{
        up.style.display = "none"
    }
}

up.addEventListener('click',function(e){
    window.scrollTo({
        top :0,
        left :0,
        behavior : "smooth"
    })
})

let ll = document.querySelectorAll('.navbar ul li');

ll.forEach(function(e){
    e.addEventListener('click',function(e){
        ll.forEach(function(e){
            e.classList.remove('active');
        })
        this.classList.add('active')
    })

})

let lodi =document.getElementById('lod');

let lt = setTimeout(function(e){
    lodi.style.display="none"
},4000)