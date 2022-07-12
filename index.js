function newImage (url, left, bottom){
    const character = document.createElement('img')
    character.src = url
    character.style.position = 'fixed'
    character.style.left = left +'px'
    character.style.bottom = bottom +'px'
    document.body.append(character)
    return character
}

function newCharacter (url, left, bottom){
    const character = newImage(url, left, bottom)
    character.addEventListener('dblclick', () => {
       character.remove();
    })
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/sword.png', 500, 405)
newImage('assets/sheild.png', 165, 185)
newImage('assets/staff.png', 600, 100)
