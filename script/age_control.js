let age = 61

if (age >= 18 && age <=60){
    alert('You are eligable!')
}else if (age < 18){
    alert('You are not eligable!')
    document.querySelector('body').innerText = ''
}else {
    alert('You are too old to access')
    document.querySelector('body').innerText = ''
}