  'use strict';

  (function () {
    let URL = 'https://javascript.pages.academy/keksobooking/data';

    window.load = function (onSuccess, onError) {

      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onSuccess(xhr.response);
          //shownSuccess();
        } else {
          onError(xhr.status + ' ' + xhr.statusText);
          //shownError(xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      })

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      })

      xhr.timeout = 10000;

      xhr.open('GET', URL);
      xhr.send();
    };
  })();
