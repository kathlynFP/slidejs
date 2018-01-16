function Slide(content, prev, next){
  this.content = content;
  this.margin = 0;
  this.prev = prev;
  this.next = next;
  this.bindEvents = function(){
    var _this = this;
    window.setInterval(function(){
      this.changeImg(true);
    }.bind(this), 2000);
    
    this.prev.addEventListener("click", function(){
      _this.changeImg(false);
    });
     
    this.next.addEventListener("click", function(){
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
}
Slide.prototype.nextImg = function(){
  if(this.margin < (this.content.children.length -1) * 1000){
    this.margin = this.margin + 1000;
    console.log(this.margin);
   }    
   else{
    this.margin = 0;
    console.log(this.margin);
   }
  
  this.content.style.marginLeft = "-"+this.margin+"px";
}
Slide.prototype.prevImg = function(){
  if(this.margin > 0)
    this.margin = this.margin - 1000;
  else
    this.margin = 2000;

  this.content.style.marginLeft = "-"+this.margin+"px";
}

var prev = document.getElementById("btn-prev"),
    next = document.getElementById("btn-next"),
    content = document.getElementsByClassName("box-slide")[0];

var slide1 = new Slide(content, prev, next);


var prev2 = document.getElementById("btn-prev2"),
next2 = document.getElementById("btn-next2"),
content2 = document.getElementsByClassName("box-slide2")[0];

var slide2 = new Slide(content2, prev2, next2);
