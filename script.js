var input = document.querySelector("#inp")
var btn = document.querySelector("#butt")
var qr_img = document.querySelector("img")


btn.addEventListener('click', () => {

    let inpvalue = input.value;
    console.log(inpvalue);

    if (inpvalue == "") {
        alert("please enter the url")
    }else{
        
        qr_img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpvalue}`;
        qr_img.alt=`QR code for${inpvalue}`
    }
});
