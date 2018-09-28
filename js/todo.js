var details2 = [{
    "title": "Wake Up",
    "desc": "Call Me at 7 am"
}];

addT(d);
// axios.get('C:/Users/Synigence - Hafeez/Desktop/todolist/test.json?12345')
//     .then(function(response) {


//         details.forEach(todofunc);
//     })
//     .catch(function(error) {
//         // handle error
//         console.log(error);
//     })
//     .then(function() {
//         console.log('sd')
//             // always executed
//     });


//$("#addtask").click(addT());


// axios.post('C:/Users/Synigence - Hafeez/Desktop/todolist/test.json?12345', {
//         "title": 'Fred',
//         "desc": 'Flintstone'
//     })
//     .then(function(response) {
//         console.log(response);
//         addT(response.data);
//         //response.data.forEach(todofunc);

//     })
//     .catch(function(error) {
//         console.log(error);
//     });



function searchfunc() {
    var input, filter;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();

    let result = []
    d.map((sData) => {
        if (sData.title.toUpperCase().indexOf(filter) > -1) {
            result.push(sData)
        }
    })
    console.log(result);
    addT(result);
}







function addT(details) {
    $("#demo").empty();
    details.forEach(todofunc);

}




function todofunc(taskData) {


    var newElement1 = document.createElement('li');
    newElement1.innerHTML = taskData.title;
    newElement2 = document.createElement('div');
    newElement2.innerHTML = ' ' + taskData.desc;

    newElement1.appendChild(newElement2);

    var lii = document.getElementById('demo');

    lii.appendChild(newElement1);



}