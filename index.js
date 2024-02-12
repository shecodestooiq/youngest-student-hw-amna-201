var students=[
    {name:'Amna',age:23},
    {name:'Loly',age:22},
    {name:'Sura',age:23},
    {name:'Nona',age:16},

];

var minuma= Math.min(...students.map(b=>b.age));
var minName= students.find(students=>students.age==minuma);

function showYoungestStudent(students) {

    
    console.log('the Name of the youngest student: ');
    console.log(minName.name);
    
 }
 showYoungestStudent();

module.exports = showYoungestStudent;
