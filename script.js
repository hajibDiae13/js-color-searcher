let container = document.querySelector('.color-container');
let colors = []
for(let i=0; i<15; i++)
{
    let current = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    current = numberToColor(current)
    let d = document.createElement('div')
    d.classList.add("card")
    d.classList.add(current)
    colors.push({element:d,color:current});
    container.append(d)
}

function numberToColor(current){
    if(current == 1) return "green"
    if(current == 2) return "red"
    if(current == 3) return "yellow"
    if(current == 4) return "orange"
    if(current == 5) return "cyan"
    if(current == 6) return "purple"
}

let searchbar= document.querySelector('#search')
searchbar.addEventListener("input",()=>{
    container.innerHTML =""
    for(let i=0; i <colors.length ; i++)
    {
        if(colors[i].color.includes(searchbar.value))
        {
            container.append(colors[i].element)
        }
    }
})