const role = "staff"

function person(name, callback) {
    console.log(`Proses data karyawan ${name} .....`)
    setTimeout(()=> {
        callback({name, role})
    },1500)
}

person("egi", function(response) {
    console.log(response)
})


// // case 2:

// // Anggap ini adalah data yang ada di dalam database 
const data = [1, 2, 3]

function hapusData() {
    setTimeout(function () {
        // hapus salah satu data
        data.pop();
    }, 500);
}

function tampilData() {
    setTimeout(function () {
        // tampilkan semua data
        console.log(data)
    }, 300);
}

hapusData()
tampilData()

// penyederhanaan case 2 
function hapusData(callback) {
    setTimeout(function () {
        // remove value dari array data
        data.pop();
        // panggil function tampilData
        callback()
    }, 500);
}

hapusData(function tampilData() {
    setTimeout(function () {
        // tampilkan value dari array data
        console.log(data)
    }, 300);
})