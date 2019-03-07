

/*
@author:Arron_liu
@description: this is a simple js script for the web app , which is about face recognization and music producting.

 */




/*
Left Show
*********Start******
 */
var Left = document.getElementById("Left_bar");
var left = document.getElementById("left_bar");
function left_show()
{
	
	Left.style.display = "block";
	left.style.left="0px";
}

function left_hide()
{
	Left.style.display = "none";
	left.style.left="-250px";
}
/*
*********End***
 */


/*
left generation

*******Start*******
 */
var left_list = document.getElementsByClassName("board");
var left_length = left_list.length;
var left_list_box = document.getElementById("left_list_box");
for(var i = 0; i < left_length; i++)
{
	left_list_box.innerHTML += "<div class='left-list-node' onclick='main_show("+i+")'><div class='"+left_list[i].childNodes[1].childNodes[1].getAttribute("class")+"'></div><div class='title left-list-node-title'>"+left_list[i].childNodes[1].childNodes[3].innerHTML+"</div></div>"; 
}


var default_num = 0;
function main_show(num)
{
	left_list[default_num].style.display="none";
	left_list[num].style.display = "block";
	default_num = num;
	left_hide();
}
/*

left generation
*********End************
 */


/*
Expandable 
*******Starting**********
 */
function expand(top)
{
	var next = top.nextElementSibling;
	if(! next.getAttribute("class")=="expand-board") return;
	if(top.getAttribute("expand")==0)
	{
		next.style.height = next.getAttribute("param")+"px";
		top.setAttribute("expand",1);
	}
	else
	{
		next.style.height = "0px";
		top.setAttribute("expand", 0);
	}
}

/*
Expandable 
*******End**********
 */