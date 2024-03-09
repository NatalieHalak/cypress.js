// 1.Проверка на позитивный кейс авторизации (правильный логин и правильный пароль)
describe('Автотесты на авторизацию', function () {
    it('Правильный логин и правильный пароль', function () {
    cy.visit('https://login.qa.studio/'); 
    cy.get('#mail').type('german@dolnikov.ru'); //ввели логин
    cy.get('#loginButton').should('be.disabled'); //кнопка не кликабельная
    cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
    cy.get('#loginButton').should('be.enabled'); //кнопка кликабельная
    cy.get('#loginButton').click(); //нажимаем кнопку "Войти"
    cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяем, что на старнице есть текст = "Авторизация прошла успешно"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что "крестик" виден пользователю
        })
})

// 2.Проверка логики восстановления пароля
describe('Автотесты на авторизацию', function () {
    it('Проверка логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); 
    cy.get('#forgotEmailButton').click(); // нажимаем кнопку "Забыли пароль"
    cy.get('#mailForgot').type('german@yandex.ru'); //ввели любой имейл, например german@yandex.ru
    cy.get('#restoreEmailButton').click(); // нажимаем кнопку "Отправить код"
    cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //проверяем, что на старнице есть текст = "Успешно отправили пароль на e-mail"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что "крестик" виден пользователю
        })
})

// 3.Проверка на негативный кейс авторизации (правильный логин и НЕ правильный пароль)
describe('Автотесты на авторизацию', function () {
    it('Правильный логин и НЕ правильный пароль', function () {
    cy.visit('https://login.qa.studio/'); 
    cy.get('#mail').type('german@dolnikov.ru'); //ввели логин
    cy.get('#loginButton').should('be.disabled'); //кнопка не кликабельная
    cy.get('#pass').type('iLoveqastudio12'); //ввели не правильный пароль
    cy.get('#loginButton').should('be.enabled'); //кнопка кликабельная
    cy.get('#loginButton').click(); //нажимаем кнопку "Войти"
    cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяем, что на старнице есть текст = "Такого логина или пароля нет"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что "крестик" виден пользователю
        })
})

// 4.Проверка на негативный кейс авторизации ( НЕ правильный логин и правильный пароль)
describe('Автотесты на авторизацию', function () {
    it('Не верный логин и правильный пароль', function () {
    cy.visit('https://login.qa.studio/'); 
    cy.get('#mail').type('german@dolnikov.ru'); //ввели не верный логин
    cy.get('#loginButton').should('be.disabled'); //кнопка не кликабельная
    cy.get('#pass').type('iLoveqastudio12'); //ввели правильный пароль
    cy.get('#loginButton').should('be.enabled'); //кнопка кликабельная
    cy.get('#loginButton').click(); //нажимаем кнопку "Войти"
    cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); //проверяем, что на старнице есть текст = "Такого логина или пароля нет"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что "крестик" виден пользователю
        })
})

// 5.Проверка на негативный кейс валидации ( логин без @ и правильный пароль)
describe('Автотесты на авторизацию', function () {
    it('Логин без @ и правильный пароль', function () {
    cy.visit('https://login.qa.studio/'); 
    cy.get('#mail').type('germandolnikov.ru'); //логин без знака @
    cy.get('#loginButton').should('be.disabled'); //кнопка не кликабельная
    cy.get('#pass').type('iLoveqastudio12'); //ввели правильный пароль
    cy.get('#loginButton').should('be.enabled'); //кнопка кликабельная
    cy.get('#loginButton').click(); //нажимаем кнопку "Войти"
    cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяем, что на старнице есть текст = "Нужно исправить проблему валидации"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что "крестик" виден пользователю
        })
})

// 6.Проверка на приведение к строчным буквам в логине ( в логине используется стиль написания кэмел кейс)
describe('Автотесты на авторизацию', function () {
    it('Логин без @ и правильный пароль', function () {
    cy.visit('https://login.qa.studio/'); 
    cy.get('#mail').type('GerMan@Dolnikov.ru'); //ввели логин в сочетании букв верхнего и нижнего регистра (кемел кейс)
    cy.get('#loginButton').should('be.disabled'); //кнопка не кликабельная
    cy.get('#pass').type('iLoveqastudio12'); //ввели правильный пароль
    cy.get('#loginButton').should('be.enabled'); //кнопка кликабельная
    cy.get('#loginButton').click(); //нажимаем кнопку "Войти"
    cy.get('#messageHeader').should('be.visible'); // проверяем, что текст виден пользователю
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); //проверяем, что на старнице должен быть текст = "Авторизация прошла успешно", но разработчик допустил баг и это не реализовал, поэтому будет текст = "Такого логина или пароля нет"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что "крестик" виден пользователю
        })
})

// Задание 2.
//Проверка на позитивный кейс покупки нового фото для своего тренера (для Покемонов)
describe('Покупка аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.me/');
         cy.get(':nth-child(1) > .auth__input').type('halak.n@yandex.ru'); //вводим логин
         cy.get('#password').type('Qwerty123'); //вводим пароль
         cy.get('.auth__button').click(); //нажимаем кнопку "Войти"
         cy.get('.header__btns > [href="/shop"]').click(); //нажимаем кнопку "Магазин"
         cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); //нажимаем кнопку "Купить"
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); //вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); //вводим месяц и год окончания срока действия карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //вводим CVV
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Nataliya Halak');  //вводим имя и фамилию владельца карты
         cy.get('.pay__payform-v2').click(); //делаем клик по форме чтобы кнопка "Оплатить" стала активной
         cy.get('.pay-btn').click(); //делаем клик по кнопке "Оплатить"
         cy.get('#cardnumber').type('56456'); //вводим код подтверждения покупки
         cy.get('.payment__submit-button').click(); //делаем клик по кнопке "Отправить"
         cy.get('.payment__adv').click(); //делаем клик по кнопке "Вернуться в магазин"
     })
 })