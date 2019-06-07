* .open-car -- открытие попапа заказа
* .open-consult -- открытие попапа заказ консультации
* .input-validate -- красный текст внутри инпута "Обязательное поле для заполнения"
* .if-empty -- класс для инпута с красным бордером
* .thank -- попап Спасибо


### Install all dependencies
npm i

### Main task for work and automatic build
gulp

### Delete sourcemaps and add localization
gulp deploy

### Create component
gulp make --componentName--option

* without option  --html/scss
* option == 1     --html/sass 
* option == 2     --html/scss/js 
* option == 3     --html/sass/js 
