$(function(){
    var $posts = $('.posts > article');
    
    $posts.each(function() {

        var $this = $(this),
            $image = $this.find('.image'), 
            $img = $image.find('img'),
            $link = $this.find('.link'),
            x;

        // Set image.
            $this.css('background-image', 'url(' + $img.attr('src') + ')');

        // Set position.
            if (x = $img.data('position'))
                $image.css('background-position', x);

        // Hide original.
            $image.hide();

    });
    
});

$(function(){
    $(document).on("click", ".js-menu-toggle", function() {
        $("body").hasClass("menu--open") ? $("body").removeClass("menu--open") : $("body").addClass("menu--open")
    })
});