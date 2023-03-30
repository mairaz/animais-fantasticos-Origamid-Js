export default function initModal() {

}



const btnAbrir = document.querySelector('[data-modal="abrir"]');
const btnFechar = document.querySelector('[data-modal="fechar"]');
const containerModal = document.querySelector('[data-modal="container"]');

if (btnAbrir && btnFechar && ontainerModal) {
    function toggleModal() {
        containerModal.classList.toggle('ativo')
    }

    function clicarForaModal(event) {
        if (event.target === this) {
            containerModal.classList.remove('ativo')
        }
    }

    btnAbrir.addEventListener('click', toggleModal);
    btnFechar.addEventListener('click', toggleModal);
    containerModal.addEventListener('click', clicarForaModal);
}
