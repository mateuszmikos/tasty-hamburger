var number_of_hamburgers = 10;

function prepare_tasty_hamburger()
{
    var available_options = [
        '', '-dark',
    ];
    for (var options = 0; options<available_options.length; options++) {
        for (var i = 1; i<=number_of_hamburgers; i++)
        {
            var elements = document.getElementsByClassName('tasty-hamburger-'+i+available_options[options]);
            if (typeof(elements) != 'undefined' && elements != null) {
                Array.prototype.forEach.call(elements, function(element) {
                    create_tasty_hamburger(i, element);
                    console.log(element.tagName);
                    console.log('element '+i+' istnieje');
                });
            } else {
                console.log('element '+i+' nie istnieje');
            }
        }
    }
}

function create_tasty_hamburger(type, element) {
    var inner = '<span></span><span></span><span></span>';
    console.log(element.innerHTML);
    element.innerHTML = inner;
    element.setAttribute('onclick','tasty_toggler(this)');
}

function tasty_toggler(element) {
    var classes = element.className;
    console.log("Tasty toggler!");
    var search = classes.search('tasty-toggled');
    if (search < 0) {
        element.classList.add('tasty-toggled');
    } else {
        element.classList.remove('tasty-toggled');
    }
}

prepare_tasty_hamburger();