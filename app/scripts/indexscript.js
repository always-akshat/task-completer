$(document).ready( function() {

    $("#header div.nav ul li a").click(function(e){
        e.preventDefault();
        var rel = $(this).attr("href");
        var goTo =  $(rel).offset().top;
        //alert(goTo);
        $("html, body").stop().animate({ scrollTop: goTo }, 1200);
        return false;
    });


    $(".go-top").click(function(){
        $("html, body").stop().animate({ scrollTop: 0 }, 800);
        return false;
    });

    $("#campaign div.campaing-slider ul li.role").click(function(){
        $("#campaign div.campaing-slider div.content div.text").html("<p>As a #GoodVibes college ambassador you would lead the #GoodVibes campaign in your own way. Share any content - status, pics, music, links, selfies, sports activity, and just hash tag #GoodVibes, across social media platforms of your choice. Your role would be to encourage more people around you to share #GoodVibes. There will be a few more simple tasks to take up on our #GoodVibes messenger Viber. We aim to take this campaign viral and your role would be to make it happen with the rest of us.</p>");

        $("#campaign div.campaing-slider ul li").removeClass("active");
        $("#campaign div.campaing-slider ul li.role").addClass("active");
    });

    $("#campaign div.campaing-slider ul li.share").click(function(){
        $("#campaign div.campaing-slider div.content div.text").html("<p>Other than the free talk-time you win when your friends join, and the #GoodVibes you will get back, we want to make sure there is more for you ;)</p><p>Your good vibes circle back to you, and so we are giving away a whole lot of freebies, gift vouchers, some of the best smart-phones and gadgets, all-paid trips to Leh-Ladakh, Pondicherry & Goa, and to the one who shares the most #GoodVibes - a WORLD TOUR! </p><p>Students who successfully participate in the campaign will also get a certificate of participation by Viber.</p>");

        $("#campaign div.campaing-slider ul li").removeClass("active");
        $("#campaign div.campaing-slider ul li.share").addClass("active");
    });

    $("#campaign div.campaing-slider ul li.invite").click(function(){
        $("#campaign div.campaing-slider div.content div.text").html("<p>#GoodVibes are meant to be shared :)</p><p>As a Good Vibes Ambassador, that's all that you need to do. Spread the good vibes!</p><p>Invite your friends today & spark off an epic movement out of India. And, to make it sweet for you, we will send some good vibes back to you!</p><p>So basically when some one clicks on these two, the text should change to the above text provided for each section respectively.</p>");

        $("#campaign div.campaing-slider ul li").removeClass("active");
        $("#campaign div.campaing-slider ul li.invite").addClass("active");
    });

});