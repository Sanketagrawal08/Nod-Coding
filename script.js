var body = document.querySelector("body");

function navanimation(){
    body.addEventListener('wheel',function(dets){
        if(dets.deltaY > 0){
    
            gsap.to("nav",{
                duration:0.25,
                transform: `translateY(-150%)`
            })
        }
        else{      
        gsap.to("nav",{
        duration:0.25,
        transform: `translateY(0%)`
    })
        }
        
    });
    
    
};


navanimation();

