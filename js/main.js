const TITLE = 'Дорогие Оля, Полина и София!'
const TEXT1 =
  'Поздравляем вас с весенним праздником 8 марта! Пусть этот день принесет вам море радости, улыбок и теплоты. Пусть каждый цветок, каждый лучик солнца напоминают вам о вашей неповторимой красоте и уникальности.'
const TEXT2 =
  'Пусть ваши сердца наполняются любовью и теплом, а каждый день приносит новые возможности и счастливые моменты. Пусть ваши мечты сбудутся, а каждый шаг приведет к успеху.'
const TEXT3 =
  'С праздником весны, с 8 марта! Пусть ваш день будет ярким, нежным и наполненным радостью.'
const TEXT4 = 'SmartDocs Team'

const img = new Image()
img.src = 'content/petals.gif'
img.classList.add('img')
img.onload = async function () {
  document.body.insertAdjacentElement('afterbegin', img)
  document.querySelector('.wrapper').innerHTML = `
    <div class="container">
      <div>
        <h1 class="title"></h1>
        <p class="text text1"></p>
        <p class="text text2"></p>
        <p class="text text3"></p>
      </div>
      <p class="author"></p>
    </div>
  `
  const titleEl = document.querySelector('h1')
  const textEl1 = document.querySelector('.text1')
  const textEl2 = document.querySelector('.text2')
  const textEl3 = document.querySelector('.text3')
  const textEl4 = document.querySelector('.author')
  await tapText(TITLE, titleEl)
  await tapText(TEXT1, textEl1)
  await tapText(TEXT2, textEl2)
  await tapText(TEXT3, textEl3)
  tapText(TEXT4, textEl4)
}

function tapText(text, htmlElement) {
  const INTERVAL = 70
  let index = 0
  const textArr = [...text]
  const max = textArr.length

  return new Promise(resolve => {
    const intervalId = setInterval(() => {
      if (index === max) {
        clearInterval(intervalId)
        return resolve()
      }
      htmlElement.textContent += textArr[index]
      index++
    }, INTERVAL)
  })
}
