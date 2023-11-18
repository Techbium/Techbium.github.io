let my= 0

document.getElementById("incr").onclick =function() {
  my+=1
  document.getElementById("counter").innerText = my;
  }
  document.getElementById("Reset").onclick =function() {

    my= 0
 document.getElementById("counter").innerHTML = my;
  }

  document.getElementById("decr").onclick =function() {
 my= my-1
 document.getElementById("counter").innerHTML = my;
  }

  let f;
document.getElementById("R").onclick =function() {

  f = Math.floor(Math.random() * 100) +1;
   document.getElementById("Ra").innerText = f;

}