function initTabNav() {

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('js-tabcontent li');

if(tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('ativo');


    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        })
        tabContent(index).classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        });
    });
}
}
initTabNav();

function initAccordion(){

const accordionList = document.querySelectorAll('.js-accordion dt');
const active = 'ativo';
if(accordionList.length) {
    accordionList[0].classList.add(active);
    accordionList[0].nextElementSibling.classList.add(active);
    
    function activeAccordion() {
        this.classList.toggle(active);
        this.nextElementSibling.classList.toggle(active);
    }

    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion);
    });
}
}

initAccordion();