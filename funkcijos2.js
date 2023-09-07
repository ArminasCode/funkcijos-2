//Sukurti žemiau nurodytas funkcijas:

//8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą(minutes, valandas, savaites, mėnesius arba metus):
//8.1.Funkcija priima du argumentus:
//8.1.1.Dienų skaičių.
//8.1.2.Formatą.Galimos formato reikšmės yra:
//8.1.2.1.minutes
//8.1.2.2.hours
//8.1.2.3.weeks
//8.1.2.4.months
//8.1.2.5.years
//8.2.Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

function converter(days, format) {
  let minutes = days * 24 * 60
  let hours = days * 24
  let weeks = days / 7
  let months = days / 30
  let years = days / 360

  if (format === 'minutes') {
    console.log(minutes)
  }
  else if (format === 'hours') {
    console.log(hours)
  }
  else if (format === 'weeks') {
    console.log(weeks)
  }
  else if (format === 'months') {
    console.log(months)
  }
  else if (format === 'years') {
    console.log(years)
  }

}
converter(180, 'weeks')


//9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
//9.1.Funkcija priima du argumentus:
//9.1.1.Skaičių, kuris bus dalinamas(dalinys).
//9.1.2.Skaičių, iš kurio bus dalinama(daliklis).
//9.2.Funkcija grąžina atsakymą tokiu formatu:
//9.2.1.Jeigu dalinasi: 10 dalinasi iš 5.
//9.2.2.Skaičius 11 nesidalina iš 5. Liekana yra 1.

function dalintuvas(dalinys, daliklis) {

  let atsakymas = dalinys % daliklis
  if (atsakymas === 0) {
    console.log(`skaicius ${dalinys} dalinasi is ${daliklis}`)
  }
  else if (atsakymas !== 0) {
    console.log(`skaicius ${dalinys} nesidalina is ${daliklis} ir jo trumpmena yra ${atsakymas}`)
  }
}
dalintuvas(10, 2)

//10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.

function checkIfOdd(text) {
  let checkedText = text.length % 2

  if (checkedText === 1) {
    console.log(`įvestas tekstas turi neporini raidžių skaičių`)
  }
  else if (checkedText === 0) {
    console.log(`įvestas tekstas turi porini raidžių skaičių`)
  }
}
checkIfOdd('labas')
checkIfOdd('sveika')


//11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
//11.1.Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
//11.2.Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

//11.3.Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti //8.

//11.4.Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.


function getLetter(text, num) {

  let selectedLetter = text.charAt(num - 1)
  let negativeNumber = text.charAt(text.length + num);

  if (text.length < num) {
    console.log(`Tekstas "${text}" turi 5 simbolius, o jūs nurodėte grąžinti "${num}.`)
  }
  else if (num < 0) {
    console.log(`Teksto ${text} ${num} raidė yra ${negativeNumber}`)
  }
  else {
    console.log(`Teksto ${text} ${num} raidė yra ${selectedLetter}`)
  }
}
getLetter('labas', -3)



