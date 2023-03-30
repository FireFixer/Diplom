const checkbox = document.getElementById('darkSwitch');
const switchmode = document.querySelectorAll('.switchmode');

// Проверяем значение в localStorage и устанавливаем checkbox соответствующим образом
if (localStorage.getItem('darkSwitch') === 'on') {
  checkbox.checked = true;
  switchmode.forEach(element => {
    element.classList.remove('text-light');
    element.classList.add('text-dark');
  });
  document.documentElement.setAttribute('data-bs-theme', 'light');
} else {
  checkbox.checked = false;
  switchmode.forEach(element => {
    element.classList.add('text-light');
    element.classList.remove('text-dark');
  });
  document.documentElement.setAttribute('data-bs-theme', 'dark');
}

// Добавляем обработчик события change к элементу checkbox
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    localStorage.setItem('darkSwitch', 'on');
    switchmode.forEach(element => {
      element.classList.remove('text-light');
      element.classList.add('text-dark');
    });
    document.documentElement.setAttribute('data-bs-theme', 'light');
  } else {
    localStorage.setItem('darkSwitch', 'off');
    switchmode.forEach(element => {
      element.classList.add('text-light');
      element.classList.remove('text-dark');
    });
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }
});