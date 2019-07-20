var botaoLogar = document.getElementById("btnLogin")

function pegaDado(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    var dados = {
        email: email,
        senha: senha,
    }
    console.log(dados[0])
}

