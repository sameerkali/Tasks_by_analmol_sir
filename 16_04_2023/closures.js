let names = 'sameer'

const closures = ()=>{

    function display(){
        console.log(`hay ${names} hows you`)
    }
    let names = 'rais'
    return display
}

const c = closures()
c()