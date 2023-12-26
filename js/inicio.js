document.addEventListener('DOMContentLoaded',function(){
    document.getElementById ('loginButton').addEventListener ('click', login);
    document.getElementById('togglePassword').addEventListener('click', togglePasswordVisibility);

})

function togglePasswordVisibility(){
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.getElementById('togglePassword');

    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        toggleIcon.textContent ="👀"        
    }else{
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁'
    }
}

function login(){
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;

    if(userName && password){
        localStorage.setItem('userName', userName);
        localStorage.setItem('password',password);

        alert("Bienvenido")
        window.location.href = 'index.html';
    }else{
        alert ('Los datos no son correctos')
    }

}