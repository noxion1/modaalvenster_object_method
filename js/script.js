const newModal = {
  allContent: document.querySelectorAll('.content'),
  allButtons: document.querySelectorAll('.mButton'),

createBackground() {
  let background = document.createElement('div');
  background.classList.add('contentBackground');
  background.addEventListener('click', () => this.hidden());
  return background;
  },
  createModal() {
    let modal = document.createElement('div');
    modal.className = 'hiddenContent';
    modal.addEventListener('click', (evt) => evt.stopPropagation());
    return modal;
  },
  createExit() {
    let exit = document.createElement('div');
    exit.className = 'exitButton';
    exit.innerHTML = '&#x00D7';
    exit.addEventListener('click', () => this.hidden());
    return exit;
  },
  visible(elem) {
    this.background = this.createBackground();
    this.exit = this.createExit();
    this.modal = this.createModal();
    this.modal.appendChild(this.exit);
    this.modal.appendChild(elem);
    this.background.appendChild(this.modal);
    document.body.appendChild(this.background);
  },
  hidden() {
    this.modal.innerHTML = '';
    document.body.removeChild(this.background);
  }
}

for (let i = 0; i < newModal.allContent.length; i++) {
  newModal.allContent[i].parentNode.removeChild(newModal.allContent[i]);
}
for (let i = 0; i < newModal.allButtons.length; i++) {
  newModal.allButtons[i].addEventListener('click', () => {
    let content = newModal.allContent[i];
    newModal.visible(content);
  })
}
