const calcular = document.getElementById('calcular');

function calculo () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const distancia = document.getElementById('distancia').value;
    const tempo = document.getElementById('tempo').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && peso !== '' && distancia !== '' && tempo !== '') {

        const tempo_corte = tempo.split(':');
        const horas = parseInt(tempo_corte[0]);
        const minutos = parseInt(tempo_corte[1]);
        const segundos = parseInt(tempo_corte[2]);

        const tempo_horas = horas + minutos/60 + segundos/3600;
        const tempo_minutos = horas + minutos*60 + segundos/60;

        const velocidademedia = (distancia/(tempo_horas)).toFixed(2);
        const pace = (60/velocidademedia).toFixed(2);
        const gasto = (velocidademedia*peso*0.0175*(tempo_minutos)).toFixed(2);
           
        resultado.textContent = `Olá ${nome} ! Você percorreu ${distancia} km em ${tempo} hrs. Isso quer dizer que a sua velocidade média foi de ${velocidademedia} km/h, o que o corresponde a um pace de ${pace}min/km. Com ${peso}kg, você gastou cerca de ${gasto} cal `;

    }
    else {
        resultado.textContent = 'Para calcular, preencha todos os campos.';
    }

}

calcular.addEventListener('click', calculo);