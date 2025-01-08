//Template string

const title = 'Rastamojka qachon ochiladi?! yohud manapoliya respublikasi'
const author = 'Lagmon Markazi'
const likes = 35000000000

let result = 'Bu post nomi ' + title + ' ' + author + ' tamonidan yozilgan.' + 'Va bu postda ' + likes + ' ta layk bor'

console.log(result);

// template way

let result2 = `Bu post nomi ${title}, ${author} tamonidan yozilgan. Va bu postda ${likes} ta layk bor`

console.log(result2);