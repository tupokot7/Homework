/* Вам необходимо создать функцию getDivisorsCount, которая будет высчитывать количество делителей для 
переданного числа.Она принимает в себя единственный параметр number.По умолчанию он должен быть равен 1.
Если number меньше нуля либо является не целым(можно проверить при помощи функции Number.isInteger(number)),
то выводите в модальное окно при помощи alert сообщение “number должен быть целым числом и больше нуля!”.
Примеры:
getDivisorsCount(4) // Вернет 3 (делители - 1, 2, 4)
getDivisorsCount(5) // Вернет 2 (делители - 1, 5)
getDivisorsCount(12) // Вернет 6 (делители - 1, 2, 3, 4, 6, 12)
getDivisorsCount(30) // Вернет 8 (делители - 1, 2, 3, 5, 6, 10, 15, 30)*/
function getDivisors(number = 1) {
   if (!Number.isInteger(number) || number < 0) {
      alert('number должен быть целым числом и больше нуля!');
   } else {
      let counter = 0;
      for (let i = number; i > 0; i -= 1) {
         const isDivisor = number % i === 0;
         if (isDivisor) {
            counter += 1;
         }
      }

      return counter;
   }
}

const result = getDivisors(10);
console.log('result', result);