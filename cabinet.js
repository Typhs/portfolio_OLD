
$(".cabinet-file").click(function() { // clickable files
    url = $(this).data('url');
    window.open(url, '_blank').focus();
});
