export function validForm(href, title) {
  if (title !== '' && href === '') {
    document.getElementById('inpitLink').classList.add('is-invalid');
    document.getElementById('inpitLink').placeholder = 'Поле не может быть пустым';
  } else {

    if (this.title === '') {
      // Загружаем Заголовок с интернета
      // this.title = ...
    }

    document.getElementById('inpitLink').classList.remove('is-invalid');
    document.getElementById('inpitLink').placeholder = 'Insert Link';
  }
}