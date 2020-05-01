var number;

addCount =()=>{
var numbers = document.getElementById('num').value ;
number = Number(numbers)
numbers = document.getElementById('num').value =number +=1
if(numbers > 0){
    document.getElementById('num').style.color = 'green'
}
}
lowerCount =()=>{
var numbers = document.getElementById('num').value ;
number = Number(numbers)
numbers = document.getElementById('num').value =number -=1 
if (numbers < 0) {
    document.getElementById('num').style.color = 'red'
}
}