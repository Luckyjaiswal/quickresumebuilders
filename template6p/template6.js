function addNewWEField(){
    // console.log("Adding new field")
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder",'Enter here')


    let weOb=document.getElementById('we')
    let weAddButtonOb=document.getElementById('weAddButton')

    weOb.insertBefore(newNode, weAddButtonOb);


 }

 function addNewAQField(){
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add('mt-2')
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder",'Enter here')


    let aqOb=document.getElementById('aq')
    let aqAddButtonOb=document.getElementById('aqAddButton')

    aqOb.insertBefore(newNode, aqAddButtonOb);
 }
// Skill
  function addNewTSField(){
    let newNode = document.createElement('input')
    newNode.classList.add('form-control')
    newNode.classList.add('tsField')
    newNode.classList.add('mt-2')
    newNode.setAttribute("rows",3)
    newNode.setAttribute("placeholder",'Enter here')


    let aqOb=document.getElementById('ts')
    let aqAddButtonOb=document.getElementById('tsAddButton')

    aqOb.insertBefore(newNode, aqAddButtonOb);
 }
//  genearate cv
function generateCV(){

    let nameField=document.getElementById('nameField').value
    let nameT1 = document.getElementById('nameT1')

    nameT1.innerHTML= nameField;

// direct
    document.getElementById('nameT2').innerHTML = nameField

    document.getElementById('nameT3').innerHTML = document.getElementById('lastnameField').value;

    // contact
    document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

    // address
    document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;
 
    // domain
    document.getElementById('domain').innerHTML = document.getElementById('domainField').value;

 // linkedin
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedField').value;
// objective
document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

// work experience
let wes = document.getElementsByClassName('weField') 
let str=" ";

for(let e of wes){
    str = str + `<li>  ${e.value} </li>`
}

document.getElementById('weT').innerHTML = str;

// skill
let sks = document.getElementsByClassName('tsField') 
let str3="";

for(let e of sks){
    str3 = str3 + `<li>  ${e.value} </li>`
}

document.getElementById('tsT').innerHTML = str3;
// Academic Qualification

let aqs = document.getElementsByClassName('eqField')
let str1 ="";
for(let e of aqs){
    str1 = str1 + `<li>  ${e.value} </li>`
}
document.getElementById('aqT').innerHTML = str1;

// code for image
let file = document.getElementById('imgField').files[0]
console.log(file);

let reader = new FileReader()
reader.readAsDataURL(file); 

console.log(reader.result);

// set image to Template

reader.onloadend=function(){
    document.getElementById('imgTemplate').src=reader.result;
}


        document.getElementById('cv-form').style.display='none';
        document.getElementById('cv-template').style.display='block';

}

function profes(){
    document.getElementById('section1').style.display='none';
    document.getElementById('section2').style.display='block';
    }

    function prev(){
        document.getElementById('section2').style.display='none';
        document.getElementById('section1').style.display='block';
        }    

//  print cv

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


