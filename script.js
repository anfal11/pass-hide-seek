const passwordInput = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function(){
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        togglePassword.innerHTML = `<i class="fa-regular fa-eye-slash relative right-8"></i>`;
    } else {
        passwordInput.type = "password";
        togglePassword.innerHTML = `<i class="fa-regular fa-eye  relative right-8"></i>`;
    }
})