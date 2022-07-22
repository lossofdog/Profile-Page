
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('img')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('src', './assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

let description = document.createElement('h3')
description.append('Description:')
dogDetails.append(description)

let p = document.createElement('p')
p.textContent = 'This is some text placeholder'
dogDetails.append(p)

let desc2 = document.createElement('h3')
desc2.append('Feeding Times:')
dogDetails.append(desc2)

let ul = document.createElement('ul')
let times = ['9:00am','12:00pm']
for (let i = 0; i<times.length;i++){
    li = document.createElement('li')
    li.append(times[i])
    ul.append(li)
}

dogDetails.append(ul)


