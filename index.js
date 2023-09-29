const role = "staff"

function person(name, callback) {
    console.log("Proses karyawan .....")
    setTimeout(()=> {
        callback({name, role})
    },1500)
}

person("egi", function(response) {
    console.log(response)
})