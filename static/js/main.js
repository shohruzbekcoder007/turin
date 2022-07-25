$('a').click(function()
{
    var name = 'instrument';
    var value = $(this).text();
    $.cookie(name, value, { expires: 365 });
});
document.cookie = "test1=Hello";
console.log(document.cookie)
console.log(document.cookie.get('test1'))