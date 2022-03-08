module.exports = {
    '@tags': ['google'],
    'Google Advance search: Elon Musk' (browser){
        const mainQuery = 'Elon Musk'; 


        const mainQueryInputSelector = 'input[name="as_q"]'; 
        const languageDropdownOpenerSelector = "#lr_button";
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_it"]';
        const lastUpdateDropdowOpenerSelector = '#as_qdr_button';
        const lastUpdateDropdowValueSelector = '.goog-menuitem[value="m"]';
        const submitButtonSelector = '.jfk-button[type="submit"]';

        //const resultPageQuerySelector = '#searchform input[name="q"][value="${mainQuery}"]';
        //const resultPageLastUpdateSelector = '[aria-label="Past month"]';



        browser
            .url('https://www.google.com.mx/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdowOpenerSelector)
            .click(lastUpdateDropdowValueSelector)
            .click(submitButtonSelector)
            .assert.urlContains('as_q=Elon+Musk','Query is Elon Musk')
            .assert.urlContains('lr=lang_it','Language is Italian')
            .assert.urlContains('as_qdr=m','Time period is Last Month')
            


            //browser.assert.visible(resultPageQuerySelector,'UI: Elon Musk is set in the query input')
            //browser.assert.textContains(resultPageLastUpdateSelector, 'Past month' ,'UI: Last Update is set to past month')


            .saveScreenshot('tests_output/google.png')
            


    }
}