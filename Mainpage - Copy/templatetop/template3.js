// function addNewEQField(){
//     console.log("Adding new field")
//     // let newNode = document.createElement('textarea')
//     // newNode.classList.add('form-control')
//     // newNode.classList.add('eqField')
//     // newNode.classList.add('mt-2')
//     // newNode.setAttribute("rows",3)
//     // newNode.setAttribute("placeholder",'Enter here')


//     // let eqOb=document.getElementById('eq')
//     // let eqAddButtonOb=document.getElementById('eqAddButton')

//     // eqOb.insertBefore(newNode, eqAddButton);


//  }
//  function addNewWEField(){
//     // console.log("Adding new field")
//     let newNode = document.createElement('textarea')
//     newNode.classList.add('form-control')
//     newNode.classList.add('weField')
//     newNode.classList.add('mt-2')
//     newNode.setAttribute("rows",3)
//     newNode.setAttribute("placeholder",'Enter here')


//     let weOb=document.getElementById('we')
//     let weAddButtonOb=document.getElementById('weAddButton')

//     weOb.insertBefore(newNode, weAddButtonOb);


//  }
 
 function addNewIHField(){
    // console.log("Adding new field")
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('ihField')
    newNode.classList.add('mt-2')
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder",'Enter here')


    let ihOb=document.getElementById('ih')
    let ihAddButtonOb=document.getElementById('ihAddButton')

    ihOb.insertBefore(newNode, ihAddButtonOb);
 }

 function addNewEXField(){
    // console.log("Adding new field")
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('exField')
    newNode.classList.add('mt-2')
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder",'Enter here')


    let exOb=document.getElementById('ex')
    let exAddButtonOb=document.getElementById('exAddButton')

    exOb.insertBefore(newNode, exAddButtonOb);
 }

//  function addNewKAField(){
//     // console.log("Adding new field")
//     let newNode = document.createElement('textarea')
//     newNode.classList.add('form-control')
//     newNode.classList.add('kaField')
//     newNode.classList.add('mt-2')
//     newNode.setAttribute("rows",3)
//     newNode.setAttribute("placeholder",'Enter here')


//     let kaOb=document.getElementById('ka')
//     let kaAddButtonOb=document.getElementById('kaAddButton')

//     kaOb.insertBefore(newNode, kaAddButtonOb);
//  }
//  function addNewTSField(){
//     // console.log("Adding new field")
//     let newNode = document.createElement('textarea')
//     newNode.classList.add('form-control')
//     newNode.classList.add('tsField')
//     newNode.classList.add('mt-2')
//     newNode.setAttribute("rows",3)
//     newNode.setAttribute("placeholder",'Enter here')


//     let tsOb=document.getElementById('ts')
//     let tsAddButtonOb=document.getElementById('tsAddButton')

//     tsOb.insertBefore(newNode, tsAddButtonOb);
//  }

 function generateCV(){
     
document.getElementById('nameT').innerHTML = document.getElementById('nameField').value;

    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    document.getElementById('emailT').innerHTML = document.getElementById('emailField').value;

    document.getElementById('addT').innerHTML = document.getElementById('addressField').value;
    
    document.getElementById('districtT').innerHTML = document.getElementById('dist').value;

    document.getElementById('sacT').innerHTML = document.getElementById('aacField').value;

//     document.getElementById('tittle').innerHTML = document.getElementById('subtittleField').value;

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;
// collage
    document.getElementById('acourseT').innerHTML = document.getElementById('acourseField').value;

    document.getElementById('acollageT').innerHTML = document.getElementById('acollageField').value;

    document.getElementById('aunivT').innerHTML = document.getElementById('auniverField').value;

    document.getElementById('adivT').innerHTML = document.getElementById('adivField').value;
// 12th
document.getElementById('bcourseT').innerHTML = document.getElementById('bcourseField').value;

document.getElementById('bcollageT').innerHTML = document.getElementById('bcollageField').value;

document.getElementById('bunivT').innerHTML = document.getElementById('buniverField').value;

document.getElementById('bdivT').innerHTML = document.getElementById('bdivField').value;

// 10tc
document.getElementById('ccourseT').innerHTML = document.getElementById('ccourseField').value;

document.getElementById('ccollageT').innerHTML = document.getElementById('ccollageField').value;

document.getElementById('cunivT').innerHTML = document.getElementById('cuniverField').value;

document.getElementById('cdivT').innerHTML = document.getElementById('cdivField').value;


// Inrerest and hobby
let aqs = document.getElementsByClassName('ihField')
let str1 ="";
for(let e of aqs){
    str1 = str1 + `<li>  ${e.value} </li>`
}
document.getElementById('ahT').innerHTML = str1;

// // project experience
// let pr = document.getElementsByClassName('pField') 
// let str4= "";

// for(let e of pr){
//     str4 = str4 + `<li>  ${e.value} </li>`
// }

// document.getElementById('aqsT').innerHTML = str4;

// intersest and hobbies
let wes = document.getElementsByClassName('ihField') 
let str2= "";

for(let e of wes){
    str2 = str2 + `<li>  ${e.value} </li>`
}

document.getElementById('ahT').innerHTML = str2;

// // work experience
let weex = document.getElementsByClassName('exField') 
let str3= "";

for(let e of weex){
    str3 = str3 + `<li>  ${e.value} </li>`
}

document.getElementById('weT').innerHTML = str3;

// // key and achivement
// let ka = document.getElementsByClassName('kaField') 
// let str5= "";

// for(let e of ka){
//     str5 = str5 + `<li>  ${e.value} </li>`
// }

// document.getElementById('kaT').innerHTML = str5;

// // technical skill
// let ts = document.getElementsByClassName('tsField') 
// let str6= "";

// for(let e of ts){
//     str6 = str6 + `<li>  ${e.value} </li>`
// }

// document.getElementById('tsT').innerHTML = str6;

// // code for image
// let file = document.getElementById('imgField').files[0]
// console.log(file);

// let reader = new FileReader()
// reader.readAsDataURL(file); 

// console.log(reader.result);

// // set image to Template

// reader.onloadend=function(){
//     document.getElementById('imgTemplate').src=reader.result;
// }

document.getElementById('cv-form').style.display='none';
document.getElementById('cv-template').style.display='block';


// }

// function printCV(){
//    window.print();
// }
 
}
// function printCV(){
//     window.print(1);
// }
 
function generatePDF() {
    // Replace 'your-html-content-id' with the actual ID of your HTML content
    const element = document.getElementById('cv-template');

    // Use html2pdf to generate the PDF
    html2pdf(element)
        .then(pdf => {
            // Save the PDF or do whatever you want with it
            pdf.save('newFile.pdf');
        })
        .catch(error => {
            console.error('Error generating PDF:', error);
        });

        document.getElementById('main').style.display='none';
        document.getElementById('cv-template').style.display='block';
}
