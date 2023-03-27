describe('primeiro teste', () => {
    it('Acessar o menu forms', async () => {
        await $('~Forms').click()
        expect(await $('~text-input')).toBeDisplayed()
        await $('~Forms').click()
        await $('~text-input').setValue('Debora')
        await $('~Dropdown').click()
        await $('android=new UiSelector().text("This app is awesome")').click()
        await $('~Dropdown').click()
        await $('android=new UiSelector().text("Appium is awesome")').click()
        await $('~button-Active').click() 
       
        
        
        
    });
    
    
});

