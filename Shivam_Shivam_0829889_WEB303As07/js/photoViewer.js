(function ($) {
    $.fn.customPhotoViewer = function () {
        return this.each(function () {
            var $photoViewer = $(this);
            var $thumbnails = $photoViewer.find('.thumbnail-anchor');
            var $photoBox = $photoViewer.find('.photo-box');

            $thumbnails.on('click', function (e) {
                e.preventDefault();
                var fullSizeImageUrl = $(this).attr('href');
                $photoBox.attr('href', fullSizeImageUrl);
                $photoBox.find('img').attr('src', fullSizeImageUrl);
                $thumbnails.removeClass('active');
                $(this).addClass('active');
            });

            $photoBox.on('click', function (e) {
                e.preventDefault();
                var $content = $(this).clone().find('img').css({
                    marginLeft: 0,
                    marginTop: 0,
                    width: '100%',
                    height: 'auto',
                });
            });
            return this;
        });
    };
})(jQuery);
