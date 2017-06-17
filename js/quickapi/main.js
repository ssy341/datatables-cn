$(function(){
    $('.loading').remove();
    $('.content').fadeIn('fast');
    if($('.board').length>3){
        $('.content').masonry({
            itemSelector : '.board'
            ,isFitWidth:true
            ,isAnimated: !$.browser.msie
        });
    }else{
        $('.board').css({float:'left'});
        $('.board').parents('.content').addClass('clearfix').css({width:'850px'})
    }

    var rgba = [
        'rgba(251,34,240,0.25)'
        ,'rgba(214,17,21,0.25)'
        ,'rgba(14,251,252,0.25)'
        ,'rgba(158,134,255,0.25)'
        ,'rgba(60,255,20,0.25)'
        ,'rgba(44,158,52,0.25)'
        ,'rgba(225,211,20,0.25)'
        ,'rgba(100,117,121,0.25)'
    ];

    $.each($('.board'),function(index,item){
        var charCode = location.pathname.substr(1).charCodeAt()
        var i = (index+charCode) % rgba.length;
        $(item).css('background',rgba[i]);
    });

    $('.board').delegate('a','click',function(e){
        e.preventDefault()
        var target = e.target;
        if(!$(this).parent().hasClass('inactive')){
            window.open($(target).attr('href'));
            mixpanel.track("Cheat Link",{
                'pagename':location.pathname
                ,'href':$(target).attr('href')
            });
        }
    });

    var shareInputFocus = false;
    $('body').delegate('#at16filt','focus',function(){
        shareInputFocus = true;
    }).delegate('#at16filt','blur',function(){
        shareInputFocus = false;
    });

    //$('body').bind('keydown',function (e) {
        //if (!shareInputFocus && !e.metaKey && !e.shiftKey && !e.ctrlKey && !e.altKey && e.keyCode != 27 && e.keyCode!= 32 && e.keyCode!=33 && e.keyCode!=34 && !$('#searchApi').is(':focus')) {
            //$('#searchApi').focus();
        //}
    //});

    var scrollTimeout;
    $('#searchApi').quicksearch('.board-card li', {
        onAfter: function () {
            var $cards = $('.board-card');
            var $boards = $('.board');
            var inactiveOffset = [];

            $cards.each(function (index) {
                var inLi = $(this).find('li:not(.inactive)');
                if (!inLi.length) {
                    $(this).children('h3').addClass('inactive');
                } else {
                    inactiveOffset.push($(inLi[0]).offset().top);
                    $(this).children('h3').removeClass('inactive');
                }
            });

            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(function(){
                inactiveOffset.sort(function(a,b){return a-b;});

                if(inactiveOffset[0]<150){
                    $('html,body').animate({ scrollTop: 0}, 400, 'swing');
                }else{
                    $('html,body').animate({ scrollTop: inactiveOffset[0]-80}, 400, 'swing');
                }
            },500)
        }
        ,hide: function () {
            $(this).addClass('inactive')
        }
        ,show: function () {
            $(this).removeClass('inactive')
        }
    });

    var pathname = location.pathname.substr(1).toLowerCase();
    if(pathname.substr(pathname.length-1) == '/'){
        pathname = pathname.substr(0,pathname.length-1);
    }
    $('#navlist a,#more-list-container a').each(function(index){
        if($(this).text().toLowerCase() == pathname){
            $(this).parent().addClass('active')
        }
    });

    //导航的更多链接
    $('#nav-more').click(function(e){
        e.preventDefault();
        var top = $(this).offset().top;
        var left = $(this).offset().left;

        $('#more-list-container').css({left:left-1,top:top+4}).fadeIn('fast');
        return false;
    });
    $('body').click(function(e){
        $('#more-list-container').fadeOut('fast');
    });

    //自适应大小
    var adjustmentNavlist = function(){
        var navlistWidth = $('#navlist').width();
        var windowWidth = $(window).width();

        if( (windowWidth-500) > navlistWidth || ($('#navlist>li').length<3) ){
            return true;
        }else{
            var $item = $('#nav-more').parents('li').prev();
            $item.insertBefore($('#nav-more-list li:first'));
            arguments.callee();
        }
    };
    adjustmentNavlist();
    $(window).resize(adjustmentNavlist);
});
