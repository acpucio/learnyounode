//console.log(process.argv);

var arr = process.argv;

arr.shift();
arr.shift();

function sumArray(arr){
    var sum = 0;
    arr.forEach(function(e){
        sum = sum + Number(e);    
    })
    return sum;
}

var total = sumArray(arr)

console.log(total);
