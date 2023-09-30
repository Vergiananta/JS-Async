const role = "staff"
const picture = ["profile1.jpg", "profile2.jpg", "profile3.jpg"]
const listKaryawan = ["Joko", "Budi", "Sinta"]

function person(name) {
    console.log(`Proses data karyawan ${name} .....`)
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            if (name !== "egi") {
                reject("Bukan user egi")
            }
            resolve({name, role})
        },1500)
    })
}

function getPicture(listKaryawan) {
    console.log('processing picture now ....');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (listKaryawan.length > 0) {
                resolve({pict: picture})
                } else {
                    reject("data karyawan tidak ada")
                }
            },1000)
    })
}

function getKaryawan(role) {
    console.log('processing karyawan now ....');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (role !== 'staff') {
                reject("role tidak sesuai")
            }
            resolve({karyawan: listKaryawan})
            }, 1000)
    })
}

const user = person("egi")
user.then((data)=> {
    const {name, role}= data
    getKaryawan(role).then((response) => {
        const {karyawan} = response
        getPicture(karyawan).then((response3) => {
            const {pict} = response3
            console.log(pict)
        })
    })
})