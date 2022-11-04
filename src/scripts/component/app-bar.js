class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = "<h3>Data Cuaca di Indonesia</h3>";
  }
}

customElements.define("app-bar", AppBar);

