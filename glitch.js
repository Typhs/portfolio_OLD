
$(".glitch-button.b1").click(function(){ //EYE
	//button activation:	
	if ($(this).hasClass("on")){
		$(this).removeClass("on"); //turns off

		$(".parallax").css("filter", "none");

	} else {
		$(this).addClass("on"); //turns on

		const rand = Math.floor(Math.random()*3)+1;
		if (rand == 1){
			$(".parallax").css("filter", "sepia()");
		} else if (rand == 2){
			$(".parallax").css("filter", "invert()");
		} else if (rand == 3){
			$(".parallax").css("filter", "saturate(15)");
		}		
	}
});


$(".glitch-button.b2").click(function(){ // ALIGN
	//button activation:	
	if ($(this).hasClass("on")){
		$(this).removeClass("on");

		$("main").removeClass("glitch-align");

	} else {
		$(this).addClass("on");
		$("main").addClass("glitch-align");
		

	}
});

$(".glitch-button.b3").click(function(){ //CAT
	//button activation:	
	if ($(this).hasClass("on")){
		$(this).removeClass("on");

		$("*").each(function() {
			$(this).removeClass("glitch-cat-1");
			$(this).removeClass("glitch-cat-2");
			$(this).removeClass("glitch-cat-3");
		  });
		
	} else {
		$(this).addClass("on");

		var count=0;
		$("*").each(function() {
			count = count + 1;

			if(count==1){
				$(this).addClass("glitch-cat-1");
			}
			if(count==2){
				$(this).addClass("glitch-cat-2");
			}
			if (count==3){
				count = 0;
				$(this).addClass("glitch-cat-3");
			}
		  });
	}
});


// Num Lock: ---------

var text = "";
const password = Math.floor(Math.random()*10000);
console.log("pass: ",password);
$("#glitch-note span").text(+password);

var unlocked = false;

$("#num-lock .number").click(function(){
	if(unlocked) return;
	if(text.length >= 6) return;

	text = text + ($(this).text());
	$("#num-lock-display").text(text);
});

$("#num-lock-enter").click(function(){	
	if (text == password) {
		unlocked = true;
		$("#num-lock-display").text("--sucesso--");
		$("#glitch-power-button").addClass("opened");
		return;
	} else {
		text = "";
		$("#num-lock-display").text("--negado--");
	}
});

//end of num lock------

$("#glitch-power-button").click(function () {
	if (! $(this).hasClass("opened")) {
	  return; //returns if button is closed
	}
	$("#glitch-server-status span").text("DESLIGADO");
	$("#glitch-server-status").removeClass();
	$("#glitch-server-status").addClass("off");

  localStorage.setItem('time', new Date().toString())
  window.location.replace("/404.html");
	// $.ajax({
	//   url: 'set-time.php',
	//   type: 'post',
	//   data: {"datatime":today}
	// })
  // .then(()=>{
  //   location.reload(true);//full reaload of page
  // })
  
  //console.log(t);
  //t = new Date(t);
  //console.log(t.getHours());
  //console.log(t.getMinutes());
  })