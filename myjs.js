var i=1
var j=1;
function addQ() {
    document.getElementById("b"+i+"letter"+j).innerHTML="Q";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
    
}
function addW() {
    document.getElementById("b"+i+"letter"+j).innerHTML="W";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addE() {
    document.getElementById("b"+i+"letter"+j).innerHTML="E";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addR() {
    document.getElementById("b"+i+"letter"+j).innerHTML="R";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addT() {
    document.getElementById("b"+i+"letter"+j).innerHTML="T";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addU() {
    document.getElementById("b"+i+"letter"+j).innerHTML="U";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addY() {
    document.getElementById("b"+i+"letter"+j).innerHTML="Y";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addI() {
    document.getElementById("b"+i+"letter"+j).innerHTML="I";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addO() {
    document.getElementById("b"+i+"letter"+j).innerHTML="O";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addP() {
    document.getElementById("b"+i+"letter"+j).innerHTML="P";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addU() {
    document.getElementById("b"+i+"letter"+j).innerHTML="U";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addA() {
    document.getElementById("b"+i+"letter"+j).innerHTML="A";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addS() {
    document.getElementById("b"+i+"letter"+j).innerHTML="S";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addD() {
    document.getElementById("b"+i+"letter"+j).innerHTML="D";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addF() {
    document.getElementById("b"+i+"letter"+j).innerHTML="F";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addT() {
    document.getElementById("b"+i+"letter"+j).innerHTML="T";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addG() {
    document.getElementById("b"+i+"letter"+j).innerHTML="G";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addH() {
    document.getElementById("b"+i+"letter"+j).innerHTML="H";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addJ() {
    document.getElementById("b"+i+"letter"+j).innerHTML="J";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addK() {
    document.getElementById("b"+i+"letter"+j).innerHTML="K";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addL() {
    document.getElementById("b"+i+"letter"+j).innerHTML="L";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addZ() {
    document.getElementById("b"+i+"letter"+j).innerHTML="Z";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addX() {
    document.getElementById("b"+i+"letter"+j).innerHTML="X";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addC() {
    document.getElementById("b"+i+"letter"+j).innerHTML="C";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addV() {
    document.getElementById("b"+i+"letter"+j).innerHTML="V";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addB() {
    document.getElementById("b"+i+"letter"+j).innerHTML="B";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addN() {
    document.getElementById("b"+i+"letter"+j).innerHTML="N";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function addM() {
    document.getElementById("b"+i+"letter"+j).innerHTML="M";
    document.getElementById("b"+i+"letter"+j).style.color="black";
    j++;
}
function deletekey() {
    if(document.getElementById("b"+i+"letter"+j).style.color="gray") {
        document.getElementById("b"+i+"letter"+j).innerHTML="";   
    }
    else if(j>=1 || j<=5) {
        j--;
        document.getElementById("b"+i+"letter"+j).innerHTML="";   
    }
}
function addEnter() {
    console.log(j);
    var s=0;
    var d=1;
    for( d=1;d<=5;d++) {
        if(document.getElementById("b"+i+"letter"+d).innerHTML=="") {
            s=1;
        }
        else {
            document.getElementById("b"+i+"letter"+d).style.color="black";
        }
    }
    console.log(s);
    if(s==0) {
        i++;
        j=1;
        document.getElementById("b"+i+"letter1").style.background="white";
        document.getElementById("b"+i+"letter2").style.background="white";
        document.getElementById("b"+i+"letter3").style.background="white";
        document.getElementById("b"+i+"letter4").style.background="white";
        document.getElementById("b"+i+"letter5").style.background="white";
    }
}
function  jEqual1() {
    j=1;
    document.getElementById("b"+i+"letter"+j).style.color="gray";
}
function  jEqual2() {
    j=2;
    document.getElementById("b"+i+"letter"+j).style.color="gray";
}
function  jEqual3() {
    j=3;
    document.getElementById("b"+i+"letter"+j).style.color="gray";
}
function  jEqual4() {
    j=4;
    document.getElementById("b"+i+"letter"+j).style.color="gray";
}
function  jEqual5() {
    j=5;
    document.getElementById("b"+i+"letter"+j).style.color="gray";
}