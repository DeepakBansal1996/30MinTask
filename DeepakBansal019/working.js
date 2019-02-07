
	        var getURL = function getURL(parm){
            var Pageurl = window.location.search.substring(1),
            URLVariables = Pageurl.split('&'),
                ParameterName, i;
            
        for(i=0; i<URLVariables.length;i++){
            ParameterName = URLVariables[i].split('=');
            
            if(ParameterName[0] == parm){
                return ParameterName[1]==undefined ? true : decodeURIComponent(ParameterName[1]);
            }
        }
        };
        var usr=getURL('id');

var unm=document.getElementById('h2')
var scr=document.getElementById('h3')
var nscr=document.getElementById('h4')

var count=0;
var temp=null;
function getName()
{
	$.ajax({ 
          url : "http://localhost:51910/api/users/"+usr,
          type : 'GET',
          datatype : 'json',
	      success : function(res){
	      	temp=res;
	      	unm.innerHTML="welcome @"+res.userName+" (as a 'X')";
	      	scr.innerHTML="score is = "+res.score;
	      }
	   });
}

function displayWinner(b1,b2,b3){
	 b1.classList.add("win");
     b2.classList.add("win");
     b3.classList.add("win");
	if(b1.innerHTML == 'X'){
		count=count+10;
	}

	else{
		count=count-5;
	}
   	put(count);
   	
	t.innerHTML=b1.innerHTML+" Won The Game";
}

function put(tt){
	temp.score=temp.score+tt;
	$.ajax({ 
         url : "http://localhost:51910/api/users/"+usr,
         type : 'PUT',
         datatype : 'json',
         data: temp,
         success : function(res){
         	         
                           }
                });
}


var t=document.getElementById('h')


	function takeWinner() {
var a1=document.getElementById('b1'),
 a2=document.getElementById('b2'),
 a3=document.getElementById('b3'),
 a4=document.getElementById('b4'),
 a5=document.getElementById('b5'),
 a6=document.getElementById('b6'),
 a7=document.getElementById('b7'),
 a8=document.getElementById('b8'),
 a9=document.getElementById('b9');

if(a1.innerHTML !== "" && a1.innerHTML===a2.innerHTML && a1.innerHTML===a3.innerHTML)
   displayWinner(a1,a2,a3);

else if(a4.innerHTML !== "" && a4.innerHTML===a5.innerHTML && a4.innerHTML===a6.innerHTML)
   displayWinner(a4,a5,a6);

else if(a7.innerHTML !== "" && a7.innerHTML===a8.innerHTML && a7.innerHTML===a9.innerHTML)
   displayWinner(a7,a8,a9);

else if(a1.innerHtTML !== "" && a1.innerHTML===a4.innerHTML && a1.innerHTML===a7.innerHTML)
   displayWinner(a1,a4,a7);

else if(a2.innerHTML !== "" && a2.innerHTML===a5.innerHTML && a2.innerHTML===a8.innerHTML)
   displayWinner(a2,a5,a8);

else if(a3.innerHTML !== "" && a3.innerHTML===a6.innerHTML && a3.innerHTML===a9.innerHTML)
 displayWinner(a3,a6,a9);

else if(a1.innerHTML !== "" && a1.innerHTML===a5.innerHTML && a1.innerHTML===a9.innerHTML)
   displayWinner(a1,a5,a9);

else if(a3.innerHTML !== "" && a3.innerHTML===a5.innerHTML && a3.innerHTML===a7.innerHTML)
   displayWinner(a3,a5,a7);

}


var boxs=document.getElementsByTagName("button"),X_or_O = 0;

// console.log(boxs);
for(var i=0;i<boxs.length;i++){
	
	boxs[i].addEventListener('click',function(){
    if(this.innerHTML !== "X" && this.innerHTML !== "O"){

		if((X_or_O%2)==0){

		this.innerHTML="X";
		t.innerHTML="O turn Now";
		takeWinner();
		X_or_O=X_or_O+1;
	}
	else{
		
		this.innerHTML="O";
		t.innerHTML="X turn Now";
		takeWinner()
		X_or_O=X_or_O+1;

	}
   }
	});
}

function reset(){
	for(var i=0;i<boxs.length;i++){
		boxs[i].classList.remove("win");
	
		
		t.innerHTML="play Again"
	}
}