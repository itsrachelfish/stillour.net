function randomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateStar()
{
    var star = document.createElement('div');
    $(star).text('*');
    $(star).addClass('star');

    var randomTop = randomInt(0, $(window).height());
    var randomLeft = randomInt(0, $(window).width());
    var randomSize = randomInt(0, 50);
    
    $(star).style({position: 'absolute', top: randomTop + 'px', left: randomLeft + 'px', 'font-size': randomSize + '%'});
    $('.sky').el[0].appendChild(star);
}

function generateStars(number)
{
    while(number > 0)
    {
        generateStar();
        number = number - 1;
    }
}

$(document).ready(function()
{
    generateStars(100);
});
