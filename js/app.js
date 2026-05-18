// AXIS™ Multidimensional System - Funcionamento Inicial
document.addEventListener('DOMContentLoaded', () => {
    const goldButton = document.querySelector('.gold-button');
    
    if (goldButton) {
        goldButton.addEventListener('click', () => {
            alert('Acessando o Sistema Multidimensional AXIS™... Seja bem-vinda!');
            // Aqui podemos direcionar para a página do dashboard no futuro
            window.location.href = 'pages/dashboard.html';
        });
    }

    console.log('Sistema AXIS™ carregado com sucesso. Método MB ativo.');
});
