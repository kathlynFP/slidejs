function Slide(content, prev, next){
  this.content = content;
  this.margin = 0;
  this.prev = prev;
  this.next = next;
  this.items = this.content.children;
  this.conter = 0;
  this.lastItem = this.items[0];
  this.bindEvents = function(){
    var _this = this;
    window.setInterval(function(){
      this.changeImg(true);
    }.bind(this), 2000);
    
    this.prev.addEventListener("click", function(){     
      _this.changeImg(false);
      
    });
     
    this.next.addEventListener("click", function(){
      console.log(_this.conter);
      _this.changeImg(true);
    });

  }
  this.bindEvents();
}

Slide.prototype.changeImg = function(changeNext){
  if(changeNext){
    this.nextImg();
  }
  else{
   this.prevImg();
  }
  this.lastItem.classList.remove("item-active");
  this.lastItem = this.items[this.conter];

  this.items[this.conter].classList.add("item-active");

}
Slide.prototype.nextImg = function(){
  if(this.conter < this.items.length - 1)
    this.conter++;
  else if(this.conter > -1)
    this.conter = 0;
   
}
Slide.prototype.prevImg = function(){
  if(this.conter > 0)
    this.conter--;
  else 
    this.conter = this.items.length - 1;

}

var prev = document.getElementById("btn-prev"),
    next = document.getElementById("btn-next"),
    content = document.getElementById("slide");

var slide1 = new Slide(content, prev, next);


var prev2 = document.getElementById("btn-prev2"),
    next2 = document.getElementById("btn-next2"),
    content2 = document.getElementById("slide2");

var slide2 = new Slide(content2, prev2, next2);
