var students= [];
var num = 0;

function get(x){
    return document.getElementById(x);
}

function AddMarks(){
    if (get("Math").value=="" || get("Science").value=="" || get("English").value==""){
    get("info").innerText=`Please enter the Marks`;
    }else if(get('Math').value>100 || get('Science').value>100 || get('English').value>100 || get('Math').value<0 || get('Science').value<0 || get('English').value<0) {
     get("info").innerText='Marks should be between 0 and 100.';
    } else {
        window['student'+num] = { 
        name: (get("StudNamesubmit").value).toLowerCase(),
        Math: get('Math').value,
        Science: get('Science').value,
        English: get('English').value
        }
        students.push(window['student'+num]);
        num++;
        get("info").innerText = `Marks of ${num} student/s entered!`
        get("Math").value = "";
        get("Science").value= "";
        get("English").value = "";
    }
}

function DisplayMarks(){
    var input = get("StuNameDisplayMarksinput").value.toLowerCase();
    var output = get("output");

    for (var i = 0; i < students.length; i++){
     if(students[i].name === input){
      var avgmarks = Math.round((Number(students[i].Math) + Number(students[i].Science) + Number(students[i].English))/3);
        output.innerHTML=`<h4>Math: ${students[i].Math}</h4>
        <h4>Science: ${students[i].Science}</h4>
        <h4>English: ${students[i].English}</h4>
        <h4>Average Marks: ${avgmarks}</h4>`;
        break;
      }else{
          output.innerHTML="<h4>Student not found</h4>"
      }
    }
}
