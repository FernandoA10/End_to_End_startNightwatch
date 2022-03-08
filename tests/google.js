module.exports = {
    '@tags': ['google'],
    'Google Advance search: Elon Musk' (browser){
        const mainQuery = 'Elon Musk'; 

        const page = browser.page.googleAdvanceSearch();


        //const resultPageQuerySelector = '#searchform input[name="q"][value="${mainQuery}"]';
        //const resultPageLastUpdateSelector = '[aria-label="Past month"]';



        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdownOpener', 'it')
            .selectFilter('@lastUpdateDropdowOpener', 'm')
            .search()

        browser
            .assert.urlContains('as_q=Elon+Musk','Query is Elon Musk')
            .assert.urlContains('lr=lang_it','Language is Italian')
            .assert.urlContains('as_qdr=m','Time period is Last Month')
            


            //browser.assert.visible(resultPageQuerySelector,'UI: Elon Musk is set in the query input')
            //browser.assert.textContains(resultPageLastUpdateSelector, 'Past month' ,'UI: Last Update is set to past month')


            .saveScreenshot('tests_output/google.png')
            


    }
}