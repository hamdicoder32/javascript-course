// using reduce

// let users=[
//     {role:'admin', active:true},

//     {role:'student', active:true},
//     {role:'student', active:true},
//     {role:'student', active:true},
//     {role:'student', active:true},

//     {role:'student', active:true},
//     {role:'student', active:true},
//     {role:'student', active:true},
//     {role:'student', active:true},

//     {role:'student', active:true},
//     {role:'student', active:true},
//     {role:'student', active:true},
//     {role:'student', active:true},

//     {role:'teacher', active:true},
//     {role:'teacher', active:true},
//     {role:'teacher', active:true},
// ]

// const countUsers=users.reduce((count, user)=>{
//     count[user.role]=(count[user.role] || 0)+1

//     return count
// },{}
// )
// console.log(countUsers)


// counting how many times each fruit returned.

// let fruits=['apple', 'banana', 'orange', 'banana', 'orange', 'apple', 'orange', 'apple']

// const countFruits=fruits.reduce((count, fruit)=>{
//     count[fruit]=(count[fruit] || 0)+1
//     return count

// }, [])
// console.log(countFruits)

// counting student grades

// let students=[
//     {
//      name:'Ali',
//      grade:'A'
//     },
      
//     {
//       name:'Alex',
//      grade:'A'
//     },
//     {
//       name:'Farah',
//      grade:'B'
//     },
//     {
//      name:'Alex',
//      grade:'C'
//     }
// ]

// const countStudents=students.reduce((count, student)=>{
//     count[student.grade]=(count[student.grade]||0)+1
//     return count
// }, [])
// console.log(countStudents);

// let expense=[
//     {
//         name:'food',
//         amount:34
//     },

//      {
//         name:'interne',
//         amount:56
//     },

//      {
//         name:'pill',
//         amount:345
//     }
// ]

// const totalExpense=expense.reduce((total, sum)=>{
//     // total[sum.amount]
//     return total + sum
// }, 0)
// console.log(totalExpense)


// grade system

// function calculateGrade(student){
//     const average=calculageAverage(student.scores)
//     const letterGrade=getGrade(average)
//     return {
//         name:student.name,
//         grade:letterGrade,
//         average:average
//     }
// }

// function calculageAverage(scores){
//     const totalScores=scores.reduce((total,score)=> total+score,0)
//     return totalScores / scores.length
// }

// function getGrade(average){
//     if(average >= 90) return "A";
//     if(average >= 80) return "B"
//     if(average >= 70) return "C"
//     if(average >= 60) return "D"
//     return "F"
// }

// const student1={
//     name:'Ali',
//     scores:[90,95,99,90,67,78]
// }

// console.log(calculateGrade(student1))