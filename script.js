const cage=document.querySelector(".case");
var curs=[0,0];

cage.addEventListener("dragstart",dragStart);
cage.addEventListener("dragend",dragEnd);

function dragStart(e){
	curs[0]=e.clientX-cage.getBoundingClientRect().left;
	curs[1]=e.clientY-cage.getBoundingClientRect().top;
}

function dragEnd(e){
	cage.style.left=(e.clientX-curs[0])+"px";
	cage.style.top=(e.clientY-curs[1])+"px";
}
