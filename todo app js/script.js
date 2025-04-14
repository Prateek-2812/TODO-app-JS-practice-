 var ctr=1;
 function del(ele){
    ele.parentNode.remove();

 }
 function edit(prev,newD){
    document.getElementById(prev).innerHTML=document.getElementById(newD).value
 }
 function add(task){
    const el=document.createElement("div");
    const val=document.getElementById(task).value; 
    el.className="tasks";

    el.innerHTML = "<h2>Task " + ctr + "</h2>" + 
    "<h3 id='" + ctr + "'>" + val + "</h3>" +
    "<br>" + 
    "<input placeholder='Edit message here' id='task" + ctr + "'>" + 
    "<button onclick=\"edit('" + ctr + "', 'task" + ctr + "')\">Edit</button>" +
    "<button onclick='del(this)'>Delete</button>";
    ctr = ctr + 1;



    document.querySelector("#mew").appendChild(el);
 }