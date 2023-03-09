const inputQuestion = document.querySelector("#inputQuestion");
const buttonQuestion = document.querySelector("#buttonQuestion");
const elementoAnswer = document.querySelector("#answer");
const answers = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunta para a sua mãe, ela sempre sabe tudo",
    "Melhor perguntar para a sua esposa, ela sempre está certa",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
];

// Clicar em  fazer pergutna
function fazerPergunta() {

    if(inputQuestion.value == "") {
        alert("Digite sua pergunta!")
        return;
    }
    
    buttonQuestion.setAttribute("disabled", true);

    const question = "<div>" + inputQuestion.value + "</div>";

    // Gerar número aleatório
    const totalAnswer = answers.length;
    const randomNum = Math.floor(Math.random() * totalAnswer);

    elementoAnswer.innerHTML = question + answers[randomNum];

    elementoAnswer.style.opacity = 1;

    // // Sumir resposta depois de 3 segundos
    setTimeout(function() {
        elementoAnswer.style.opacity = 0;
        buttonQuestion.removeAttribute("disable");
    }, 3000);
}