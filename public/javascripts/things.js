async function getThings () {
  const ul = document.getElementById('thingList')
  ul.textContent = ''
  fetch('/api/things')
    .then(response => response.json())
    .then(things => {
      things.forEach(thing => {
        const li = document.createElement('li')
        const thingName = document.createElement('span')
        thingName.innerText = `${thing.name} ${thing.miscNum}`
        li.append(thingName)
        ul.append(li)
      })
    })
    .catch(err => console.log(err))
}

getThings()
