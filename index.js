var i18n = require('i18n');

exports.register = function (plugin, options, next) {
    i18n.configure(options);

    plugin.ext('onPreHandler', function(request, next){
        i18n.init(request);
        next();
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};

