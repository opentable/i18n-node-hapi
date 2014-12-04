# i18n-node-hapi

A hapi plugin for i18n support using mashpie/i18n-node

## Usage
```javascript
server.pack.register({
    plugin: require('i18n-node-hapi'),
    options: {
        locales:['en', 'de'], 
        directory: __dirname + '/locales'
    }
});
```

Options are passed directly to [mashpie/i18n-node](https://github.com/mashpie/i18n-node). See [configuration options](https://github.com/mashpie/i18n-node#configure) for more information.

## Roadmap

v1.0.0 - add i18n methods to view context
