// age 

// let myAge=30;
// console.log('may age is ' + myAge);

// i create points inisilize 50 increas 40 , decrease 30, increase 80

// let points=50;
// console.log(points);

// points+=40;
// console.log(points);
// points-=30;
// console.log(points);
// points+=80;
// console.log(points);

// function that takes object and returns

// function displayObject(a){
//     return a
// }
// const students=[
//     {
//         name:'alex',
//         age:34

//     },
//     {
//         name:'john',
//         age:23
//     }

// ]
//  const studentNames=students.map( (student)=> {
   
//   return student.name
//  })

// console.log(displayObject(studentNames))



// const students = {
//     name: 'alex',
//     age: 34
// };   

// // 1. Select the HTML elements
// let nameInput = document.getElementById('name'); // Renamed for clarity
// let display = document.getElementById('student');

// function search() {
//     // 2. Get the clean text from the input and convert to lowercase
//     let inputValue = nameInput.value.trim().toLowerCase();
    
//     // 3. Compare the text value to the student's name
//     if (inputValue === students.name.toLowerCase()) {
//         display.innerText = `Found: ${students.name} (Age: ${students.age})`;
//     } else {
//         display.innerText = "Student not found";
//     }
// }


// Why These Changes MatternameInput.value: The document.getElementById('name') command selects the entire <input> box object. To see what a user typed, you must explicitly look at its .value property.inputValue === students.name: By saving the trimmed string to inputValue, your if statement now compares text to text rather than an HTML element to text..toLowerCase(): Users might type "Alex" or "ALEX". Converting both the input and your data to lowercase ensures the search works regardless of capitalization.To help you get this fully working in your project, let me know:How are you triggering the search? Do you need help setting up a button click event listener or an oninput listener?Are you planning to search through a list (array) of multiple students later, or just this single students object?Would you like the corresponding HTML structure that matches this script perfectly?You said: what about if we want more studentsTo handle multiple students, you need to change your single students object into an array of objects. Then, you use the find() method to search through that list.1. The Updated JavaScriptHere is how to update your logic to handle an endless list of students:javascript// 1. Change to an array of student objects



// const students = [
//     { name: 'alex', age: 34 },
//     { name: 'john', age: 23 },
//     { name: 'mary', age: 28 }
// ];   

// let nameInput = document.getElementById('name');
// let display = document.getElementById('student');

// function search() {
//     let inputValue = nameInput.value.trim().toLowerCase();
    
//     // 2. Use .find() to loop through the array and look for a match
//     let foundStudent = students.find((student) => {
//         return student.name.toLowerCase() === inputValue;
//     });

//     // 3. Check if a student was actually found
//     if (foundStudent) {
//         display.innerText = `Found: ${foundStudent.name} (Age: ${foundStudent.age})`;
//     } else {
//         display.innerText = "Student not found";
//     }
// }


// Use code with caution.2. How the .find() Method WorksIt automatically loops through your students array one by one.The variable student represents the current object in the loop.As soon as it finds an object where the name matches your input, it stops searching and returns that entire object.If no names match, it returns undefined, which triggers your else block.3. The Matching HTML StructureTo make sure your code runs when you type or click, ensure your HTML looks like this:html<input type="text" id="name" placeholder="Type student name...">
// <!-- Trigger the search function when clicking the button -->
// <button onclick="search()">Search</button> 

// <div id="student"></div>
// Use code with caution.To tailor this specifically to your app, let me know:Do you want the search to show multiple results if two students share the same name (like two different "Alex"s)?Would you prefer the search to update instantly while you type instead of clicking a button?Do you need to display the entire list of students on the page by default before the user even searches?You said: yesSince you want all three features, we need to update the code to use .filter() instead of .find(). This allows us to catch multiple students with the same name. We will also add an event listener so the results update instantly while you type.1. The HTML SetupMake sure your HTML includes the input box and a container to display the initial list and search results.html<!-- The input field (No button needed anymore) -->
// <input type="text" id="name" placeholder="Type student name...">

// <!-- This container will show our results dynamically -->
// <div id="student-list"></div>
// Use code with caution.2. The JavaScript Codejavascript// Array with duplicate names to test multiple results



// const students = [
//     { name: 'alex', age: 34 },
//     { name: 'john', age: 23 },
//     { name: 'alex', age: 19 },
//     { name: 'mary', age: 28 }
// ];   

// // Select elements
// const nameInput = document.getElementById('name');
// const displayContainer = document.getElementById('student-list');

// // Function to render any list of students to the HTML
// function displayStudents(listOfStudents) {
//     // Clear the container first
//     displayContainer.innerHTML = '';

//     if (listOfStudents.length === 0) {
//         displayContainer.innerHTML = '<p>No students found</p>';
//         return;
//     }

//     // Loop through the list and generate HTML for each student
//     listOfStudents.forEach((student) => {
//         const studentDiv = document.createElement('div');
//         studentDiv.innerText = `👤 ${student.name} (Age: ${student.age})`;
//         displayContainer.appendChild(studentDiv);
//     });
// }

// // Function to filter students based on input
// function handleSearch() {
//     const inputValue = nameInput.value.trim().toLowerCase();

//     // If the input is empty, show the entire list again
//     if (inputValue === '') {
//         displayStudents(students);
//         return;
//     }

//     // .filter() finds ALL matches, not just the first one
//     const matchedStudents = students.filter((student) => {
//         return student.name.toLowerCase().includes(inputValue);
//     });

//     // Display only the matched results
//     displayStudents(matchedStudents);
// }

// // --- EVENT LISTENERS ---

// // 1. Show all students immediately when the page loads
// displayStudents(students);

// // 2. Run handleSearch instantly whenever the user types
// nameInput.addEventListener('input', handleSearch);
// Use code with caution.Key Technical Changesstudents.filter(): Unlike .find(), which stops at the first match, .filter() checks every item and returns a brand-new array containing all matching objects (e.g., both "alex" objects)..includes(): Instead of checking for an exact match (===), .includes() allows partial matching. If you type "al", it will instantly show "alex".addEventListener('input', ...): This triggers your code the exact millisecond a character is typed, deleted, or pasted into the input field.If you want to take this layout a step further, let me know:Do you want to add a feature to delete a student from the list?Do you need an input form to add new students to the array dynamically?Would you like to style the results using CSS grid or flexbox?





// const students={
    
//         name:'alex',
//         age:34
// }   

// let nameInput=document.getElementById('name');
// let display=document.getElementById('student');

// function search(){
//     let inputValue=nameInput.value.trim().toLowerCase()
//     if(inputValue === students.name.toLowerCase()){
//         display.innerText=`found: ${students.name}`

//     }else{
//         display.innerText=`not found`
//     }

// }

// search()
// console.log(students);
// console.log(name);
// console.log(display);
