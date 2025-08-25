class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = documennt.querySelector(containerSelector);
  }

  renderItems() {
    this.items.forEach((item) => {
      // cal the renderer, and pass it the item as an argument
    })
}

export default Section;
