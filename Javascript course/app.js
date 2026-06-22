// funtions

// function logObjetct(arr){
//     arr.forEach(item => {
//         console.log(item)
//     })
// }
// const myData=[
//     {
//         id:1,
//         name:'cali'
//     },
//     {
//         id:2,
//         name:'faadumo'
//     }
// ]

// console.log(logObjetct(myData))

// let countries=[
//     {
//         name:'masar',
//         qaarada:'afrika'
//     },
//     {
//         name:'somalia',
//         qaarada:'afrika'
//     },
//     {
//         name:'turkey',
//         qaarada:'asia'
//     },
//     {
//         name:'sacuudi',
//         qaarada:'asia'
//     },
//     {
//         name:'marooko',
//         qaarada:'afrika'
//     }
// ]

// console.log(countries.length)
// console.log(countries[0]);

// countries.forEach(country => {country.name 
    
//  console.log(country);   

// }
// )

// passanger counter app

let count=0
let countEl=document.getElementById('count-el')

let saveEl=document.getElementById('save-el')
console.log(saveEl);

let resetEl=document.getElementById('reset-el')



function increment(){
    
    count+=1
    countEl.innerText=count
}
increment()

function save(){
    let countStr=count + ' - '
    saveEl.innerText+=countStr
    countEl.innerText=0
    count=0
    // console.log(count)
}
// save()

function reset(){
   count=0
   countEl.innerText=count

}
reset()





