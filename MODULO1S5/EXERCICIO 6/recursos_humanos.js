const btnTable = document.getElementById('btn-table')


function displayTable(event){
    
    const table = document.getElementById('table')

    table.style.display = 'block'
    console.log(event)

}



btnTable.addEventListener('click', displayTable)


// export {displayTable}