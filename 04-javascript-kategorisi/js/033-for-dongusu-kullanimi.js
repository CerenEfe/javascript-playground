// For Dongusu
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Guide/Loops_and_iteration

// for ([başlangıçAtaması]; [koşulİfadesi]; [arttırımİfadesi]) {
// yapilacak islem
// }

// let users = ["Lorem", "Ipsum", "Dolor", ]

// for (let index = 0; index < 10; index++) {
//   console.log(index)
// }

// let index = 0

// for (; index < 10; index++) {
//   console.log(index)
// }


let users = ["Lorem", "Ipsum", "Dolor"]

const userListDOM = document.querySelector("#userList")

for (let index = 0; index < users.length; index++) {

    // yeni li oluştur
    const liDOM = document.createElement("li")

    // dizideki elemanı li içine yaz
    liDOM.innerHTML = users[index]

    // li'yi ul içine ekle
    userListDOM.appendChild(liDOM)
}


