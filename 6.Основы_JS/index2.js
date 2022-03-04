/* Сейчас вы создадите небольшой тест по математике для учеников начальных классов.
В тесте всего 5 вопросов:
1. Сколько будет 2 + 2 ?
2. Сколько будет 2 * 2 ?
3. У Пети было 5 яблок. 3 из них он съел, 1 отдал другу.Сколько яблок у Пети осталось ?
4. У Маши было 10 конфет. 2 она съела, 1 отдала другу.После мама дала Маше еще 5 конфет.
Сколько в итоге конфет осталось у Маши ?
5. Сколько будет 2 + 2 * 2 ?
Вам необходимо помочь ученикам начальных классов, поэтому сделаем для них тест, который 
проверит их знания математики.
Каждый вопрос и заранее подготовленный правильный ответ(ответы должны быть типом данных number) 
сохраняйте в переменные.Вопросы выводите с помощью функции prompt и также сохраняйте значение 
введенные пользователем в отдельные переменные.
Если ответ был дан правильно, то отобразите сообщение “Ответ Верный” при помощи alert,
иначе - “Ответ Неверный”. Если даже ответ был дан неправильно, то пользователь все равно должен 
быть перенаправлен на следующий вопрос.
Также вам необходимо вести счет правильных и неправильных ответов.Сохраняйте эти данные в переменные 
correctAnswers и incorrectAnswers соответственно.После выполнения теста с помощью alert выведите
сообщение “Конец теста! Правильные ответы - correctAnswers; Неправильные ответы - incorrectAnswers.”
(замените correctAnswers и incorrectAnswers на итоговые значения).
ПРИМЕЧАНИЕ: учтите, что prompt возвращает тип данных string, а значения, которые должны хранится в 
переменных с ответами - это тип данных number. */

const question1 = 'Сколько будет 2 + 2 ?';
const question2 = 'Сколько будет 2 * 2 ?';
const question3 = 'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу.Сколько яблок у Пети осталось ?';
const question4 = 'У Маши было 10 конфет. 2 она съела, 1 отдала другу.После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши ?';
const question5 = 'Сколько будет 2 + 2 * 2 ?';

const answer1 = 4;
const answer2 = 4;
const answer3 = 1;
const answer4 = 12;
const answer5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

const userAnswer1 = prompt(question1);
if (Number(userAnswer1) === answer1) {
   alert('Ответ Верный');
   correctAnswers += 1;
} else {
   alert('Ответ Неверный');
   incorrectAnswers += 1;
}

const userAnswer2 = prompt(question2);
if (Number(userAnswer2) === answer2) {
   alert('Ответ Верный');
   correctAnswers += 1;
} else {
   alert('Ответ Неверный');
   incorrectAnswers += 1;
}

const userAnswer3 = prompt(question3);
if (Number(userAnswer3) === answer3) {
   alert('Ответ Верный');
   correctAnswers += 1;
} else {
   alert('Ответ Неверный');
   incorrectAnswers += 1;
}

const userAnswer4 = prompt(question4);
if (Number(userAnswer4) === answer4) {
   alert('Ответ Верный');
   correctAnswers += 1;
} else {
   alert('Ответ Неверный');
   incorrectAnswers += 1;
}

const userAnswer5 = prompt(question5);
if (Number(userAnswer5) === answer5) {
   alert('Ответ Верный');
   correctAnswers += 1;
} else {
   alert('Ответ Неверный');
   incorrectAnswers += 1;
}

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);