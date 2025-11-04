const base = require('@playwright/test');

exports.test=base.test.extend({
    greetings: async({}, use)=>{
        const message='hello from fixture';
        await use(message);
    }

});
exports.expect=base.expect;