$(document).ready(function() {
    // MODAL
    var modalText = {
        discover: {
            title: 'Why Deep Learning..?',
            tag: 'A PLATFORM WhERE WE DEAL WITH VERY LARGE DATASET ',
            detail: 'Deep Learning really shines when it comes to complex problems such as image classification, natural language processing, and speech recognition.',

        },
        ordering: {
            title: 'Deep Learning..?',

            detail: ' Deep learning is a subset of machine learning in artificial intelligence that has networks capable of learning unsupervised from data that is unstructured or unlabeled.',

        },
        newrelic: {
            title: 'Google Colab',
            tag: 'GOOGLE COLAB FEATURES.',
            detail: 'Google Colab is a free cloud service and now it supports free GPU! You can develop deep learning applications using popular libraries such as Keras, TensorFlow, PyTorch, and OpenCV.'

        },
        roambi: {
            title: 'Artificial Intelligence',
            tag: 'AI...?.',
            detail: 'Artificial intelligence (AI) is wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.',

        },
        walker: {
            title: 'Machine Learning',
            tag: 'ABOUT ML.',
            detail: 'Machine learning is an application of artificial intelligence (AI) that provides systems the ability to automatically learn and improve from experience without being explicitly programmed. Machine learning focuses on the development of computer programs that can access data and use it learn for themselve'
        },
        powur: {
            title: 'Powur.com',
            tag: 'CONSUMER POWERED MARKETING.',
            detail: 'Powur is a marketing platform for lead generation, recruitment, and team building. Built with Ruby on Rails and Angular-UI. Makes use of Angular-material for front-end visuals. Features complex user tree heiarchy and commission system.',
            link: 'http://www.powur.com/with/42'
        },
        mystand: {
            title: 'Where Artificial intelligence',
            tag: 'AI APPLICATIONS.',
            detail: 'From SIRI to self-driving cars, artificial intelligence (AI) is progressing rapidly. While science fiction often portrays AI as robots with human-like characteristics'
        },
        never: {
            title: 'NeverSurrender',
            tag: 'ALS AWARENESS.',
            detail: 'NeverSurrender is a platform for the new ALS foundation mobile app in hopes to raise awareness and research funding to fight ALS. Pure JavaScript marketing site to promote the new ALS NeverSurrender app.'
        },
        themall: {
            title: 'The Mall',
            tag: 'PEER GUIDED SHOPPING.',
            detail: 'The Mall is a place to follow the latest fashion purchases of your friends and favorite celebrities. Built with Node.js and Handlebars. Features the ability to import thousands of top brands products into one shopping site.'
        }
    };

    $('#gallery .button').on('click', function() {
        fillModal(this.id);
        $('.modal-wrap').addClass('visible');
    });

    $('.close').on('click', function() {
        $('.modal-wrap, #modal .button').removeClass('visible');
    });

    $('.mask').on('click', function() {
        $('.modal-wrap, #modal .button').removeClass('visible');
    });

    var carousel = $('#carousel'),
        slideWidth = 700,
        threshold = slideWidth / 3,
        dragStart,
        dragEnd;

    setDimensions();

    $('#next').click(function() {
        shiftSlide(-1);
    });
    $('#prev').click(function() {
        shiftSlide(1);
    });

    carousel.on('mousedown', function() {
        if (carousel.hasClass('transition')) return;
        dragStart = event.pageX;
        $(this).on('mousemove', function() {
            dragEnd = event.pageX;
            $(this).css('transform', 'translateX(' + dragPos() + 'px)');
        });
        $(document).on('mouseup', function() {
            if (dragPos() > threshold) {
                return shiftSlide(1);
            }
            if (dragPos() < -threshold) {
                return shiftSlide(-1);
            }
            shiftSlide(0);
        });
    });

    function setDimensions() {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            slideWidth = $(window).innerWidth();
        }
        $('.carousel-wrap, .slide').css('width', slideWidth);
        $('.modal').css('max-width', slideWidth);
        $('#carousel').css('left', slideWidth * -1);
    }

    function dragPos() {
        return dragEnd - dragStart;
    }

    function shiftSlide(direction) {
        if (carousel.hasClass('transition')) return;
        dragEnd = dragStart;
        $(document).off('mouseup');
        carousel
            .off('mousemove')
            .addClass('transition')
            .css('transform', 'translateX(' + direction * slideWidth + 'px)');
        setTimeout(function() {
            if (direction === 1) {
                $('.slide:first').before($('.slide:last'));
            } else if (direction === -1) {
                $('.slide:last').after($('.slide:first'));
            }
            carousel.removeClass('transition');
            carousel.css('transform', 'translateX(0px)');
        }, 700);
    }

    function fillModal(id) {
        $('#modal .title').text(modalText[id].title);
        $('#modal .detail').text(modalText[id].detail);
        $('#modal .tag').text(modalText[id].tag);
        if (modalText[id].link)
            $('#modal .button')
            .addClass('visible')
            .parent()
            .attr('href', modalText[id].link);

        $.each($('#modal li'), function(index, value) {
            $(this).text(modalText[id].bullets[index]);
        });
        $.each($('#modal .slide'), function(index, value) {
            $(this).css({
                background: "url('img/slides/" + id + '-' + index + ".jpg') center center/cover",
                backgroundSize: 'cover'
            });
        });
    }
});