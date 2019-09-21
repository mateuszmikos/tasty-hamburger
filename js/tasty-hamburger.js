var number_of_hamburgers = 25;

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

function tasty_toggle_data($w = false, element)
{
    var toggle_id = element.getAttribute("data-toggle-id");
    var toggle_class = element.getAttribute("data-toggle-class");
    var reverse_toggle_id = element.getAttribute("data-reverse-toggle-id");
    var reverse_toggle_class = element.getAttribute("data-reverse-toggle-class");
    var toggle_add_class = element.getAttribute("data-toggle-add-class");
    var reverse_toggle_add_class = element.getAttribute("data-reverse-toggle-add-class");
}

function tasty_toggler(element) {
    var classes = element.className;
    var search = classes.search('tasty-toggled');
    if (search < 0) {
        tasty_toggle_data(true, element);
        element.classList.add('tasty-toggled');
    } else {
        tasty_toggle_data(false, element);
        element.classList.remove('tasty-toggled');
    }
}

prepare_tasty_hamburger();