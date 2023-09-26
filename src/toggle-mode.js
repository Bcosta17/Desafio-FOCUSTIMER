let darkMode = true

const buttonToggleEl = document.getElementById('toggle-mode')

buttonToggleEl.addEventListener('click', (event) => {
  document.documentElement.classList.toggle('light')
  const mode = darkMode ? 'light' : 'dark'

  event.currentTarget
      .querySelector('span').textContent = `${mode} mode ativado`

    darkMode = !darkMode
})