// 1 Installasi Babel

// class  Test{
    
// }
// console.log(Test);

// 2 Var, Let And Const

//// a var
// var nama = 'angga';
// var nama = 'ahmad';
// console.log(nama);

//// b let
// let nama = 'angga';
// let nama = 'ahmad';
// console.log(nama);

// let dalam scope
// let nama = 'angga';
// {
//     let nama = 'ahmad';
//     console.log(nama);
// }

// console.log(nama);

//// c const
// const person = {
//     id: 1,
//     nama: 'khoirul'
// };

// const person = {
//     id: 1,
//     nama: 'khoirul'
// };

// console.log(person);

// const merubah variabel
// const person = {
//     id: 1,
//     nama: 'khoirul'
// };

// person.id = 1741720051;
// person.age = 20;

// console.log(person);

// 3 Arrow
// var members = ['khoirul', 'Agmad', 'Angga'];
// members.forEach(function(member){
//     console.log(member)
// })

// hilangkan kurung pada member jika ada 1 parameter
// var members = ['khoirul', 'Agmad', 'Angga'];
// members.forEach(member =>{
//     console.log(member)
// })

// coba menggunakan map
// let members = ['Khoirul', 'Ahmad', 'Angga'];

// let membersindex = members.map((member, index) =>{
//     return member + ' ' + index;
// })

// console.log(membersindex);

// tidak perlu menggunakan return ketika menggunakan map di Arrow
// let members = ['Khoirul', 'Ahmad', 'Angga'];

// let membersindex = members.map((member, index) =>
//     member + ' ' + index
// )

// console.log(membersindex);

// 4 Deffault Parameter
// createTag = (title, tag) => {
//     console.log('Forum: ' + title + 'Punya Tag: ' + tag)
// }

// createTag('tampilan rusak', 'css')

// pada js yang lama ketika memberi nilai default dengan ini
// createTag = (title, tag) => {
//     tag = tag || 'css' //disini saya mencontohkan memberi nilai default tag saja
//     console.log('Forum: ' + title + 'Punya Tag: ' + tag)
// }

// createTag('tampilan rusak')

// memberi nilai default dengan ES6
// createTag = (title = 'tampilan rusak', tag = 'css') => {
////    tag = tag || 'css' //disini saya mencontohkan memberi nilai default tag saja
//     console.log('Forum: ' + title + 'Punya Tag: ' + tag)
// }

// createTag() // disini dikosongkan karena saya membuat 2 nilai default

// ataupun bisa dengan cara ini 
// generateTitle = () => {
//     return 'tampilan rusak'
// }

// createTag = (title = generateTitle(), tag = 'css') => {
//     //tag = tag || 'css'
//     console.log ('Forum: ' + title + 'Punya Tag: ' + tag)
// }

// createTag()

// 5 Rest dan Spread
// signIn = (username, password) =>{
//     console.log(username + " Passwordnya: " + password)
// } 

// let data = ['Khoirul', 'Laylay']
// signIn(data[0], data[1])


//pada es6 dipermudah menjadi
// signIn = (username, password) =>{
//     console.log(username + " Passwordnya: " + password)
// } 

// let data = ['Khoirul', 'Laylay']
// signIn(...data)

// 6 Template Literal
// let username = 'khoirul'
// let umur = 20

// let text = "Member " + username + " umurnya " + umur

// console.log(text)

//dengan es6 kita ubah semuanya menjadi array
// let username = 'khoirul'
// let umur = 20

// let text = `Member ${username} umurnya ${umur}`

// console.log(text)

// keluaran beberapa baris
// let username = 'khoirul'
// let umur = 20

// let div = `
//     ${username}
//     ${umur}
// `

// console.log(div)

//7 Shorthand dan Destructuring Object
//// a Shorthand
// name = 'Khoirul'
// umur = 20

// let member = {
//     name : name,
//     umur : umur
// }

// console.log(member)

// setelah disingkat
// name = 'Khoirul'
// umur = 20

// let member = {
//     name,umur
// }

// console.log(member)

// menggunakan fungsi
// name = 'Khoirul'
// umur = 20
// getData = () => {
//     return `member ${name} umurnya ${umur}`
// }

// let member = {
//     name,umur,getData
// }

// console.log(member.getData())

//// b Destructuring Object
// let member = {
//     name : 'Khoirul',
//     umur : 20
// }

// let {umur, name} = member

// console.log(name)

// untuk mengubah nama
// let member = {
//     name : 'Khoirul',
//     umur : 20
// }

// let {umur : age, name} = member

// console.log(age)

// untuk array
// let angka = [2, 3, 5]
// let [a, b, c] = angka
// console.log(a + b * c)

// 8 Class
//// class biasa
// class Members {
//     constructor(name) { //Menggunakan constructor
//         this.name = name
//     }
// }

// let member = new Members('Khoirul')
// console.log(member)

//tidak menggunakan constructor
// class Members {
//     getMember(name) {
//         return 'namanya ' + name
//     }
// }


// let member = new Members()
// console.log(member.getMember('Khoirul'))

// menggunakan constructor dan fungsi
// class Members {
//     constructor(name, umur) { //Menggunakan constructor
//         this.name = name
//         this.umur = umur
//     }
//     getData(name) { // menggunakan fungsi
//         return `namanya ${this.name} umurnya ${this.umur}`
//     }
// }


// let member = new Members('Khoirul', '20')
// console.log(member.getData())

// fungsi static
// class Members {
//     constructor(name, umur) { //Menggunakan constructor
//         this.name = name
//         this.umur = umur
//     }

//     static getUmur() {
//         return 'Umurnya 20'
//     }
// }
// console.log(Members.getUmur())

// 9 Webpack
// const test = 'Khoirul'
// console.log(test)

// 10 Import Eksport 
// import {user} from './app/member'

// console.log(user)

// 2 variabel
// import {user, forum} from './app/member'

// console.log(user)
// console.log(forum)

// import semua file
import * as app from './app'

console.log(app.user, app.forum)
