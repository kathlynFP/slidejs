var prev = document.getElementById("btn-prev"),
    next = document.getElementById("btn-next")
    margin = 0,
    content = document.getElementsByClassName("box-slide")[0];
 
window.setInterval(function(){
 // console.log("mudou a img");

  if(margin < (content.children.length -1) * 1000){
    margin = margin + 1000;
 //   console.log(margin);
   }    
   else{
    margin = 0;
 //   console.log(margin);
   }

   content.style.marginLeft = "-"+margin+"px";

}, 2000);

prev.addEventListener("click", function(){
 // console.log(margin);
  if(margin > 0)
    margin = margin - 1000;
  else
    margin = 2000;

  content.style.marginLeft = "-"+margin+"px";
  //console.log("clicou no prev");

 });

 next.addEventListener("click", function(){
  
   if(margin < (content.children.length -1) * 1000){
    margin = margin + 1000;
    console.log(margin);
   }    
   else{
    margin = 0;
    console.log(margin);
   }
  
  content.style.marginLeft = "-"+margin+"px";
 });