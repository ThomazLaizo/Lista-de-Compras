export function gerarDiaSemana() {
    let dataAtual = new Date();
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR');
    const horaFormatada = dataAtual.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });
    const formatador = new Intl.DateTimeFormat('pt-BR', {
        weekday: 'long'
    });
    const diaSemana = formatador.format(dataAtual);
    const diaSemanaFormatado = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
    const dataCompleta = (diaSemanaFormatado+" ("+dataFormatada+") às " + horaFormatada);
    return dataCompleta;
}

export default gerarDiaSemana;