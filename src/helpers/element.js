export default class Element {
  get(value) {
    this.elm = document.querySelector(value);
    return this.elm;
  }

  parse(value) {
    const parser = new DOMParser();
    this.elm = parser.parseFromString(value, 'text/html').body;
    return this;
  }

  appentTo(parent) {
    parent.appendChild(this.elm);
  }
}