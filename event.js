const s=document.querySelectorAll(".btn");
s.forEach(function(e){
    e.addEventListener("mouseover",function(){
    
        e.style.textShadow="1px 1px 5px rgba(150, 225, 20, 0.8)";
        
    })
})
s.forEach(function(e){
    e.addEventListener("mouseout",function(){
        
    })
})

s.forEach(function(e){
    e.addEventListener('mouseover',function(){
        e.style.content=''
        e.style.position="relative"
        e.style.left="0"
        e.style.right="0"
        e.style.bottom="-10px"
    })
})

s.forEach(function(e){
    e.addEventListener('mouseout',function(){
        
    })
})