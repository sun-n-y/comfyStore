export function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`check element selector: ${selection}. it is wrong.`);
  }
}
