/**
 * 08:54, February 20, 2014 (UTC)
 * External images loader
 * Enables Usage of images from other sites
 * http://dev.wikia.com/wiki/ExternalImageLoader/code.js
 * @author: UltimateSupreme (http://dev.wikia.com/wiki/User:UltimateSupreme)
 * @License: CC-BY-SA - http://creativecommons.org/licenses/by-sa/3.0/
 */
// <source lang="JavaScript">

(function ($, ArticleComments) {
    "use strict";

    function createImage() {
        // Look for [[Template:ExternalImageLoader]]
        $('.WikiaArticle .user-image-hotlink, #mw-content-text .user-image-hotlink').each(function () {

            var $this = $(this),
                w = $this.data('width'),
                h = $this.data('height'),
                alt = $this.data('alt'),
                align = $this.data('align') || 'left',
                caption = $this.data('caption'),
                href = $this.text(),
                link = $this.data('link') || href,
                $figure = $('<figure><a><img></a><figcaption></figcaption></figure>');

            if (!href) {
                return;
            }

            $figure.addClass('thumb t' + align + ' thumbinner')
                .find('a').attr('href', link).addClass('image')
                .find('img').attr('src', href);

            if (alt) {
                $figure.find('img').attr({
                    'alt': alt,
                    'title': alt
                });
            }
            if (w) {
                $figure.find('img').attr('width', +w);
            }
            if (h) {
                $figure.find('img').attr('height', +h);
            }
            if (caption) {
                if (w) {
                    $figure.width(+w + 2);
                }
                $figure.find('figcaption').text(caption);
            }

            $this.replaceWith($figure);
        });
    }

    function initImageLoader() {
        createImage();
        if (ArticleComments && ArticleComments.addHover) {
            var realFunc = ArticleComments.addHover;
            ArticleComments.addHover = function () {
                var result = realFunc.apply(ArticleComments, arguments);
                createImage();
                return result;
            };
        }

        // special case where article comments have already loaded (shouldn't happen much in production)
        if (!$('#WikiaArticleComments').hasClass('loading')) {
            createImage();
        }
    }

    $(initImageLoader);
}(jQuery, window.ArticleComments));
//</source>