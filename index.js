const role = "staff"
const picture = ["profile1.jpg", "profile2.jpg", "profile3.jpg"]
const listKaryawan = ["Joko", "Budi", "Sinta"]

function person(name, callback) {
    console.log(`Proses data karyawan ${name} .....`)
    setTimeout(()=> {
        callback({name, role})
    },1500)
}

function getPicture(listKaryawan, callback) {
    console.log('processing picture now ....');
    if (listKaryawan.length > 0) {
        setTimeout(() => {
            callback({pict: picture})
        },1000)
    }
}

function getKaryawan(role, callback) {
    console.log('processing karyawan now ....');
    if (role) {
        setTimeout(() => {
            callback({karyawan: listKaryawan})
        }, 1000)
    }
}

person("egi", function(response) {
    const {role} = response
    getKaryawan(role, function (response2) {
        const {karyawan} = response2
        getPicture(karyawan, function(response3){
            const {pict} = response3
            console.log(pict) 
        } )
    })
})