function generate() {

    let colours = ['red', 'green', 'yellow', 'blue', 'pink', 'brown', 'black', 'orange', 'purple']
    
    let random = Math.floor(Math.random() * colours.length)
    let word = colours[random]

    colours.splice(colours.indexOf(word), 1)

    let colour = colours[Math.floor(Math.random() * colours.length)]

    let target = document.getElementById('word')

    target.innerHTML = word
    target.classList.add(colour)

}