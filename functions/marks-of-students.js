//we are givenn an array of marks of students. Filter out the students who have scored more than 90 marks.

let marksOfStudents=[95,45,67,89,100,78,80,92,93,99];

let toppers=marksOfStudents.filter((marks)=>{
    return marks>90;
})

console.log(`The marks of students more than 90 are ${toppers}`);