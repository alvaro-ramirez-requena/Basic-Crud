const form = document.getElementById("form")
let crud = document.getElementById("data-crud")
let data = []
let numfix = null

form.addEventListener('submit', getData)

function getData() {
    event.preventDefault()
    const name = document.getElementById("name").value
    const number = document.getElementById("number").value
    const curso = document.getElementById("cursos").value

    if (numfix == null) {

        data.push({ name, number, curso })

        document.getElementById("name").value = ""
        document.getElementById("number").value = ""
        document.getElementById("cursos").value = ""
    } else {
        data[numfix] = { name, number, curso }
        numfix = null
    }


    fill()
}

const fill = () => {
    crud.innerHTML = ""
    data.map((dat, index) => {
        const row =
            `
            <div class="container-admin">
                <div class="container-dat">
                    <span>${dat.name}</span>
                    <span>${dat.number}</span>
                    <span>${dat.curso}</span>
                </div>
                <div class="container-buttons">  
                    <button onclick="edit(${index})" class="button-edit">Editar</button>
                    <button onclick="del(${index})" class="button-del">Eliminar</button>
                </div>
            </div>
            
        
        `
        crud.innerHTML += row
    })
}

const del = (index) => {
    const newdata = data.filter((dat, i) => i != index)
    data = newdata
    fill()

}

const edit = (index) => {
    numfix = index
    document.getElementById("name").value=data[index].name
    document.getElementById("number").value=data[index].number
    document.getElementById("cursos").value=data[index].curso
}

