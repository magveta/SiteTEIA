let contas = [];

function criarconta() {
    var emailrecebido = document.getElementById("inputEmail").value;
    var senharecebida = document.getElementById("inputSenha").value;

    let contas = JSON.parse(localStorage.getItem('contas')) || [];
    contas.push({email: emailrecebido, senha: senharecebida});
    localStorage.setItem('contas', JSON.stringify(contas));
    
    console.log("Conta criada:", { emailrecebido, senharecebida });
    alert("Sua conta foi criada!");
}

function logar() {
    let loginexiste = false;
    var emailrecebido = document.getElementById("inputEmail").value;
    var senharecebida = document.getElementById("inputSenha").value;

    contasstring = localStorage.getItem("contas");
    const contasarray = JSON.parse(contasstring);

    for (let i = 0; i < contasarray.length; i++) {
        if (contasarray[i].email === emailrecebido && contasarray[i].senha === senharecebida) {
            loginexiste = true;
            break; 
        }
    }

    if (loginexiste) {
        alert("Você logou com sucesso!");
    } else {
        alert("E-mail ou Senha incorretos ou inexistentes. Tente novamente.");
    }
}
/* 
⣿⣿⣿⣿⣿⣿⣿⠿⢛⣩⣴⣶⣿⣿⣿⣿⣿⣿⣶⣌⠻⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠃⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠄⢻⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠄⣿⡿⠿⠿⠿⣿⣿⣿⣿⣿⠿⠿⠿⣟⠄⠘⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⢸⡇⢀⡴⢲⣄⠈⣹⣏⠉⢀⣠⡤⣄⠄⢀⠄⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣯⣈⣛⣾⣯⡄⠉⠉⢧⣄⡛⠒⠋⠄⡀⠄⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣭⣿⠄⠄⠄⠄⠋⠉⠙⣶⣿⣿⠆⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⢹⣿⠁⠄⢸⣿⣶⣷⣀⣾⣿⡀⣀⡈⠛⠉⢀⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣧⢻⣧⠄⠹⠿⣿⠟⡟⠻⣟⢹⡿⠁⠄⢠⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡜⣿⣆⠄⠴⠊⠄⠄⠄⠄⠄⠄⡀⡌⢸⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣧⢻⣿⣷⣶⣤⣤⣤⣤⣤⣶⣿⣷⠄⣾⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣦⣛⠿⠿⠿⠿⣿⣿⡿⠷⠟⣫⣾⣿⣿⣿⣿⣿⣿⣿⣿
🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ 
🟥🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ 
🟥🟥🟥⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ 
🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 
🟥🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 
🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜ 
🟥🟥🟥🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩 
🟥🟥🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩 
🟥🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩
*/