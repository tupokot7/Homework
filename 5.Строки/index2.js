/* В прошлом задании вы написали текст и подставили в него ваши данные.Сейчас вы продолжите работу с этим текстом,
поэтому сохраните его в переменную с let под названием “myInfoText”.
   Вам требуется выполнить следующие шаги по порядку:
1. C помощью метода replaceAll и toUpperCase вам необходимо изменить в переменной myInfoText все слова “JavaScript” на те же слова,
только с прописными буквами (“JAVASCRIPT”). Присвойте переменной myInfoText новое значение с измененными словами “JavaScript”.
2. Выведите итоговую строку myInfoText в консоль.
3. Выведите в консоль длину строки myInfoText.
4. Выведите в консоль первый и последний символы строки myInfoText.Чтобы получить индекс последнего символа, требуется от длины
 строки вычесть единицу. */
const myName = 'Владимир';
const programmingLanguage = 'JavaScript';
const courseCreatorName = 'Владилена Минина';
const reasonText = 'хочу работать, независя от моего местоположения';
const numberOfMonth = 2;

let myInfoText = `Всем привет! Меня зовут, ${myName}.
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяца.
Я уверен, что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase()); // 1-й пункт
console.log('myInfoText:', myInfoText);                         // 2-й
console.log('length:', myInfoText.length);                      // 3-й
console.log('1-й символ:', myInfoText[0]);                      // 4-й
console.log('последний:', myInfoText[myInfoText.length - 1]);    // 4-й