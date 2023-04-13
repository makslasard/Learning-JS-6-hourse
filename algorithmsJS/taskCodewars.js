function stray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (i !== i) {
      return i
    }
  }
}
stray([1, 1, 2, 1, 1])

// Рандомный цвет в формате RGB
const randomColor = (min, max) => {
  const colorOne = Math.floor(Math.random() * (max - min + 1)) + min
  const colorSecond = Math.floor(Math.random() * (max - min + 1)) + min
  const colorThree = Math.floor(Math.random() * (max - min + 1)) + min

  return `rgb(${colorOne}, ${colorSecond}, ${colorThree})`
}
randomColor(0, 255)