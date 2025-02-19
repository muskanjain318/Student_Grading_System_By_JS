console.log(`Student grading system`);

const student = [{
    name: "Muskan",
    rollNo: 10,
    marks: 100
},

{
    name: "Tanvi",
    rollNo: 15,
    marks: 20
},

{
    name: "prerna",
    rollNo: 16,
    marks: 1200
}


]
// To print Object
console.log(student);

let totalMarks = 0;
for (let index = 0; index < student.length; index++) {
    totalMarks += student[index].marks;
    // console.log(totalMarks);
    
}
let avgMarks = totalMarks/student.length;
console.log(avgMarks);

// find highest marks

let highMarks = student[0].marks;
// console.log(highMarks);
for (let index = 1; index < student.length; index++) {
    const currentMarksValue = student[index].marks;
    // console.log(currentMarksValue);
    
    if (highMarks < currentMarksValue ){
        highMarks = currentMarksValue;
        // console.log(`current highest marks ${highMarks} highMarks`);
        
    }
}
console.log(`highest marks is ${highMarks}`);



// find minimum marks
let lowMarks = student[0].marks;
for (let index = 1; index < student.length; index++) {
    const lowCurrentValue = student[index].marks;
    // console.log(lowCurrentValue);
    if(lowMarks > lowCurrentValue){
        lowMarks = lowCurrentValue;
    }
    
}
console.log(`lowest Student marks is ${lowMarks}`);


// display studnet who passed above 50

let studentCount = 0;
for (let index = 0; index < student.length; index++) {
    
    if(student[index].marks > 50){
        studentCount++;
    
    }
    
}
console.log(`Total studnet pass ${studentCount}`);




