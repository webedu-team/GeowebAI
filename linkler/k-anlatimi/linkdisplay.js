function ac(ne)
{

document.getElementById("display-part2").style.visibility="visible";
switch(ne)
{
    case '1':
  
            document.getElementById("display-part2").innerHTML="<iframe src='5k.html' width=1035 height=380></iframe>"; 
            
            break;
    case '2':
                document.getElementById("display-part2").innerHTML="<iframe src='6k.html'width=1035 height=380 ></iframe>"; 
                
            break;
    case '3':
                document.getElementById("display-part2").innerHTML="<iframe src='7k.html' width=1035 height=380 ></iframe>"; 
                
    break;   
    case '4':
        document.getElementById("display-part2").innerHTML="<iframe src='8k.html' width=1035 height=380 ></iframe>"; 
        
    break;    
}
}