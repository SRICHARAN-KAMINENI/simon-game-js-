var level=0;
var in_patt=["red","blue","green","yellow"];
var ga_patt=[];
var us_patt=[];
var bool=true;
$(document).keypress(intial);


$(".btn").click(function(){
    var str=$(this).attr("id");
    us_patt.push(str);
    makesound(str);
    makeanimate(str);
    checkans(us_patt.length-1);


    

});


function checkans(remo){

    if(us_patt[remo]===ga_patt[remo]){
        if(us_patt.length===ga_patt.length){
            bool=true;
            setTimeout(function(){
                intial();
            },500);


        }

    }
    else{
        makesound("wrong")
        $("#level-title").text("Game over press key to start again")
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over");
        },100);

        ga_patt=[];
        level=0;
        bool=true;




    }

}




///////////intial///////////////////////////////////////////////////////////////////

function intial(){
    if(bool){
    us_patt=[];
    $("h1").text("level"+" "+level);
    level++;
    var rnum=Math.floor(Math.random()*4);
    ga_patt.push(in_patt[rnum]);
    makesound(in_patt[rnum]);
    makeanimate(in_patt[rnum]);
    bool=false;
    }

}




//////////////////make sound///////////////////////////////////////////////////////

function makesound(val){
            var audio=new Audio("sounds/"+val+".mp3");
            audio.play();
}





/////////////////////animation/////////////////////////////////////////////////////////////

function makeanimate(str){
    $("#"+str).addClass("pressed");
    setTimeout(function(){
        $("#"+str).removeClass("pressed");
    },100)
}
