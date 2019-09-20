var number_of_hamburgers = 5;

function prepare_tasty_hamburger()
{
    for (var i = 1; i<=number_of_hamburgers; i++)
    {
        var element = document.getElementsByClassName('mm-hamburger-'+i);
        if (typeof(element) != 'undefined' && element != null) {
            createHamburger(i, element);
        } else {
            console.log('element '+i+' nie istnieje');
        }
    }
}

function create_tasty_hamburger(type, element) {
    var settings = [
        
    ]
}

prepare_hamburger();