// Объект с книгами и количеством страниц
const books = {
  'РПП (A)': 1054,
  'РПП (B)': 531,
  'FCOM': 1686,
  'FCTM': 424,
  'QRH': 548
};

// Получаем элементы из DOM
const button = document.getElementById('randomButton');
const resultDiv = document.getElementById('result');

// Функция для получения случайного числа в заданном диапазоне
function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

// Обработчик события клика по кнопке
button.addEventListener('click', () => {
  // Добавляем анимацию кнопке
  button.classList.add('clicked');

  // Убираем предыдущий результат
  resultDiv.classList.remove('show');
  resultDiv.textContent = '';

  // Через небольшую задержку выполняем выбор книги и страницы
  setTimeout(() => {
    // Получаем массив названий книг
    const bookNames = Object.keys(books);

    // Выбираем случайную книгу
    const randomBook = bookNames[Math.floor(Math.random() * bookNames.length)];

    // Получаем количество страниц в выбранной книге
    const pageCount = books[randomBook];

    // Выбираем случайную страницу
    const randomPage = getRandomInt(pageCount);

    // Отображаем результат
    resultDiv.textContent = `Книга: ${randomBook}, Страница: ${randomPage}`;
    resultDiv.classList.add('show');

    // Убираем класс анимации с кнопки
    button.classList.remove('clicked');
  }, 500);
});
