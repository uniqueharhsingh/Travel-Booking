console.log("In This Project We are using Regular expression in JS ")

//Geeting The document Readt
let username=document.getElementById("username")
let Email=document.getElementById("Email")
let Phone=document.getElementById("Phone")

//console.log(username,Email,Phone)

//validating The username,Email,phone
username.addEventListener("blur",()=>{
    console.log("You have Blur This Username Event")
    let regex=/([0-9a-zA-Z]){3,10}/
    let string=username.value;
    if(regex.test(string)){
        console.log("This Validate This Email")
    }
    else{
        console.log("This Does Not validate The Email")
    }
})

//Validating The Email TAb
Email.addEventListener("blur",()=>{
    console.log("You have Clicked the Blur EMail Event")
    let regex=/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let string=Email.value;
    if(regex.test(string)){
        console.log("You have validate the Email ")
    }
    else{
        console.log("You Have Not Validate the EMail ")
    }

})

//validating the Phone NUmbers
Phone.addEventListener("blur",()=>{
    console.log("You have Validate The Phone Event")
    let regex=/([0-9]){10}/;
    let string=Phone.value;
    if(regex.test(string)){
        console.log("You Have Validate The Phone ")
    }
    else{
        console.log("You Does Not have validate the Phone")
    }


})



