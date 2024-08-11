/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado
*/
//Passo 1
const botoesCarrosel = document.querySelectorAll(".botao");
const imagem = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")

//Passo2
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //Passo 3
        DesmarcarBotaoSelecionado();

        //Passo 4
        marcarBotaoSelecionado(botao);

        //Passo 5
        esconderImagemAtiva();

        //Paaso 6
        mostrarImagemAtiva(indice);

        //Passo 7
        esconderInformacaoAtiva();

        //Passo 8
        mostrarInformacoes(indice);
    })
})
function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function mostrarImagemAtiva(indice) {
    imagem[indice].classList.add("ativa");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function esconderInformacaoAtiva() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function DesmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

