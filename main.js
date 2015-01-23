$(document).on('ready', function() {
     $('.editInput').on('click', function(){

        var orig = $(this);
        console.log(orig);

        var input = $('<input class="active" />');

        $(this).after(input);

        input.height($(this).height());

        $(this).hide();

        input.val($(this).text());

        input.focus();

        input.on('blur', function(){
            orig.text(input.val());
            input.remove();
            orig.show();

        });


    });

     $('.editText').on('click', function(){

        var orig = $(this);
        console.log(orig);

        var input = $('<textarea class="active" />');

        $(this).after(input);

        input.height($(this).height());

        $(this).hide();

        input.val($(this).text());

        input.focus();

        input.on('blur', function(){
            orig.text(input.val());
            input.remove();
            orig.show();

        });


    });
});