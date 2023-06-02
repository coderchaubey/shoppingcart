// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))
const signup=document.getElementById("signup-link");
const login=document.getElementById("login-link");
//opening Login Page
document.getElementById("login").addEventListener("click", ()=>{
    login.click();
})
//opening Sign up Page
document.getElementById("signup").addEventListener("click", ()=>{
    signup.click();
})
function showAlert(){
    alert("You have to Login or Sign Up to access this!");
}