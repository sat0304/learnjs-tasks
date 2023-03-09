'use strict';

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  let tmp = list;

  while (tmp) {
    alert(tmp.value);
    tmp = tmp.next;
  }

}

printList(list);

function printListRecurcion(list) {

  alert(list.value); // выводим текущий элемент

  if (list.next) {
    printListRecurcion(list.next); // делаем то же самое для остальной части списка
  }

}

printListRecurcion(list);
