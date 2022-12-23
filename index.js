alert('Hello,Friend!' + ' ' + 'Please complete the No.of People input before completing Custom% input  if you use Cutom% input');

function CustomFunc() {
	 let billValue = document.querySelector('.inputs').value;
     let cell1 = document.querySelector('#cell1');
     let billValues = billValue*5/100;
	 let logic = billValues.toFixed(2);
	 let logicer = parseInt(logic);
	 let logicing = (logic+logicer);
	 let People = document.querySelector('#input').value;
	 let bigLogic = (logicing/People).toFixed(2);
	 let mainRole = ((billValue/People) + parseInt(bigLogic)).toFixed(2);

	 document.querySelector('#h1').innerHTML = ('$' + ' ' + mainRole);
	 document.querySelector('.h1s').innerHTML = ('$' + ' ' + bigLogic);
	 if (billValue>=200 ) {
	 document.querySelector('.top').style.flexDirection = "column"
	 document.querySelector('.top').style.alignItems = "flex-start";
     document.querySelector('.right-top-container').style.height = 50 + '%';
     document.querySelector('#top').style.flexDirection = "column"
	 document.querySelector('#top').style.alignItems = "flex-start";
     document.querySelector('.right-container').style.height = 80 + '%';
     document.querySelector('.right-container').style.height = 520 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 83 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 50 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 200 + 'px';

}
 else if (billValue<200) {
 	  	 document.querySelector('.top').style.flexDirection = "row";
     document.querySelector('.right-top-container').style.height = 30 + '%';
     document.querySelector('#top').style.flexDirection = "row";
     document.querySelector('.right-container').style.height = 60 + '%';
     document.querySelector('.right-container').style.height = 390 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 60 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 25 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 100 + 'px';
 }
}



/* For 10%; */       
           function PercentFunc() {
	 let billValue = document.querySelector('.inputs').value;
     let cell1 = document.querySelector('#cell1');
     let billValues = billValue*10/100;
	 let logic = billValues.toFixed(2);
	 let logicer = parseInt(logic);
	 let logicing = (logic+logicer);
	 let People = document.querySelector('#input').value;
	 let bigLogic = (logicing/People).toFixed(2);
	 let mainRole = ((billValue/People) + parseInt(bigLogic)).toFixed(2);

	 document.querySelector('#h1').innerHTML = ('$' + ' ' + mainRole);

	 document.querySelector('.h1s').innerHTML = ('$' + ' ' + bigLogic);
	 if (billValue>=200 ) {
	 document.querySelector('.top').style.flexDirection = "column"
	 document.querySelector('.top').style.alignItems = "flex-start";
     document.querySelector('.right-top-container').style.height = 50 + '%';
     document.querySelector('#top').style.flexDirection = "column"
	 document.querySelector('#top').style.alignItems = "flex-start";
     document.querySelector('.right-container').style.height = 80 + '%';
     document.querySelector('.right-container').style.height = 520 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 83 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 50 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 200 + 'px';

}
 else if (billValue<200) {
 	  	 document.querySelector('.top').style.flexDirection = "row";
     document.querySelector('.right-top-container').style.height = 30 + '%';
     document.querySelector('#top').style.flexDirection = "row";
     document.querySelector('.right-container').style.height = 60 + '%';
     document.querySelector('.right-container').style.height = 390 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 60 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 25 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 100 + 'px';
 }
}
    

    /*For 15% */ 

     function CustomFunca() {
	 let billValue = document.querySelector('.inputs').value;
     let cell1 = document.querySelector('#cell1');
     let billValues = billValue*15/100;
	 let logic = billValues.toFixed(2);
	 let logicer = parseInt(logic);
	 let logicing = (logic+logicer);
	 let People = document.querySelector('#input').value;
	 let bigLogic = (logicing/People).toFixed(2);
      let mainRole = ((billValue/People) + parseInt(bigLogic)).toFixed(2);

	 document.querySelector('#h1').innerHTML = ('$' + ' ' + mainRole);

	 document.querySelector('.h1s').innerHTML = ('$' + ' ' + bigLogic);
	 if (billValue>=200 ) {
	 document.querySelector('.top').style.flexDirection = "column"
	 document.querySelector('.top').style.alignItems = "flex-start";
     document.querySelector('.right-top-container').style.height = 50 + '%';
     document.querySelector('#top').style.flexDirection = "column"
	 document.querySelector('#top').style.alignItems = "flex-start";
     document.querySelector('.right-container').style.height = 80 + '%';
     document.querySelector('.right-container').style.height = 520 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 83 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 50 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 200 + 'px';

}
 else if (billValue<200) {
 	  	 document.querySelector('.top').style.flexDirection = "row";
     document.querySelector('.right-top-container').style.height = 30 + '%';
     document.querySelector('#top').style.flexDirection = "row";
     document.querySelector('.right-container').style.height = 60 + '%';
     document.querySelector('.right-container').style.height = 390 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 60 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 25 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 100 + 'px';
 }
}



 /* For 25% */

   function CustomFunco() {
	 let billValue = document.querySelector('.inputs').value;
     let cell1 = document.querySelector('#cell1');
     let billValues = billValue*25/100;
	 let logic = billValues.toFixed(2);
	 let logicer = parseInt(logic);
	 let logicing = (logic+logicer);
	 let People = document.querySelector('#input').value;
	 let bigLogic = (logicing/People).toFixed(2);

	  let mainRole = ((billValue/People) + parseInt(bigLogic)).toFixed(2);

	 document.querySelector('#h1').innerHTML = ('$' + ' ' + mainRole);
	 if (billValue>=200 ) {
	 document.querySelector('.top').style.flexDirection = "column"
	 document.querySelector('.top').style.alignItems = "flex-start";
     document.querySelector('.right-top-container').style.height = 50 + '%';
     document.querySelector('#top').style.flexDirection = "column"
	 document.querySelector('#top').style.alignItems = "flex-start";
     document.querySelector('.right-container').style.height = 80 + '%';
     document.querySelector('.right-container').style.height = 520 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 83 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 50 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 200 + 'px';

}
 else if (billValue<200) {
 	  	 document.querySelector('.top').style.flexDirection = "row";
     document.querySelector('.right-top-container').style.height = 30 + '%';
     document.querySelector('#top').style.flexDirection = "row";
     document.querySelector('.right-container').style.height = 60 + '%';
     document.querySelector('.right-container').style.height = 390 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 60 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 25 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 100 + 'px';
 }
}


  /* For 50% */ 

  function CustomFunci() {
	 let billValue = document.querySelector('.inputs').value;
     let cell1 = document.querySelector('#cell1');
     let billValues = billValue*50/100;
	 let logic = billValues.toFixed(2);
	 let logicer = parseInt(logic);
	 let logicing = (logic+logicer);
	 let People = document.querySelector('#input').value;
	 let bigLogic = (logicing/People).toFixed(2);
      let mainRole = ((billValue/People) + parseInt(bigLogic)).toFixed(2);

	 document.querySelector('#h1').innerHTML = ('$' + ' ' + mainRole);
	 document.querySelector('.h1s').innerHTML = ('$' + ' ' + bigLogic);
	 if (billValue>=200 ) {
	 document.querySelector('.top').style.flexDirection = "column"
	 document.querySelector('.top').style.alignItems = "flex-start";
     document.querySelector('.right-top-container').style.height = 50 + '%';
     document.querySelector('#top').style.flexDirection = "column"
	 document.querySelector('#top').style.alignItems = "flex-start";
     document.querySelector('.right-container').style.height = 80 + '%';
     document.querySelector('.right-container').style.height = 520 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 83 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 50 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 200 + 'px';

}
 else if (billValue<200) {
 	  	 document.querySelector('.top').style.flexDirection = "row";
     document.querySelector('.right-top-container').style.height = 30 + '%';
     document.querySelector('#top').style.flexDirection = "row";
     document.querySelector('.right-container').style.height = 60 + '%';
     document.querySelector('.right-container').style.height = 390 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 60 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 25 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 100 + 'px';
 }
}


/* For Custom% */ 

   

  function CustomFu() {
	 let billValue = document.querySelector('.inputs').value;
     let cell1 = document.querySelector('#cell1');
     let CustomPercent = document.querySelector('.inputss').value;
     let billValues = billValue*CustomPercent/100;
	 let logic = billValues.toFixed(2);
	 let logicer = parseInt(logic);
	 let logicing = (logic+logicer);
	 let People = document.querySelector('#input').value;
	 let bigLogic = (logicing/People).toFixed(2);
      let mainRole = ((billValue/People) + parseInt(bigLogic)).toFixed(2);

	 document.querySelector('#h1').innerHTML = ('$' + ' ' + mainRole);
	 document.querySelector('.h1s').innerHTML = ('$' + ' ' + bigLogic);
	 if (billValue>=200 ) {
	 document.querySelector('.top').style.flexDirection = "column"
	 document.querySelector('.top').style.alignItems = "flex-start";
     document.querySelector('.right-top-container').style.height = 50 + '%';
     document.querySelector('#top').style.flexDirection = "column"
	 document.querySelector('#top').style.alignItems = "flex-start";
     document.querySelector('.right-container').style.height = 80 + '%';
     document.querySelector('.right-container').style.height = 520 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 83 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 50 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 200 + 'px';

}
 else if (billValue<200) {
 	  	 document.querySelector('.top').style.flexDirection = "row";
     document.querySelector('.right-top-container').style.height = 30 + '%';
     document.querySelector('#top').style.flexDirection = "row";
     document.querySelector('.right-container').style.height = 60 + '%';
     document.querySelector('.right-container').style.height = 390 + 'px';
     document.querySelector('.calculator-component-container').style.height = 1300 + 'px';
     document.querySelector('.left-container').style.height = 60 + '%';
      document.querySelector('.left-middle-container').style.marginTop = 25 + 'px';
     document.querySelector('.left-bottom-container').style.marginTop = 100 + 'px';
 
 }
}

 function buttonFunction() {
   	document.querySelector('.inputs').value = "0";
    document.querySelector('.inputss').value = "0";
    document.querySelector('#input').value = "0";
    document.querySelector('.h1s').innerHTML = "$" + ' ' +  '0.00' ;
    document.querySelector('#h1').innerHTML = "$" + ' ' + "0.00";

   document.querySelector('.top').style.flexDirection = "row";
   document.querySelector('.right-top-container').style.height = 30 + '%';
   document.querySelector('#top').style.flexDirection = "row";
   document.querySelector('.right-container').style.height = 60 + '%';
   document.querySelector('.right-container').style.height = 390 + 'px';
   document.querySelector('.left-container').style.height = 60 + '%';
   document.querySelector('.left-middle-container').style.marginTop = 25 + 'px';
   document.querySelector('.left-bottom-container').style.marginTop = 100 + 'px';
   document.querySelector('.calculator-component-container').style.height = 500 + 'px';
}



