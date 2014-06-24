/**
 * Created by prashant on 6/20/2014.
 */
if (typeof jQuery === 'undefined') {
    throw new Error('JavaScript requires jQuery')
}
+function ($) {
    'use strict';

    $(document).ready(function () {
        //popover alert
        $("#popAlert").popover({
            container: '#popAlert',
            trigger: 'click',
            html: true,
            placement: 'bottom',
            content: $('#alertContent').html()
        })
        $('#popAlert').on('show.bs.popover', function () {
            $('#inboxAlert').popover('hide');
        })
        //popover inbox
        $("#inboxAlert").popover({
            container: '#inboxAlert',
            trigger: 'click',
            html: true,
            placement: 'bottom',
            content: $('#inboxContent').html()
        })
        $('#inboxAlert').on('show.bs.popover', function () {
            $('#popAlert').popover('hide');
        })

        $('#popAlert,#inboxAlert').on('shown.bs.popover', function () {
            //scroll bars for all scroll-pane
            $(".scroll-pane").enscroll({
                verticalTrackClass: "track",
                verticalHandleClass: "handle",
                showOnHover: false
            });
        })
        $('[class*="ios-switch"]').click(function(){
            if($(this).is(':checked')){
                $(this).parent().parent().parent().find('.col-sm-14').addClass('social-active')
            }else{
                $(this).parent().parent().parent().find('.col-sm-14').removeClass('social-active')
            }
        })
        // text box cross icon
        $(document).on('propertychange keyup input paste', 'input.data_field', function(){
            var io = $(this).val().length ? 1 : 0 ;
            $(this).next('.icon_clear').stop().fadeTo(200,io);
        }).on('click', '.icon_clear', function() {
            $(this).delay(200).fadeTo(200,0).prev('input').val('');
        });
        // icon check
        $('.icon-checked').on('click',function(){
            if($(this).is(':checked')){
                $(this).next().children('span').addClass('social-active')
            }else{
                $(this).next().children('span').removeClass('social-active')
            }
        })
        $('#add-more-mobiles').click(function(){
            var addme = $('#add-me').clone()
            addme.find('input').val('')
            addme.removeAttr('id');
            addme.insertAfter('#add-me')
        })

    });

}(jQuery);