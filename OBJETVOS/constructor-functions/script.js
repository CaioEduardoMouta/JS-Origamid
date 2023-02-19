const Dom = {
    seletor: 'li',
    elemento(){
        const elementoSelecionado = document.querySelector(this.seletor);
        return elementoSelecionado;
    },
    ativar() {
        const elementoSelecionado = this.element();
        elementoSelecionado.classList.add('ativar');
    }
}