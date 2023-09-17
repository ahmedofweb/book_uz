import { createContext } from "react"
import { useState , useEffect } from "react";


const ThemeContext = createContext()


function ContextProvider( {children} ) {
    // const [books, setBooks] = useState([]);
  //   const [url, setUrl] = useState("http://localhost:3000/books");
  //   console.log(url)

  // useEffect(() => {
  //   const request = async (link) => {
  //     const req = await fetch(link);
  //     const data = await req.json();
  //     setBooks(data);
  //   };
  //   request(url);
  // }, [url]);
  // console.log(books);

  const [books, setBooks] = useState([
        {
            "name" : "Rebekka",
            "author" : "No author",
            "info" : "«Rebekka» – Dafna dyu Moryening 1938-yilda yozilgan romani. «Rebekka» muallifga shuhrat keltirgan va uning kult romani hisoblanadi. Ba'zi reytinglar bo'yicha barcha davrlarning eng yaxshi detektiv romani, deya e'tirof etilgan. Ushbu kitob psixologik triller janridagi roman hamdir. Unda yosh qiz badavlat beva erkakka turmushga chiqadi va eri hamda oilasidagilar kabi o'zini ham o'lgan birinchi xotinning xotirasi ta'qib qilishini bilib oladi. Hammaning xotirasida nihoyatda samimiy va juda go'zal ayol sifatida muhrlangan Rebekka aslida kim edi? U bilan bog'liq qanday sirlar bo'lgan? Ularning oshkor bo'lishi asar qahramonlari hayotiga qanday ta'sir ko'rsatadi? Demak, bu kabi savollarning barchasiga qizg'in mutolaa jarayonida javob topasiz. Ushbu kitob romanning ixchamlashtirilgan shakli.",
            "img" : "./rebekka.jpg",
            "year" : 2022 ,
            "favourite" : false ,
            "selected" : false ,
            "price" : 24000 ,
            "status" : "true",
            "type": 'badiiy',
            "id" : 1
        },
        {
            "name" : "Opa-singillar",
            "author" : "Asqad Muhtor",
            "info" : "«Bu gulistonning bog'bonlari g'aroyib insonlar edi. Ularning sardori – bosh muharriri o'zbek adabiyotining klassigi Asqad Muxtor edi. Ulug' inson, ulug' adib, shafqatli murabbiy – u zoti sharif sha'niga mening ojiz bisotimdan munosib so'z topilmaydi. Faqat shuni ilova qilmoqni joiz bilamanki, Asqad Muxtor – adabiyot mohiyatini to'g'ri anglagan va adabiyot xususida fikr almashmoq mumkin bo'lgan juda kam sonli adiblar sirasiga kirardi» – davrimizning zabardast yozuvchilaridan biri Xayriddin Sultonovning Asqad Muxtor haqidagi fikrlari naqadar haqligini birgina «Opa-singillar» mutolaasida ham bilishingiz mumkin. Adibning «Oxirgi jadid» deya e'tirof etilishi ham bejiz emas. Davrning xavotirli mavzularini shijoat bilan yoritgan yozuvchining mazkur asari 1955-yilgi nashri asosida tayyorlandi.",
            "img" : "./opa_singillar.jpg",
            "year" : 2023 ,
            "favourite" : false ,
            "selected" : false ,
            "price" : 59000 ,
            "status" : "false",
            "type": 'badiiy',
            "id" : 2
        },
        {
            "name" : "Lolazor",
            "author" : "Murod Muhammad Do'st",
            "info" : "Bugungi kun kitobxoni kutgan asar – «Lolazor» nihoyat, qo'limizda! Garchi romanning ilk nashri o'tgan asrning so'nggi o'n yilligiga to'g'ri kelsa-da, u o'quvchilar «to'ymagan» asarlardan biri hisoblanadi. Nega? Sabab oddiy – asar voqealari ayni kunimizdan, biz yashayotgan jamiyat «sir»laridan so'zlaydi. Mutolaa davomida qahramonning umr yo'li, faoliyati bilan tanishasiz. Bu yo'lning dastlabki qadamidan to so'ngiga qadar o'quvchi asosiy obrazlardan biri – Yaxshiboyevga hamroh bo'ladi. Yana biri – Oshno bilan do'st tutinadi. Lekin birda hamfikr bo'lsa, birda ularga qarshi chiqadi. Qarshi chiqish bilan esa, tabiiyki, o'quvchi vaziyatni o'zgartirmaydi, aksincha, Oshnoning oshnosiga, Yaxshiboyevning shogirdiga, hatto Qurbonoyning fojiasiga aylanadi. Boshqa yo'l yo'q – istamagan holda o'quvchi o'zining sobit qarashidan voz kechadi! Yana bir ahamiyatli jihati, mutolaa jarayonida asar qahramonlarining ismi shunchaki tanlanmaganiga guvoh bo'lasiz. Hatto Yaxshiboyev o'z shogirdlariga murojaat qilar ekan, ularning familiyasini ism o'rnida ishlatishi bejiz emasligiga amin bo'lasiz. Boshqaruvchi inson, kim bo'lishidan qat'iy nazar, hokimiyat tepasiga kelar ekan, u dastlab olijanoblik va fidoyilikni maqsad qiladi. Borgan joyini bog' qiladimi, gulzor qiladimi, lolazor qiladimi yoki umuman hech narsa – bunisi endi boshqa masala. Asar so'ngida kitobxon mulohazaga cho'madi, bir so'z bilan aytganda, mutolaadan kim nimani izlasa, shuni topadi.",
            "img" : "./lolazor.jpg",
            "year" : 2020 ,
            "favourite" : true ,
            "selected" : false ,
            "price" : 69000 ,
            "status" : "false",
            "type": 'badiiy',
            "id" : 3
        },
        {
            "name" : "Xo'rlangan san'at",
            "author" : "No author",
            "info" : "Bugungi kun kitobxoni kutgan asar – «Lolazor» nihoyat, qo'limizda! Garchi romanning ilk nashri o'tgan asrning so'nggi o'n yilligiga to'g'ri kelsa-da, u o'quvchilar «to'ymagan» asarlardan biri hisoblanadi. Nega? Sabab oddiy – asar voqealari ayni kunimizdan, biz yashayotgan jamiyat «sir»laridan so'zlaydi. Mutolaa davomida qahramonning umr yo'li, faoliyati bilan tanishasiz. Bu yo'lning dastlabki qadamidan to so'ngiga qadar o'quvchi asosiy obrazlardan biri – Yaxshiboyevga hamroh bo'ladi. Yana biri – Oshno bilan do'st tutinadi. Lekin birda hamfikr bo'lsa, birda ularga qarshi chiqadi. Qarshi chiqish bilan esa, tabiiyki, o'quvchi vaziyatni o'zgartirmaydi, aksincha, Oshnoning oshnosiga, Yaxshiboyevning shogirdiga, hatto Qurbonoyning fojiasiga aylanadi. Boshqa yo'l yo'q – istamagan holda o'quvchi o'zining sobit qarashidan voz kechadi! Yana bir ahamiyatli jihati, mutolaa jarayonida asar qahramonlarining ismi shunchaki tanlanmaganiga guvoh bo'lasiz. Hatto Yaxshiboyev o'z shogirdlariga murojaat qilar ekan, ularning familiyasini ism o'rnida ishlatishi bejiz emasligiga amin bo'lasiz. Boshqaruvchi inson, kim bo'lishidan qat'iy nazar, hokimiyat tepasiga kelar ekan, u dastlab olijanoblik va fidoyilikni maqsad qiladi. Borgan joyini bog' qiladimi, gulzor qiladimi, lolazor qiladimi yoki umuman hech narsa – bunisi endi boshqa masala. Asar so'ngida kitobxon mulohazaga cho'madi, bir so'z bilan aytganda, mutolaadan kim nimani izlasa, shuni topadi.",
            "img" : "./ahad.jpg",
            "year" : 2021 ,
            "favourite" : false ,
            "selected" : false ,
            "price" : 55000 ,
            "status" : "true",
            "type": 'comedy',
            "id" : 4
        }
    ])
  return (
    <ThemeContext.Provider value={{ books, setBooks }}>
        {children}
    </ThemeContext.Provider>
  )
}

export {ContextProvider , ThemeContext}