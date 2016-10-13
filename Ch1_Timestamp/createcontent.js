module.exports = function (input) {
    
    var unix, natural;
    
    if (/^\d+$/.test(input)) {
        unix = parseInt(input);
        natural = new Date(parseInt(input * 1000));
    } else {
        unix = new Date(input);
        unix = unix.getTime() / 1000;
        natural = new Date(input);
    }
    
    return {
        'unix': unix,
        'natural': natural
    }
}