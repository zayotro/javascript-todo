const template = document.getElementById("task-item-template");
const templateContent = template.content;

class TaskItem extends HTMLElement {
  constructor() {
    super();

    const clonedNode = templateContent.cloneNode(true);

    const titleSlot = clonedNode.querySelector('slot[name="title"]');
    titleSlot.textContent = this.getAttribute("title");

    const dateSlot = clonedNode.querySelector('slot[name="date"]');
    dateSlot.textContent = this.getAttribute("date");

    this.parentElement.appendChild(clonedNode);
  }
}

customElements.define("task-item", TaskItem);
