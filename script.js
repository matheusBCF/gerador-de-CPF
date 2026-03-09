document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnGerar');
    const display = document.getElementById('cpfOutput');

    const gerarRandom = () => Math.floor(Math.random() * 9);

    const calcularDígito = (numeros) => {
        let peso = numeros.length + 1;
        let soma = numeros.reduce((acc, curr) => acc + (curr * peso--), 0);
        let resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const gerarCPF = () => {
        // Gera os 9 primeiros dígitos aleatórios
        let cpf = Array.from({ length: 9 }, gerarRandom);

        // Calcula o 1º dígito verificador
        cpf.push(calcularDígito(cpf));

        // Calcula o 2º dígito verificador
        cpf.push(calcularDígito(cpf));

        return formatar(cpf.join(''));
    };

    const formatar = (d) => {
        return d.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    };

    btn.addEventListener('click', () => {
        display.innerText = gerarCPF();
    });
});