$(function() {
    $(window).scroll( function(){


        $('.animate').not('.load').each(function(i) {
            var $this = $(this);
            var ind = i * 100;
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $this.offset().top;

            if (docViewBottom >= elemTop) {
                setTimeout(function() {
                    $this.addClass('load');
                }, ind);
            }
        });

    });
});
