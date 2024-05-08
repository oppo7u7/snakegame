let t1 =document.getElementById("t1")
let t2 =document.getElementById("t2")
let t3 =document.getElementById("t3")
let t4 =document.getElementById("t4")
let t5 =document.getElementById("t5")
let t6 =document.getElementById("t6")
let t7 =document.getElementById("t7")
let t8 =document.getElementById("t8")
let t9 =document.getElementById("t9")
let t10=document.getElementById("t10")
let t11 =document.getElementById("t11")
let t12 =document.getElementById("t12")
let t13 =document.getElementById("t13")
let t14 =document.getElementById("t14")
let t15 =document.getElementById("t15")
let t16 =document.getElementById("t16")
let t17 =document.getElementById("t17")
let t18 =document.getElementById("t18")
let t19 =document.getElementById("t19")
let t20=document.getElementById("t20")
         let a1  =document.getElementById("a1")
         let a2  =document.getElementById("a2")
         let a3  =document.getElementById("a3")
         let a4  =document.getElementById("a4")
         let a5  =document.getElementById("a5")
         let a6  =document.getElementById("a6")
         let a7  =document.getElementById("a7")
         let a8  =document.getElementById("a8")
         let a9  =document.getElementById("a9")
         let a10 =document.getElementById("a10")
         let a11 =document.getElementById("a11")
         let a12 =document.getElementById("a12")
         let a13 =document.getElementById("a13")
         let a14 =document.getElementById("a14")
         let a15 =document.getElementById("a15")
         let a16 =document.getElementById("a16")
         let a17 =document.getElementById("a17")
         let a18 =document.getElementById("a18")
         let a19 =document.getElementById("a19")
         let a20 =document.getElementById("a20")
    let l=document.getElementById("L")
    let r=document.getElementById("R")
    let u=document.getElementById("U")
    let d=document.getElementById("D")

    let start=document.getElementsByClassName("start")[0]
    let pause=document.getElementsByClassName("pause")[0]
    let title=document.getElementsByClassName("title")[0]
    let poster=document.getElementsByClassName("poster")[0]
    let ps=document.getElementsByClassName("ps")[0]
    let losepage=document.getElementsByClassName("lose")[0]
    let restartbtn=document.getElementsByClassName("restart")[0]
    let winpage=document.getElementsByClassName("win")[0]
    let wbtn=document.getElementById("wbtn")
    let audio1=document.getElementsByClassName("aud")[0]

let snake=document.getElementById("sk")

var map=[[0,0]]
var app=[a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20]
var a_index=0
var x=Math.round(Math.random()*20)
var y=Math.round(Math.random()*20)
var nb1=0
var nb2=0
var tnb1=0;var tnb2=0;var tnb3=0;var tnb4=0;var tnb5=0;var tnb6=0;var tnb7=0;var tnb8=0;var tnb9=0;var tnb10=0;
var tnb11=0;var tnb12=0;var tnb13=0;var tnb14=0;var tnb15=0;var tnb16=0;var tnb17=0;var tnb18=0;var tnb19=0;var tnb20=0
var mode="pause"
var swtch="play"
var enable_pause= false
var enable_map=false


//apple_audio
audio1.volume=1
function aud(){audio1.play()}

//lose
function lose(){losepage.style.display="inline"; mode="pause";enable_map=false;enable_pause=false;}
function restart(){map=[[0,0]];a_index=0;
                nb1=0;nb2=0;swtch="play";x=Math.round(Math.random()*20) ;y=Math.round(Math.random()*20);
                tnb1=0;tnb2=0;tnb3=0;tnb4=0;tnb5=0;tnb6=0;tnb7=0;tnb8=0;tnb9=0;tnb10=0
                tnb11=0;tnb12=0;tnb13=0;tnb14=0;tnb15=0;tnb16=0;tnb17=0;tnb18=0;tnb19=0;tnb20=0;
                t1.style.display="none"; t2.style.display="none"; t3.style.display="none"; t4.style.display="none"; t5.style.display="none";
                t6.style.display="none"; t7.style.display="none"; t8.style.display="none"; t9.style.display="none"; t10.style.display="none";
                t11.style.display="none"; t12.style.display="none"; t13.style.display="none"; t14.style.display="none"; t15.style.display="none";
                t16.style.display="none"; t17.style.display="none"; t18.style.display="none"; t19.style.display="none"; t20.style.display="none";
                a1.style.display="none";a1.style.gridArea="x";a2.style.display="none";a2.style.gridArea="x"
                a3.style.display="none";a3.style.gridArea="x";a4.style.display="none";a4.style.gridArea="x"
                a5.style.display="none";a5.style.gridArea="x";a6.style.display="none";a6.style.gridArea="x"
                a7.style.display="none";a7.style.gridArea="x";a8.style.display="none";a8.style.gridArea="x"
                a9.style.display="none";a9.style.gridArea="x";a10.style.display="none";a10.style.gridArea="x"
                a11.style.display="none";a11.style.gridArea="x";a12.style.display="none";a12.style.gridArea="x"
                a13.style.display="none";a13.style.gridArea="x";a14.style.display="none";a14.style.gridArea="x"
                a15.style.display="none";a15.style.gridArea="x";a16.style.display="none";a16.style.gridArea="x"
                a17.style.display="none";a17.style.gridArea="x";a18.style.display="none";a18.style.gridArea="x"
                a19.style.display="none";a19.style.gridArea="x";a20.style.display="none";a20.style.gridArea="x"
                apple_random();head_random();losepage.style.display="none";winpage.style.display="none"
}

//win
function win(){winpage.style.display="inline";mode="pause";enable_map=false;enable_pause=false;}

//generate head
function head_random(){return snake.style.gridArea="s"+y+"s"+x}
head_random()


//generate apples
function apple_random(){if(mode=="play"){app[a_index].style.gridArea="s"+Math.round(Math.random()*20)+"s"+Math.round(Math.random()*20)
    app[a_index].style.display="inline" ;a_index++}}


//move head
setInterval(function(){if(mode=="play"){if(x>-1 && x<=20 && y>-1 && y<=20){x=x+nb1 ; y=y+nb2 ; snake.style.gridArea="s"+y+"s"+x ;
                                                              if(enable_map){map.push([x,y])} ; }
                                        else{lose()}
                                    }},200)

//resize-map
setInterval(function(){if(map.length>21){map.slice(0,1)}},100)
function idx(){return map.length-1}

//move tails                                                   
setInterval(function(){if(mode=="play"){
                        t1.style.gridArea="s"+map[idx() - tnb1][1]+"s"+map[idx() -tnb1][0]
                        t2.style.gridArea="s"+map[idx() - tnb2][1]+"s"+map[idx() -tnb2][0]
                        t3.style.gridArea="s"+map[idx() - tnb3][1]+"s"+map[idx() -tnb3][0]
                        t4.style.gridArea="s"+map[idx() - tnb4][1]+"s"+map[idx() -tnb4][0]
                        t5.style.gridArea="s"+map[idx() - tnb5][1]+"s"+map[idx() -tnb5][0]
                        t6.style.gridArea="s"+map[idx() - tnb6][1]+"s"+map[idx() -tnb6][0]
                        t7.style.gridArea="s"+map[idx() - tnb7][1]+"s"+map[idx() -tnb7][0]
                        t8.style.gridArea="s"+map[idx() - tnb8][1]+"s"+map[idx() -tnb8][0]
                        t9.style.gridArea="s"+map[idx() - tnb9][1]+"s"+map[idx() -tnb9][0]
                        t10.style.gridArea="s"+map[idx() - tnb10][1]+"s"+map[idx() -tnb10][0]
                        t11.style.gridArea="s"+map[idx() - tnb11][1]+"s"+map[idx() -tnb11][0]
                        t12.style.gridArea="s"+map[idx() - tnb12][1]+"s"+map[idx() -tnb12][0]
                        t13.style.gridArea="s"+map[idx() - tnb13][1]+"s"+map[idx() -tnb13][0]
                        t14.style.gridArea="s"+map[idx() - tnb14][1]+"s"+map[idx() -tnb14][0]
                        t15.style.gridArea="s"+map[idx() - tnb15][1]+"s"+map[idx() -tnb15][0]
                        t16.style.gridArea="s"+map[idx() - tnb16][1]+"s"+map[idx() -tnb16][0]
                        t17.style.gridArea="s"+map[idx() - tnb17][1]+"s"+map[idx() -tnb17][0]
                        t18.style.gridArea="s"+map[idx() - tnb18][1]+"s"+map[idx() -tnb18][0]
                        t19.style.gridArea="s"+map[idx() - tnb19][1]+"s"+map[idx() -tnb19][0]
                        t20.style.gridArea="s"+map[idx() - tnb20][1]+"s"+map[idx() -tnb20][0]
                

                if(snake.style.gridArea==a1.style.gridArea){tnb1=1 ; t1.style.display="inline";apple_random();
                a1.style.display="none";a1.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a2.style.gridArea){tnb2=2 ; t2.style.display="inline";apple_random();
                a2.style.display="none";a2.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a3.style.gridArea){tnb3=3 ; t3.style.display="inline";apple_random();
                a3.style.display="none";a3.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a4.style.gridArea){tnb4=4 ; t4.style.display="inline";apple_random();
                a4.style.display="none";a4.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a5.style.gridArea){tnb5=5 ; t5.style.display="inline";apple_random();
                a5.style.display="none";a5.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a6.style.gridArea){tnb6=6 ; t6.style.display="inline";apple_random();
                a6.style.display="none";a6.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a7.style.gridArea){tnb7=7 ; t7.style.display="inline";apple_random();
                a7.style.display="none";a7.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a8.style.gridArea){tnb8=8 ; t8.style.display="inline";apple_random();
                a8.style.display="none";a8.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a9.style.gridArea){tnb9=9 ; t9.style.display="inline";apple_random();
                a9.style.display="none";a9.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a10.style.gridArea){tnb10=10 ; t10.style.display="inline";apple_random();
                a10.style.display="none";a10.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a11.style.gridArea){tnb11=11 ; t11.style.display="inline";apple_random();
                a11.style.display="none";a11.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a12.style.gridArea){tnb12=12 ; t12.style.display="inline";apple_random();
                a12.style.display="none";a12.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a13.style.gridArea){tnb13=13 ; t13.style.display="inline";apple_random();
                a13.style.display="none";a13.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a14.style.gridArea){tnb14=14 ; t14.style.display="inline";apple_random();
                a14.style.display="none";a14.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a15.style.gridArea){tnb15=15 ; t15.style.display="inline";apple_random();
                a15.style.display="none";a15.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a16.style.gridArea){tnb16=16 ; t16.style.display="inline";apple_random();
                a16.style.display="none";a16.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a17.style.gridArea){tnb17=17 ; t17.style.display="inline";apple_random();
                a17.style.display="none";a17.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a18.style.gridArea){tnb18=18 ; t18.style.display="inline";apple_random();
                a18.style.display="none";a18.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a19.style.gridArea){tnb19=19 ; t19.style.display="inline";apple_random();
                a19.style.display="none";a19.style.gridArea="x";aud()}
                else if(snake.style.gridArea==a20.style.gridArea){tnb20=20 ; t20.style.display="inline";
                a20.style.display="none";a20.style.gridArea="x";aud();setTimeout(function(){win()},2000)}
}
},200)
           

//controls
l.onclick=function(){if(mode=="play"){if(nb1 != 1){ nb2=0 ; nb1=-1 };enable_map=true}}
r.onclick=function(){if(mode=="play"){if(nb1 != -1){ nb2=0 ; nb1=1 };enable_map=true}}
u.onclick=function(){if(mode=="play"){if(nb2 != 1){ nb1=0 ; nb2=-1};enable_map=true}}
d.onclick=function(){if(mode=="play"){if(nb2 !=-1){ nb1=0 ; nb2=1};enable_map=true}}

//settings
start.onclick=function(){poster.style.display="none";title.style.display="none";start.style.display="none"
                         mode="play";apple_random() ;enable_pause=true;
}
pause.onclick=function(){if(enable_pause){switch(swtch){case "play":mode="pause";ps.style.display="flex";swtch="pause";break;
                                       case "pause":mode="play";ps.style.display="none";swtch="play";break;
                                      }
                        }
                    }
                    
restartbtn.onclick=function(){mode="play";restart();enable_pause=true}
wbtn.onclick=function(){mode="play";restart();enable_pause=true}
