let btn = document.getElementById('toggleBtn');
let bulb = document.getElementById('bulb');
let mq = document.getElementById('mq');

//EVENTS
btn.addEventListener('click' , toggleBulb);
function toggleBulb(){
    if(btn.textContent.includes('on') && mq.textContent.includes('on')){
        bulb.src = "on.png";
        btn.textContent = "Turn off";
        mq.textContent = "Turn off";
        mq.style.boxShadow = '3px 3px 4px 4px green';
        btn.className = "btn btn-outline-success";
        bulb.style.boxShadow = '3px 3px 4px 4px green';
        btn.style.boxShadow = '3px 3px 4px 4px green'
    }
    else{
        bulb.src = "offf.png";
        btn.textContent = "Turn on";
        mq.textContent = "Turn on";
        mq.style.boxShadow = '3px 3px 4px 4px red';
        mq.style.color = "red";
        btn.className = "btn btn-outline-danger";
        bulb.style.boxShadow = '3px 3px 4px 4px red';
        btn.style.boxShadow = '3px 3px 4px 4px red' 
    }
}
