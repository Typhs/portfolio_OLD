
let plant_ctrl = 0;
let watered = false;
let plant_activated = false;
const plant_dic = {
    '-3':"bad3", 
    '-2': "bad2",
    '-1': "bad1",
    '0': "base",
    '1': "good1",
    '2': "good2"
  }; //end states are -3 or 2

$("#plant").hover(function plant_start() {
    const time = 3500;
    if (plant_activated) return;
    plant_activated = true; //guarantees this only happens once
    plant_work();
    function plant_work(){
        setTimeout(function(){          
            if (watered){
                plant_ctrl = plant_ctrl+1;
            } else {
                plant_ctrl = plant_ctrl-1;
            }

            

            $("#plant").removeClass();
            $("#plant").addClass(plant_dic[plant_ctrl]);
            if (plant_ctrl >= 2 || plant_ctrl <= -3)return;
            plant_work();
        }, time);
    }
});

$("#plant").hover(function(){ 
    //on hover:
    watered = true;
}, function(){              
    //on hoverOut:
    watered = false;
} );

$("#plant").on("touchstart", function(event){ 
    //explicitelly for mobile
    watered = true;
    plant_start();
})
