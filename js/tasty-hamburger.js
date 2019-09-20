var number_of_hamburgers = 20;

function prepare_tasty_hamburger()
{
    for (var i = 1; i<=number_of_hamburgers; i++)
    {
        var elements = document.getElementsByClassName('tasty-hamburger-'+i);
        if (typeof(elements) != 'undefined' && elements != null) {
            Array.prototype.forEach.call(elements, function(element) {
                create_tasty_hamburger(i, element);
            });
        }
    }
}

function create_tasty_hamburger(type, element) {
    var inner = '<span></span><span></span><span></span>';
    element.innerHTML = inner;
    element.setAttribute('onclick','tasty_toggler(this)');
}

function tasty_toggler(element) {
    var classes = element.className;
    var search = classes.search('tasty-toggled');
    if (search < 0) {
        element.classList.add('tasty-toggled');
    } else {
        element.classList.remove('tasty-toggled');
    }
}

prepare_tasty_hamburger();