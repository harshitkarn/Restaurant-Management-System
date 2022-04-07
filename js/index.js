///index.html
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  if(count==0)document.getElementById('noitem').innerHTML='<img src="img/noitem.svg"><h3>Your cart is empty.</h3><h4>Add some delicious food available on our menu to checkout.</h4>';
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function clicke(clicked_id){
    count++;
    var l=clicked_id.parentNode.previousElementSibling.textContent;
    var j = document.createElement('div');
    j.setAttribute("id", "a"+clicked_id.parentNode.id);
    j.setAttribute("class", "cartdiv");
    j.innerHTML='<div class="cartdivin">'+l.substring(0,l.length-5)+'</div><div class="cartdivinb"><span>Qty: 1</span><span class="cartpr">'+l.substring(l.length-5)+'</span></div>';
    var addressContainer = document.getElementById("mySidenav");
    addressContainer.appendChild(j);
    clicked_id.parentNode.innerHTML='<button class="added" onclick="decr(this)">-</button><span id="qty" class="qty">1</span><button class="added" onclick="inc(this)">+</button>';
    var aa=document.querySelectorAll(".cartpr");
    var sum=0;
    for(var i=0;i<aa.length;i++)
    {
      var temp=aa[i].textContent;
      sum+=parseInt(temp.substring(temp.length-3));
    }
    document.getElementsByClassName("place")[0].innerHTML="Place order &#8377 "+sum;
    
    if(count==1){
      document.getElementById('items').innerHTML=count+" item";
    document.getElementById('noitem').innerHTML="";
    document.getElementsByClassName("place")[0].setAttribute("href","src/checkout.html");
    document.getElementsByClassName("place")[0].setAttribute("onclick","sendval()");}
    else document.getElementById('items').innerHTML=count+" items";
    //console.log(j.outerHTML);
}
function inc(clicked_id){
  var val=parseInt(clicked_id.previousElementSibling.textContent);  
  if(val<5){
    count++;
    var l=clicked_id.parentNode.previousElementSibling.lastChild.textContent;
    var l=parseInt(l.substring(l.length-3));
    var a="a"+clicked_id.parentNode.id;
    val++;
    clicked_id.previousElementSibling.innerHTML = val;
    document.getElementById(a).lastChild.firstChild.innerHTML="Qty: "+val;
    document.getElementById(a).lastChild.lastChild.innerHTML="&#8377 "+l*val;
  
    var aa=document.querySelectorAll(".cartpr");
    var sum=0;
    for(var i=0;i<aa.length;i++)
    {
      var temp=aa[i].textContent;
      sum+=parseInt(temp.substring(temp.length-3));
    }
    document.getElementsByClassName("place")[0].innerHTML="Place order &#8377 "+sum;
    document.getElementById('items').innerHTML=count+" items";
  }
  console.log(count);
}
function decr(clicked_id){
  count--;
    var val=parseInt(clicked_id.nextElementSibling.textContent);
    var a="a"+clicked_id.parentNode.id;
    if(val==1){
      document.getElementById('mySidenav').removeChild(document.getElementById(a));
      clicked_id.parentNode.innerHTML='<button class="add" onclick="clicke(this)">Add</button>';
    
  }
    if(val>1){
    var l=clicked_id.parentNode.previousElementSibling.lastChild.textContent;
    var l=parseInt(l.substring(l.length-3));
    val--;
    clicked_id.nextElementSibling.innerHTML = val;
    document.getElementById(a).lastChild.firstChild.innerHTML="Qty: "+val;
    document.getElementById(a).lastChild.lastChild.innerHTML="&#8377 "+l*val;}

    var aa=document.querySelectorAll(".cartpr");
    var sum=0;
    for(var i=0;i<aa.length;i++)
    {
      var temp=aa[i].textContent;
      sum+=parseInt(temp.substring(temp.length-3));
    }
    document.getElementsByClassName("place")[0].innerHTML="Place order &#8377 "+sum;
    if(count==0){document.getElementById('items').innerHTML="";
    document.getElementsByClassName("place")[0].innerHTML="Browse Food"
    document.getElementsByClassName("place")[0].setAttribute("href","#rice");
    document.getElementsByClassName("place")[0].setAttribute("onclick","closeNav()");
    document.getElementById('noitem').innerHTML='<img src="img/noitem.svg"><h3>Your cart is empty.</h3><h4>Add some delicious food available on our menu to checkout.</h4>';}
    else if(count==1)document.getElementById('items').innerHTML=count+" item";
    else document.getElementById('items').innerHTML=count+" items";
}

function cart(){
var qty1=document.querySelectorAll('.qty');
var i;
for(i=0;i<qty1.length;i++){
var j = document.createElement('div');
j.innerHTML=qty1[i].textContent+qty[i].parentNode.previousElementSibling.textContent;
var addressContainer = document.getElementById("mySidenav");
addressContainer.appendChild(j);
}
}

function sendval1(){
var node=document.getElementById('mySidenav');
var local = localStorage.getItem("html");
if (local != null){
localStorage.removeItem("html");
}
localStorage.setItem("html", node.outerHTML);
}
function sendval(){
    localStorage.clear();
    var node=document.getElementsByClassName('cartdivin');
    for(var i=0;i<node.length;i++){
      var a=node[i].textContent;
      var b=node[i].nextSibling.firstChild.textContent;
      var c=node[i].nextSibling.lastChild.textContent;
      localStorage.setItem(a+" x"+b[b.length-1],c);
    }
    var c=document.getElementsByClassName('place')[0].textContent;
    localStorage.setItem('total',c.substring(c.length-6));
  
  
  }



  //checkout.html//////////////////////
  var s=document.getElementById('itemtotal');
          var j=localStorage.getItem('total').trim();
          if(j[0]=='r'){
            j=j.substring(2,j.length);
            localStorage.setItem('total',j);
          }
          if(!isNaN(j[0])){
            j="&#8377 "+j;
            localStorage.setItem('total',j);
          }
          s.lastChild.innerHTML=j;
          console.log(j.substring(1,j.length))
          var t=document.getElementsByClassName('carto')[0];
          for(const key in localStorage){
            if(!isNaN(key[key.length-1])){
              var a=document.createElement('div');
              a.setAttribute('class','cartino');
              a.innerHTML='<span>'+key+'</span><span>'+localStorage.getItem(key)+'</span>';
              t.insertBefore(a,s);
            }
          
          }
          var q=parseInt(j.substring(1,j.length))+20;
          var r=q*0.05;
          document.getElementById('a').lastChild.innerHTML+=r;
          document.getElementById('c').lastChild.innerHTML+=r/2;
          document.getElementById('b').lastChild.innerHTML+=r/2;
          document.getElementById('total').lastChild.innerHTML+=q+r;

          function checkini(){
            var inp=document.getElementsByTagName('input');
            var p=document.getElementsByClassName('error');
            var city=document.getElementById('city');
            if(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(inp[0].value)){
              if(/^[6-9]\d{9}$/.test(phone.value)){
                if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email.value)){
                  if(/^[a-zA-Z0-9]/.test(inp[3].value)){
                    if(/^[a-zA-Z0-9]/.test(inp[4].value)){
                      localStorage.setItem('gst',r);
                      localStorage.setItem('fintotal',q+r);
                      localStorage.setItem('name',inp[0].value.trim());
                      localStorage.setItem('address',inp[3].value.trim()+', '+inp[4].value.trim()+', Bangalore');
                      window.location.href = "./confirm.php";
                    }
                    else{
                      inp[4].style.marginBottom="0px";
                      inp[4].style.border="1px solid red";
                      p[4].innerHTML="*Please enter valid area name";
                    }
                  }
                  else{
                    inp[3].style.marginBottom="0px";
                    inp[3].style.border="1px solid red";
                     p[3].innerHTML="*Please enter valid house no";
                  }
                }
                else{
                  inp[2].style.marginBottom="0px";
                  inp[2].style.border="1px solid red";
                  p[2].innerHTML="*Please enter valid email";
                }
              }
              else{
                inp[1].style.marginBottom="0px";
                inp[1].style.border="1px solid red";
                p[1].innerHTML="*Please enter valid phone no";
              }
            }
            else{
              inp[0].style.marginBottom="0px";
              inp[0].style.border="1px solid red";
               p[0].innerHTML="*Please enter valid name";
            }   
          }

          function inputchange(clicked_id){
           var id=document.getElementById(clicked_id);
           if(id.style.marginBottom=="0px"){
             var cond=false;
             switch(clicked_id){
               case "name":if(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(id.value)){
                             cond=true;
                           }
                           break;
               case "phone":if(/^[6-9]\d{9}$/.test(id.value)){
                             cond=true;
                           }
                           break;
               case "email":if(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(id.value)){
                             cond=true;
                           }
                           break;
               case "house":
               case "area":if(/^[a-zA-Z0-9]/.test(id.value)){
                             cond=true;
                           }
                           break;
              }
           }
           if(cond==true){
             id.style.margin= '8px 0';
             id.style.border="1px solid #ccc";
             document.getElementById(clicked_id+'err').innerHTML="";
           }
          }

