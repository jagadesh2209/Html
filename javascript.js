const s=document.getElementById("btn")
s.addEventListener("click",function(){
    s.style.content=''
    s.style.position="absolute"
    s.style.left="0"
    s.style.right="0"
    s.style.top="0"
    // s.style.bottom="-10px"
    s.style.height="2px"
    s.style.background= "currentColor";
})

//its not working properly


// document.getElementsByTagName("button").addEventListener("click",function(){
//             console.log("hai")
//             // s.innerHTML="hai"
//             // s.style.content=''
//             // s.style.position="absolute"
//             // s.style.left="0"
//             // s.style.right="0"
//             // s.style.bottom="-10px"
//             // s.style.height="2px"
//         })