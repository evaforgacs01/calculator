const calcs = {
    '+': function(a,b) {return a+b},
    '-': function(a,b) {return a-b},
    '/': function(a,b) {return a/b},
    '*': function(a,b) {return a*b},
    

} 
const signsOp = ['+'];
for (let i = 0; i < signsOp.length; i+= ) {
    
    console.log(calcs[signsOp[i]](10,20));

};

// document.querySelector('equal').addEventListener('click', () => {
//     console.log(event);
// })

const calcString = '';
calcString += '23+24, 45-25';
const nums = [];
const acceptableSigns = ['+','-','/','*'];
const signs =[];

let num = '23';
for (let i = 0; i < calcString.length; i+=1) {
    if (acceptableSigns.indexOf(calcString[i]) !== -1 ) {
        num += calcString[i];
    }
    else{
        nums.push(parseFloat(num));
        num = '';
        signs.push(calcString[i])
    }
}

