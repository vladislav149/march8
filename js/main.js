const text =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptatem dolorem ipsum hic minima ipsa culpa. Cupiditate ducimus dignissimos quaerat iure et, assumenda, a incidunt ab obcaecati ipsa atque! Omnis?'
const textArr = [...text]
let index = 0
const max = textArr.length

const textEl = document.querySelector('.text')

const a = new Image()
a.src = 'content/q.gif'
a.classList.add('img')
a.onload = function () {
  document.body.insertAdjacentElement('afterbegin', a)
  const interval = setInterval(() => {
    if (index === max) {
      clearInterval(interval)
      return
    }
    textEl.textContent += textArr[index]
    index++
  }, 100)
}
