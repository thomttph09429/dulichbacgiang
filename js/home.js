function validateform() {
    var hovaten = document.getElementById("exampleFormControlInput1").value;
   var email = document.getElementById("exampleFormControlInput2").value;
   var number =document.getElementById("exampleFormControlInput3").value;
   var text = document.getElementById("exampleFormControlTextarea1").value;
   if(hovaten==''){
       alert('bạn chưa nhập họ tên');

   }
   else if(email==''){
    alert('bạn chưa nhập email');

   }else if(number=='')
   {
       alert('bạn chwua nhập số điên thoại');

   }else {
       alert('cảm ơn bạn đã gửi');
       return true;
   }
return false;


}