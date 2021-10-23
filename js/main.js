			
			stop = false;

			document.addEventListener('click', function(e){
				if(stop == false){
				right = player.style.getPropertyValue('left');
				right = Number(right.substring(0, right.length - 2)) + 10;
				player.style.setProperty('left', right + 'px');
				}
				else{
				document.getElementById('status').innerHTML = 'STOP, YOU DIED! <br/> Ai facut: ' + right + ' pasi';
				document.getElementById('status').style.color = '#FFFFFF';

				document.body.style.background = "#FF0000";	
				// Reload game if you die - after 2 seconds
				setInterval(function(){location.reload()}, 3000);
				}
			});

			setInterval(function(){ 
			doll = document.getElementById('doll');  
			walk = document.getElementById('status');  
			
			doll.classList.toggle('face'); 
			walk.classList.toggle('show'); 
			
			stop = !stop;

			},4500);