
{//TYPEWRITER STUFF:
    var TxtType = function(el, toRotate, period) { //this is straight out of https://css-tricks.com/snippets/css/typewriter-effect/
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    };
}  //END OF TYPEWRITER STUFf--------





// ON SCROLL STUFF: ------------------
const w = $(".parallax");
$(w).scroll(function(){
    banana();
    slideElements();
});


function getY(el) { //this is slightly jenky because of the parallax stuff, but should still work (there is like a 0.3px innacuracy because of the memory of floats)
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY+ w.scrollTop();
  }

function slideElements(){
    $('.slide-in').each(function(){ //for each element with slide_in
        const s = w.scrollTop()+(window.screen.height/1.5);

        if (getY(this)-(window.screen.height/10) < s){
            $(this).addClass("on-screen");
        } else {
            $(this).removeClass("on-screen");
        }
        // $(this).addClass("on-screen");
    });
}


function banana() {
    const b = document.querySelector("#banana");
    const bananaY = (getY(b));

    // console.log(bananaY);
    // const s = w.scrollTop()+window.scrollY+(window.screen.height/2);
    const s = w.scrollTop()+(window.screen.height/2);
    // console.log("+" , s);

    if (s > bananaY){ //the number summed is the overall height of 'banana' divided by how many banana segments there are, so here it's 120px = 600px / 5 (600px height with 5 different segments)
        $("#banana").removeClass();
        $("#banana").addClass("banana1");
        // console.log("banana1");
    }
    if (s > bananaY+120){
        $("#banana").removeClass();
        $("#banana").addClass("banana2");
        // console.log("banana2");
    }
    if (s > bananaY+240){
        $("#banana").removeClass();
        $("#banana").addClass("banana3");
        // console.log("banana3");
    }
    if (s > bananaY+360){
        $("#banana").removeClass();
        $("#banana").addClass("banana4");
        // console.log("banana4");
    }
    if (s > bananaY+480){
        $("#banana").removeClass();
        $("#banana").addClass("banana5");
        // console.log("banana5");
    }
}
//END OF SCROLL STUFF --------------

// add time to html:
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();
console.log(time)

$("#time_now").text(time+'');