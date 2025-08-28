class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
  }

  _handleEscapeClose() {
    console.log("key was pressed");
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keyup", this._handleEscapeClose);
  }

  close() {
    // TODO - remove the class from the popup element
    this._popupElement.classList.remove("popup_visible");
    console.log("close method called");
    // TODO - remove the event listener for 'Escape' key press
    document.removeEventListener("keyup", handleEscapeClose);
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });
  }
}
export default Popup;
