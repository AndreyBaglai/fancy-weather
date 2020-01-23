# fancy-weather

## Задание

Вам необходимо создать приложение - прогноз погоды

### Структура приложения

**Блок 1. Блок контроля**

-   кнопка для переключения фонового изображения
-   кнопка для переключения единиц измерения температуры (°C/°F)
-   строка поиска

**Блок 2. Погода за сегодня**

-   название населённого пункта, название страны
-   текущая дата: день недели в коротком формате, число, месяц, например, Сб 26 октября
-   температура в текущий промежуток времени
-   описание погоды (summary), ощущаемая температура (apparent temperature), скорость ветра(м/с), влажность(%)
-   иконка погоды

**Блок 3. Геолокационные данные**

-   координаты населённого пункта: долгота и широта (в градусах и минутах)
-   карта местности

## Требования к функционалу приложения

-   Когда пользователь открывает приложение, все данные на странице относятся к текущему местоположению пользователя
-   В строке поиска осуществляется поиск по населённому пункту
-   Фоновое изображение изменяется при обновлении страницы или при клике по кнопке для переключения фонового изображения в блоке контроля
-   фоновые изображения генерируются с учётом страны, названия населённого пункта
-   Настройки при первом запуске приложения: единицы измерения температуры – градусы Цельсия
-   переключатель температуры изменяет единицы измерения температуры (°C/°F).

## Технические требования

-   приложение корректно работает в последней версии Chrome
-   можно использовать css-препроцессоры, bootstrap, material design, lodash.js
-   использование jQuery и других js-библиотек не допускается
-   запрещено использование Angular / React / Vue

### Ключевые навыки

-   работа с API
-   получение данных при помощи асинхронных запросов

<details> 
  <summary>API с примерами подключения</summary>
  
**1. Данные о текущем местоположении пользователя**    
- https://ipinfo.io/ 
  - регистрируемся на сайте
  - получаем токен 
  - получаем данные о местоположении пользователя  
  `https://ipinfo.io/json?token=eb5b90bb77d46a` 
  - [API Docs](https://ipinfo.io/developers)

**2. API погоды**

-   Dark Sky
    -   [API Docs](https://openweathermap.org/api)
-   https://darksky.net/
    -   регистрируемся на сайте
        `https://darksky.net/dev/register`
    -   подтверждаем email (переходим по ссылке, которая пришла на почту)
    -   получаем Secret Key
    -   получаем данные о погоде погоде на ближайшие семь дней  
        `https://api.darksky.net/forecast/2bf27985f5a6844febcdc43c99cc81ce/53.5359,27.3400?lang=be`
    -   [API Docs](https://darksky.net/dev/docs)

**3. Фото для фона**

-   https://unsplash.com/developers
    -   регистрируемся на сайте
    -   подтверждаем email (переходим по ссылке, которая пришла на почту)
    -   создаём приложение  
        `https://unsplash.com/oauth/applications`
    -   получаем Access Key
    -   получаем фото для фона, которое меняется при каждом обновлении страницы  
        `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17`
    -   у данного сервиса есть лимит - 50 изображений в час
    -   [API Docs](https://unsplash.com/documentation)
-   https://www.flickr.com/services/ - регистрируемся на сайте - подтверждаем email (переходим по ссылке, которая пришла на почту) - создаём приложение `https://www.flickr.com/services/apps/create/apply/` - получаем API Key - [API Docs](https://www.flickr.com/services/api/) - [The Flickr
    Developer Guide](https://www.flickr.com/services/developer/api/) - Still have questions? Check out [code.flickr.com](https://code.flickr.net/) or the [FAQs](https://help.flickr.com/)! - демонстрационный пример работы с API Flickr [demo](https://flickr-api-test.netlify.com/)
    _Внимание_ у Flickr огромный и не всегда очевидный в работе api, выбирая Flickr, будьте осторожны и терпеливы

**4. Картографические API**

-   MapBox

-   https://www.mapbox.com
    -   регистрируемся на сайте  
        `https://account.mapbox.com/auth/signup/`
    -   подтверждаем email (переходим по ссылке, которая пришла на почту)
    -   получаем Access token  
        `https://account.mapbox.com/`
    -   выбираем понравившийся дизайн  
        `https://docs.mapbox.com/mapbox-gl-js/examples/`
    -   [API Docs](https://docs.mapbox.com/api/maps/)

**5. Геокодирование**

-   OpenCage Geocoder

-   https://opencagedata.com/
    -   регистрируемся на сайте
    -   получаем API key
    -   получаем координаты по названию населённого пункта  
        `https://api.opencagedata.com/geocode/v1/json?q=Minsk&key=c6b6da0f80f24b299e08ee1075f81aa5&pretty=1&no_annotations=1`
    -   [API Docs](https://opencagedata.com/api)
        </details>
