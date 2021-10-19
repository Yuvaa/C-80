var name_of_the_student_array = []; 
function submit(){


    var display_student_array = [];

    for (var j = 1;j <= 4; j++)
    {
        var name_of_the_student = document.getElementById("name_of_the_student_"+j).value;
        console.log(name_of_the_student);
        name_of_the_student_array.push(name_of_the_student);
    }
var length_of_name_of_students_array = name_of_the_student_array.length;
console.log(length_of_name_of_students_array);
console.log(name_of_the_student_array);
for (var k = 0;k <= length_of_name_of_students_array; k++){
    display_student_array.push(name_of_the_student_array [k]);
}

document.getElementById("display_name_with_commas").innerHTML = display_student_array;
}
