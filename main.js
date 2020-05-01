var number;

//For additive counts
addCount = () => {
    var numbers = document.getElementById('num').value;
    number = Number(numbers)
    numbers = document.getElementById('num').value = number += 1
    if (numbers > 0) {
        document.getElementById('num').style.color = 'green'
    }
}

//For subtractive counts
lowerCount = () => {
    var numbers = document.getElementById('num').value;
    number = Number(numbers)
    numbers = document.getElementById('num').value = number -= 1
    if (numbers < 0) {
        document.getElementById('num').style.color = 'red'
    }
}