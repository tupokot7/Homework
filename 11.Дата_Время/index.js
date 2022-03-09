/* Часто мы записываем даты в следующем формате “день.месяц.год”. Сейчас вам необходимо создать функцию
getDateFormat, которая будет приводить дату к этому формату.Она принимает 2 параметра:
date - объект даты, который нужно перевести в данный текстовый формат “день.месяц.год”
separator - разделитель дня, месяца и года.По умолчанию он должен быть равен точке “.” Если в качестве 
разделителя будет передано тире “-”, то формат уже должен быть таким “день - месяц - год”
Также, учтите, что номер месяца в JavaScript считается с 0 до 11. Кроме этого, если день либо месяц 
возвращают однозначное число, то вам к нему необходимо добавить 0. То есть результат должен быть не
таким “5.5.2001”, а “05.05.2001”. */
const addZero = (numberStr) => String(numberStr).length === 1 ? `0${numberStr}` : String(numberStr);

const getDateFormat = (date, separator = '.') => {
   const dateItem = date.getDate();
   const month = date.getMonth();
   const year = date.getFullYear();
   const dateArray = [dateItem, month + 1, year].map((item) => addZero(item));
   console.log('dateArray', dateArray)

   return dateArray.join(separator);
}

console.log(getDateFormat(new Date()));