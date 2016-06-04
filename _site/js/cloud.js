$.fn.tagcloud.defaults = {
    size: {start: 13, end: 41, unit: 'px'},
    color: {start: '#cde', end: '#f52'}
};

$(function () {
    $('#tagcloud a').tagcloud();
});