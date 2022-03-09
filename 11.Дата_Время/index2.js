/* День рождения - это знаменательный праздник для каждого человека.А когда день рождения у вас ?
Уверен, что вы помните эту дату.А сколько дней осталось до вашего дня рождения ? А вот это уже посложнее.
Сейчас ваша задача состоит в том, чтобы создать функцию getDaysBeforeBirthday, которая будет возвращать 
количество дней до следующего дня рождения.Данная функция должна принимать 1 параметр nextBirthdayDate,
который является объектом даты и указывает на дату вашего ближайшего дня рождения.Год стоит указывать 
ближайший к текущей дате, а не год вашего рождения.
Также рекомендуется создать вспомогательную функцию convertMsToDays, которая переводит миллисекунды в дни.
Для округления итогового числа используйте Math.round. */
const convertMsToDays = (ms) => Math.round(ms / 1000 / 60 / 60 / 24);

const getDaysBeforeBirthday = (birthdayDate) => {
   const currentDateMs = Date.now();
   const birthdayDateMs = birthdayDate.getTime();
   return convertMsToDays(birthdayDateMs - currentDateMs);
}

console.log(getDaysBeforeBirthday(new Date(2021, 11, 10)));