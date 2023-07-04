function buscaFraseAleatoria(){
    let url = "https://api.adviceslip.com/advice";//Sua URL
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();//A execução do script pára aqui até a requisição retornar do servidor
    let frase = JSON.parse(xhttp.response).slip.advice;
    let fraseDiv = document.getElementById('frase');
    fraseDiv.innerHTML = frase;
}

function buscaFrasePalavra(){
    
    $('#staticBackdrop').modal('toggle');
    let palavraBusca = document.getElementById('palavraBusca').value;
    console.log(palavraBusca);
    let url = `https://api.adviceslip.com/advice/search/${palavraBusca}`;
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, false);
    xhttp.send();
    let frases = JSON.parse(xhttp.response).slips;

    let elemento = document.getElementById('frase');
    while(elemento.firstChild){
        elemento.removeChild(elemento.firstChild);
    }

    for (let advice in frases) {
        let novaDiv = document.createElement('div');
        let conteudoNovo = document.createTextNode((Number(advice)+1) +". " +frases[advice].advice);
        novaDiv.style.marginBottom = '8px';
        novaDiv.appendChild(conteudoNovo);
        document.getElementById('frase').appendChild(novaDiv);
    }

}

buscaFraseAleatoria();