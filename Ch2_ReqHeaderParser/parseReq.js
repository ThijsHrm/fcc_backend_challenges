module.exports = function(input) {
    
    var ip = input.headers['x-forwarded-for'] || 
             input.connection.remoteAddress || 
             input.socket.remoteAddress ||
             input.connection.socket.remoteAddress;
    var language = input.headers["accept-language"].split(',')[0];
    var software = input.headers["user-agent"].split(' (')[1].split(') ')[0];
    
    return {
        "ip": ip,
        "language": language,
        "software": software
    }
    
}