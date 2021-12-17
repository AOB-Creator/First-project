navigator.getBattery().then(baterry => {console.log(`${baterry.level*100}%`, baterry.dischargingTime/60);})

function SayHello(name){
    if(name===undefined){
        return 'Hi there'
    }
    return undefined
}

console.log(SayHello());
const arr = [1,2,3]
function add(){
    arr[3]=4;
    console.log(arr);
}
add();

const strings = 'Hello Javas';
const newstring = strings.padEnd(100, "!");
console.log(newstring);

const travel = {country: "MEXICO", city: "Mexico"};
const newobject = {...travel};
const clone3 = Object.assign({}, travel);
console.log(clone3);




    







