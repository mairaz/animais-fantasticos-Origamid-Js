export default function initTabNav() {
    const menuTab = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    tabContent[0].classList.add('ativo');

    if (menuTab.length && tabContent.length) {

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        menuTab.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeTab(index);
            });
        })
    }
}
