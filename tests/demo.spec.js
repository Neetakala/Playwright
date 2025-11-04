const { expect } = require('@playwright/test');
const{test}=require('../Fixtures/demobasefixture');
test('USe of fixture', async({greetings})=>{
    console.log(greetings);
    expect(greetings).toBe('hello from fixture');

})