var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true })

nightmare
    .goto('https://www.amazon.com/')
    .type('[name=field-keywords]', 'Portable charger')
    .run()
