$(document).ready(function () {
    var currentFloor = 2; //текущий этаж
    var floorPath = $(".home-image path"); //каждый отдельный этаж
    var counterUp = $(".counter-up"); /*увеличение этажа*/
    var counterDown = $(".counter-down"); /*уменьшение этажа*/
    var modal = $(".modal");
    var modalCloseButton = $(".modal-close-button");
    var viewFlatsButton = $(".view-flats");

    // при наведении курсора на этаж
    floorPath.on("mouseover", function (){
        floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
        currentFloor = $(this).attr("data-floor"); //получаем текущий этаж
        $(".counter").text(currentFloor); //записываем значение этажа
    });

    floorPath.on("click", toggleModal); /*клик на этаж открыть окно*/
    modalCloseButton.on("click", toggleModal);/*клик на крестик закрыть окно*/
    viewFlatsButton.on("click", toggleModal);/*клик на крестик закрыть окно*/


    counterUp.on("click", function() { //клик по кнопке вверх
        if (currentFloor < 18) { //проверка значения этажа не больше 18
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-uS', {minimumIntegerDigits: 2, useGrouping: false}); //формат переменной этажа
            $(".counter").text(usCurrentFloor); //запись значения этажа
            floorPath.removeClass("current-floor"); //удалениа активного класса у этажа
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); //подсвет текущий этаж
        }
    });

    counterDown.on("click", function () {//клик по кнопке вниз
        if (currentFloor > 2) { //проверка занчения этажа не меньше 2
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-uS", {minimumIntegerDigits: 2, useGrouping: false}); //формат переменной этажа
            $(".counter").text(usCurrentFloor); //запись значения этажа
            floorPath.removeClass("current-floor");//удаление активного класса у этажа
            $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");//подсвет текущий этаж
        }
    });

    function toggleModal() { //открыть закрыть модальное окно
        modal.toggleClass("is-open");
    }

});