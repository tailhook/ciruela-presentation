window.addEventListener('keydown', function(event) {
    if(event.which == 'A'.charCodeAt(0)) {
        location.assign('#/arch-start');
    } else if(event.which == 'C'.charCodeAt(0)) {
        location.assign('#/ciruela-links');
    } else if(event.which == 'U'.charCodeAt(0)) {
        location.assign('#/use-cases');
    } else if(event.which == 'Q'.charCodeAt(0)) {
        location.assign('#/questions');
    }
})
