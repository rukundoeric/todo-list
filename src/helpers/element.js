export default class Element {
  get(value) {
    this.elm = document.querySelector(value);
    return this.elm;
  }

  create(name) {
    this.elm = document.createElement(name);
    return this;
  }

  class(classes) {
    this.elm.setAttribute('class', classes);
    return this;
  }

  createText(text) {
    this.elm = document.createTextNode(text);
    return this;
  }

  element() {
    return this.elm;
  }

  parse(value) {
    const parser = new DOMParser();
    this.elm = parser.parseFromString(value, 'text/html').body;
    return this;
  }

  appendTo(parent) {
    parent.appendChild(this.elm);
    return this;
  }
}
