

// // var React=require('react');
// // var ReactDOM =require('react-dom');

// // Modern javascript -->
// import React from 'react';  // for using jsx.
// import ReactDOM from 'react-dom';
// // ReactDOM.render('kya dikhana hai','kaha dikhana hai ', 'callback function');

// ReactDOM.render([<h1>Hello world !</h1>,
// <p>Square Bracket</p>], document.getElementById('root')); // h1 is here is called jsx.
// // ReactDOM.render(<div><h1>Hello world !</h1>
// //    <p>This is multiple tag in reactDom</p>
// // </div>,document.getElementById('root')); // h1 is here is called jsx.  



// //jsx -javascript xml or javascript extension.

// // using javascript create h1 tag.
// var h1 = document.createElement('h1');
// h1.innerHTML = "Thapa Technical";
// document.getElementById("root").appendChild(h1);


// //jsx Expression--------------->  we use only variable not statements.
// const fname="Ramesh";
// const currentDate=new Date().toLocaleDateString();
// const currentTime=new Date().toLocaleTimeString();
// ReactDOM.render(<>
//   <h1>My name is {fname}</h1>
//   <p>Current Date is ={currentDate}</p>
//   <p>Current Time is ={currentTime}</p>

// </>,
// document.getElementById('root'));

// // for inline css in react , make css property in camal case with the help of object . and pass it in react dom.


// //Lec -22

// import React from "react";
// import ReactDom from 'react-dom';
// import Card from './Card';


// // this is map function.
// function npcard(val){
//   console.log(val); // whole data map.
//   return (
//     <Card sname={val.imgsrc}  // sdata[0].sname
//         imgsrc={val.title}  // sdata[0].imgsrc
//         title="Webseries"  
//         link=""
//         key ={val.id}
//     />
//   )
// }

// ReactDom.render(

//   // for creating custom attribute we use props.
//   <>
//  <h1>List of top 5 netflix video</h1>
  
//     <Card sname="DARK" // we can store this whole data in array of object file. and access it through index.. sdata[0].sname;
//         imgsrc=""
//         title="Webseries"
//         link="https://www.netflix.com/in/"
//     />
//     <Card sname="MOON LIGHT" 
//         imgsrc=""
//         title="Webseries"
//         link=""
//     />
//      <Card sname="MOON LIGHT" 
//         imgsrc=""
//         title="Webseries"
//         link=""
//     />  
  
//    {/* instead of using multiple card direct use map function to rendor card.  //Sdata is a file that contain whole obj.  */} 
//    {/* // in case of map function we must create a unique key  */}
//    {sdata.map(npcard)}   // 

//   </>
//   ,
//   document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


