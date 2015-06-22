$(function(){
    var menuwrapper = $('.w-menu'),
    menu = $('.m-menu')
    page = $('.m-page'),
    button = $('.m-button'),
    opened = false;

    button.on('click', menuHandler);

    function menuHandler() {
        if(!opened) {
            opened = true;
            page.css({
                position:'fixed'
            });
            page.animate({
                left:'-82%',
                right:'82%'
            }, 300);
            menuwrapper.show();
            menu.show();
            $(this).addClass('m-open').removeClass('m-close');
        } else {
            opened = false;
            page.css({
                position:'relative'
            });
            page.animate({
                left:0,
                right:0
            }, 300, function(){
            menuwrapper.hide();
            menu.hide();
            });

            $(this).addClass('m-close').removeClass('m-open');
        }

    }
});