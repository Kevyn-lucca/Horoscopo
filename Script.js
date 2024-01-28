const frasesPorSigno = {
    aries: "Você é uma pessoa cheia de energia e determinação. Continue buscando seus objetivos!",
    touro: "Sua perseverança e estabilidade são admiráveis. Lembre-se de apreciar os momentos de tranquilidade.",
    gemeos: "Sua mente curiosa e comunicativa é uma grande qualidade. Explore novas ideias e mantenha a positividade.",
    cancer: "Sua sensibilidade é uma força poderosa. Cuide bem de si mesmo e dos outros ao seu redor.",
    leao: "Você brilha com confiança e liderança. Continue a iluminar o mundo ao seu redor.",
    virgem: "Sua atenção aos detalhes e dedicação são notáveis. Aprecie o progresso, mesmo que pequeno.",
    libra: "Sua busca pela harmonia é admirável. Encontre equilíbrio em todas as áreas da sua vida.",
    escorpiao: "Sua intensidade e paixão são suas maiores forças. Use-as sabiamente em seus empreendimentos.",
    sagitario: "Sua natureza aventureira e otimista é inspiradora. Continue explorando novos horizontes.",
    capricornio: "Sua determinação e disciplina são fundamentais para o seu sucesso. Persista nos seus objetivos.",
    aquario: "Sua originalidade e pensamento progressivo são valiosos. Contribua para um mundo melhor.",
    peixes: "Sua empatia e intuição são notáveis. Confie na sua sabedoria interior."
};

function buscarPrevisao() {
    const signoSelecionado = document.getElementById("signo").value;
    const inputSigno = document.getElementById("inputSigno").value.trim().toLowerCase();

    const signoParaBuscar = inputSigno || signoSelecionado;

    if (!signoParaBuscar) {
        alert("Por favor, selecione um signo ou digite o seu.");
        return;
    }

    const frase = frasesPorSigno[signoParaBuscar];

    const previsaoElemento = document.getElementById("previsao");
    previsaoElemento.innerText = frase || "Frase não encontrada para o signo informado.";
}

buscarPrevisao();
