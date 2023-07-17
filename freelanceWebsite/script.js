const search=document.querySelector("#search");
const searchform=document.querySelector("#searchform");

search.addEventListener("click",function(){
    searchform.classList.toggle("active");
    // document.addEventListener("click",function(){
    //     if(e.composedPath().includes(search)){

    //     }
    // })
});


