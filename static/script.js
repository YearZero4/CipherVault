function copy() {
 const preElement = document.querySelector('pre');
 const textarea = document.createElement('textarea');
 textarea.value = preElement.textContent;
 document.body.appendChild(textarea);
 textarea.select();
 try {
  document.execCommand('copy');
  alert('Texto copiado al portapapeles');
 } catch (error) {
  console.error('Error al copiar el texto: ', error);
  alert('Error al copiar el texto');
 }
 document.body.removeChild(textarea);
}
document.getElementById('copy').addEventListener('click', (event) => {
copy();
});
