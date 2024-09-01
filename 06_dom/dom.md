// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,Element Select,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
//get elemnt By id

document.getElmentById('title') // (which id)
document.getElmentById('title').id
document.getElmentById('title').className

// ................................................ get the attributed................................................

document.getElmentById('title').getAttribute('id')
document.getElmentById('title').getAttribute('title')


// ............................................set the attributed......................................................
document.getElmentById('title').setAttribute('id','01')
document.getElmentById('title').setAttribute('title','test')


// .........................................set the style.............................................................
document.getElementById('title')
const rrr=document.getElementById('title')
console.log(rrr)

rrr.style.background='pink'
rrr.style.padding='15px'

//..........................................Contain Select....................................................
title.innerText:-'DOM learning on Chai aur code'
// innerText :- Show Visubality of  data and  text hidden  data n show
title.textContent:-'DOM learning on Chai aur code test text'
//testcontin:-show hiiden & visubality of data and html code not support
title.innerHTML:-'DOM learning on Chai aur code <span style="display: none;">test text</span>'
//innerHTML:- the code show a html hidden code, extra html code, hidden text and html code support


//...........................Query selector:-select the only one or  first one.............................................

document.querySelector('h1')    //1st h1 are get
document.querySelector('#id_name')    // Id selector Selcet the id
document.querySelector('.class_name')
document.querySelector('input[type=password]')  //input  tag  select
document.querySelector('p:first-child') // select the first child


 //selct the code and change
const ull=document.querySelector('ul')  //selct 1st ul
const lii=document.querySelector('li')  // selct  1st li
ull.style.background='red'          // change 1st ul color
lii.style.background='green'        // change 1st li color
lii.innerText                       // selct the text
lii.innerText='zero'                // change 1st text

//...........................Query selectorall:-select the all iteam.............................................
- Query selectorall all ways used [whcich position]
- query Selctor  selact all the iteam  and returen a Node list
- Node list is  not a pure array , it is a smilar type Of array
- node list does not used a map but array used a map  bcz it is not a array
-  node list  always say which [] position 

ex:-1
document.querySelectorAll('li')   
const temp=document.querySelectorAll('li')      // selct  all li
temp.style.color='red'          // this error bcz you not defind which poition does not matter one list or multipule list you always define position
temp[0].style.color='red'       // position you decleard li is red

// selct all the itam itra a for each and chnage background
tempm.forEach((le) =>(le.style.background='green') )



//.......................................Get Elemnet by ClassName..........................................................................

Get Elemnet by ClassName provide a Html collection   and does not support any itation so 1st convort to array then used
//how to convort:-Array.from(htmlcollation _ varibale name)
ex-1
document.getElementsByClassName('list-item')        //selct the listclass
const col=document.getElementsByClassName('list-item')  // returend a html collection
Array.from(col)                     //convort htmlcoolation to array
const convortarray=Array.from(col)      // array store varibale then used
convortarray.forEach( (na) => ( na.style.color='pink'))
