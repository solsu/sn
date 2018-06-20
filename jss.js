/*
* @Author: lisheng
* @Date:   2018-06-08 11:52:03
* @Last Modified by:   lisheng
* @Last Modified time: 2018-06-15 08:20:45
*/
window.onload=function(){
	let bannerzuo=document.getElementsByClassName("bannerzuo")[0];
	let li=bannerzuo.getElementsByClassName("ll");
	let cela=document.getElementsByClassName("cela");
	let top=document.getElementsByClassName("top")[0];
	let xiala=document.getElementsByClassName("xiala")[0];
	let gouwu=document.getElementsByClassName("gouwu")[0];
	let xiala2=document.getElementsByClassName("xiala2")[0];
	let xiala3=document.getElementsByClassName("xiala3")[0];
	let shouji=document.getElementsByClassName("shouji")[0];
	let xiala5=document.getElementsByClassName("xiala5")[0];
	let kf=document.getElementsByClassName("kf")[0];
	let xiala6=document.getElementsByClassName("xiala6")[0];
	let yg=document.getElementsByClassName("yg")[0];

	for(let i=0;i<li.length;i++){
		li[i].onmouseenter=function(){
			for(let j=0;j<li.length;j++){
				cela[j].style.display="none";
			}
			cela[i].style.display="block";
			cela[i].style.border="1px solid #ccc";
			cela[i].style.borderLeft="0";
		}
		li[i].onmouseleave=function(){
			cela[i].style.display="none";
		}
	}

	top.onmouseenter=function(){
		xiala.style.height="240px";
		xiala.style.border="1px solid #ccc";
		xiala.style.borderTop="0";
	}
	top.onmouseleave=function(){
		xiala.style.height="0";
		xiala.style.border="0";
	}
	gouwu.onmouseenter=function(){
		xiala2.style.height="400px";
		// xiala5.style.border="1px solid #ccc";
		xiala5.style.borderTop="0";
	}
	gouwu.onmouseleave=function(){
		xiala2.style.height="0";
	}
	shouji.onmouseenter=function(){
		xiala3.style.height="220px";
		// xiala5.style.border="1px solid #ccc";
		xiala5.style.borderTop="0";
	}
	shouji.onmouseleave=function(){
		xiala3.style.height="0";
	}
	kf.onmouseenter=function(){
		xiala5.style.height="120px";
		xiala5.style.border="1px solid #ccc";
		xiala5.style.borderTop="0";
	}
	kf.onmouseleave=function(){
		xiala5.style.height=0;
		xiala5.style.border="0";
	}
	yg.onmouseenter=function(){
		xiala6.style.height="164px";
		xiala6.style.border="1px solid #ccc";
		xiala6.style.borderTop="0";
	}
	yg.onmouseleave=function(){
		xiala6.style.height=0;
		xiala6.style.border="0";
	}
	let bannerzhong=document.querySelector(".bannerzhong");
	let lis=document.querySelectorAll(".bannerzhong li");
	let btn=document.querySelectorAll(".btn div");
	let anniuz=document.querySelector(".anniuzz");
	let anniuy=document.querySelector(".anniuyy");
	let index=0;
	lis[0].style.zIndex=10;
	btn[0].className="hot";
	let t=setInterval(move,2000);

	for(let l=0;l<btn.length;l++){
		btn[l].onclick=function(){
			lis.forEach(function(elements){
			elements.style.zIndex=5;
		})
			btn.forEach(function(elements){
			elements.className="";
		})
			lis[l].style.zIndex=20;
			btn[l].className="hot";
			index=l;
		}
	}
	anniuz.onclick=function(){
		movel();
	}
	anniuy.onclick=function(){
		move();
	}
	bannerzhong.onmouseenter=function(){
		clearInterval(t);
	}
	bannerzhong.onmouseleave=function(){
		t=setInterval(move,2000);
	}
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		lis.forEach(function(elements,index,obj){
			elements.style.zIndex=5;
		})
		btn.forEach(function(elements,index,obj){
			elements.className="";
		})
		lis[index].style.zIndex=10;
		btn[index].className="hot";
	}
	function movel(){
		index--;
		if(index<0){
			index=lis.length-1;
		}
		lis.forEach(function(elements,index,obj){
			elements.style.zIndex=5;
		})
		btn.forEach(function(elements,index,obj){
			elements.className="";
		})
		lis[index].style.zIndex=10;
		btn[index].className="hot";
	}
	let h=innerHeight;
	let seth=document.querySelector(".seth");
	window.onscroll=function(){
		let t=document.body.scrollTop||document.documentElement.scrollTop;
		if(t+h>=2000){
			console.log(t+h)
			seth.style.height="50px";
		}
		else{
			console.log(t)
			seth.style.height="0"
		}
	}
	
}