var i18n = require('i18n');

exports.register = function (server, options, next) {
    i18n.configure(options);

    server.ext('onPreHandler', function(request, reply){
        i18n.init(request);
        reply.continue();
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};

