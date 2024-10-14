// Função para ativar animações de rolagem
window.addEventListener('scroll', () => {
    const infoItems = document.querySelectorAll('.info-item');
    const scrollPosition = window.scrollY + window.innerHeight;

    infoItems.forEach(item => {
        const itemTop = item.offsetTop;

        if (scrollPosition > itemTop + 100) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// Efeito de digitação para o título
const heroTitle = document.querySelector('.hero h1');
const text = ' Refúgio Radiante';
let index = 0;

function type() {
    if (index < text.length) {
        heroTitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

window.addEventListener('load', () => {
    type();
});

// Remove a sobreposição de carregamento quando o vídeo estiver pronto
document.querySelector('.background-video').addEventListener('loadeddata', () => {
    document.querySelector('.loading-overlay').style.display = 'none';
});
