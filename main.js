console.log("button works");
let msg ="opened";
let current_color="yellow";
let counter_state=0;
function increaseCounter() {
    counter_state+=1;
    document.getElementById('count').innerHTML =counter_state;
}
function decreaseCounter() {

    if(counter_state==0) {
    
    }
    else{
        counter_state-=1;
    }
    document.getElementById('count').innerHTML =counter_state;

}
function resetCounter() {
    counter_state=0;
    document.getElementById('count').innerHTML =counter_state;

}
function buttonEvent() {
    console.log(msg);
    // document.getElementById('heading').style.color ='black';
    if(current_color=="yellow")
    {
        document.getElementById('heading').style.color ='black';
        current_color="black";
    }
    else
    {
        document.getElementById('heading').style.color ='yellow';
        current_color="yellow";
}
}
