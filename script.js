$(document).ready(function () {

    input = $('#input');
    btn = $('#submit');
    ol = $('#ol');
    compteur = 1;

    btn.click(function () {
        ol.append($('<li id="'+compteur+'"></li>').append(input.val()+ ' <a class="up">UP</a> <a class="down">DOWN</a> <a class="rem">REMOVE</a>'))
        input.val('');
        compteur += 1;
    });


    $(document).on('click', '.up', function () {
        laura = $(this).parent();
        $(laura).insertBefore($(laura).prev());
        console.log(document.getElementById('ol').firstChild.getElementbyId());
    });

    $(document).on('click', '.down', function () {
        laura = $(this).parent();
        $(laura).insertAfter($(laura).next());
    });

    $(document).on('click', '.rem', function () {
        nico = $(this).parent();
        $(nico).remove();
    })


})


