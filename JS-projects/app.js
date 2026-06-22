// // tasbiix application

// let tasbiixCount=0
// let countEl=document.getElementById('count-el')


// function start(){
//     tasbiixCount+=1
//     countEl.innerText=tasbiixCount
// }

// function reset(){
//     countEl.innerText=0
//     tasbiixCount=0

// }

// age calculator

// let ageEl=document.getElementById('age')
// let okEl=document.getElementById('ok-el')

// function calculateAge(){
//     let newAge=ageEl.value *12
//     okEl.innerText='your are:  ' + newAge + ' months old.'
// }
// calculateAge()

// creating array

// let fruits=[]
// // let saveEl=document.getElementById('save')

// function save(){
    
//       let fruitsInput=document.getElementById('fruits').value.trim();
//       if(fruitsInput===''){
//            console.log('please enter a fruit')
//            return;
//       }

//       fruits.push(fruitsInput)
//       console.log(fruits);
    
//       document.getElementById('fruits').value =''

// }

// save()

// number collector program

let numbers=[]

function save(){
    let number=document.getElementById('number').value.trim();
    if (number==='') {
        console.log('enter a number')
        return;
        
    }
    numbers.push(number)
    console.log(numbers)
    document.getElementById('number').value='';
}
save()



