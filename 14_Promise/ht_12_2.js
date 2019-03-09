class Options {
  constructor(height = 120, width = 200, bg = 'yellow', fontSize = 3, textAlign = 'center') {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
    }
  newDiv(text) {
    let div = document.createElement('div');
    div.textContent = text;
    div.style.cssText = `width: ${this.width}px; height: ${this.height}px; background-color: ${this.bg}; font-size: ${this.fontSize}em; text-align: ${this.textAlign}`;
    document.body.appendChild(div);
  }
}
let div1 = new Options();
div1.newDiv('1 Its Works!=)');
div1.newDiv('2 Its Works!=)');
div1.newDiv('3 Its Works!=)');
    
