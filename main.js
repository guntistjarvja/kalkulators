function ievietot(vertiba) {
    document.forma.RadaTekstu.value=document.forma.RadaTekstu.value+vertiba;
  }
  
  function attirit() {
    document.forma.RadaTekstu.value="";
  }
  
  function dzest(){
    var x=document.forma.RadaTekstu.value;
    document.forma.RadaTekstu.value = x.substring(0,x.length-1);
  
  }
  
  function vienads(){
    var x=document.forma.RadaTekstu.value;
    if(x){
      document.forma.RadaTekstu.value=eval(x);
    }
  }