/* 1)promdtan ism va yoshkiritilsa kiritilgan yosh orqali ushbu
 ma'lumotlar hisoblanishi kerak:
tug'ilgan yil (1998), yashagan oy, hafta, kun soat, daqiqa,sekund */

// let ism = prompt('Ismingizni kiritin:')
// let yosh = +prompt('yoshinizni kiriting:')

// const yil = 2025- yosh
// const oy = yosh * 12
// const kun = yosh * 365
// const hafta = (kun / 7).toFixed(0)
// const soat = kun * 24
// const daqiqa = soat * 60
// const sekund = daqiqa * 60


// const result = `Qadirli ${ism}. Siz ${yil} yilinchi tugilgasiz.Yana siz ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat , ${daqiqa} daqiqa, ${sekund} sekund yashagansiz.`
// alert(result)


/* 2) -ismlar arrayi ichidan soralayotgan ism bolsa unda ha bunday ism bor
agar bolmasa afsus bunday ism yoq degan yozuv chiqarishi kerak.*/

// const ismlar =['Ahror','Sardor','Doniyor']

// let ism = prompt('Ismingizni kiritin:')

// if (ismlar.includes(ism)){
//     alert(`${ism} bor`)
// }else{
//     alert(`Afsuski ${ism},yoq`)
// }


/* 3) array ichidagi ismlarnining oxiriga bek qochimchasini qoshin.Va consolega chiqaring */

// const ismlar =['Ahror','Sardor','Doniyor']
// // for loop
// // for (let i = 0; i<ismlar.length; i++) {
// //     const result = ismlar[i] + 'bek'
// //     console.log(result);

// // }

// //while loop

// let i = 0; 

// while(i<ismlar.length){
//     const result = ismlar[i] + 'bek';
//     console.log(result);

//     i++;
// };


/* 4) promptdan kiritilgan viloyat nomi orqali viloyatda qancha aholi borligini
chiqarsin */

// const  viloyotNomi = prompt('Qaysi viloyat kerak ?')

// switch(viloyotNomi){
//     case 'qoragolpogiston'  :
//         alert('Qaraqolpoqda 10.5 mln aholi bor')
//         break;
//     case 'Tashkent':
//         alert('Tashkentda 11.2 mln aholi bor')
//         break;
//     case 'Fargona':
//         alert('Fargona da 12.5 mln aholi bor')
//         break;
//     default:
//         alert(` Hozicha bazada ${viloyotNomi} viloyat nomi mavjud emas`)
// }

/* promptdan kiritilgan belgilar soni meyoridan oshsa qancha oshagni va qancha yozgan,
agar meyoridan kam yozilgan bolsan qancha yozgani va qancha yozgan va qancha  yana belgi kiritilsihi kerakligini 
aytishi kerak */


let meyor = 20

let yozganBelgi = +prompt('Belgilar  kiritin:')

if (yozganBelgi.length > meyor) {
    alert(`Siz ${meyor}ta belgi kiritishiniz mumkin, lekin hozirda ${yozganBelgi.length}ta belgi kiritiniz. BU meyoridan ${yozganBelgi.length - meyor}ta kop.`)
}else{
    alert(`Siz ${meyor}tabelgi kiritishiniz mumkin, va hozirda ${yozganBelgi.length}ta belgi kiritiniz. Yana  ${meyor - yozganBelgi.length}ta kop.`)
}