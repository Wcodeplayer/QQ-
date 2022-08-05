	
	window.onload=function(){
		// 去除广告
		var fixed=document.getElementById('fixed');
		var button=document.getElementById('button')
		button.onclick=function(){
			fixed.style.left=fixed.offsetLeft+1000+"px";
		}
			
			
		text.oninput=function(){
			var fs=document.getElementById("fs");
			var text=document.getElementById("text");
			fs.innerHTML=300-text.value.length;
		}

			

		

	}