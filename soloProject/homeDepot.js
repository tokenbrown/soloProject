var hdp = {}
module.exports = {
    before: browser => {
        hdp = browser.page.homeDepotPage()
        hdp.navigate()
    },
    after: browser => {
        hdp.end()
    },
    'Search': browser => {
        hdp
            .search('Drill', 'Drill')
            .search('Saw', 'Saw')
            .search('Wood', 'Wood')
    },
    'Home': browser => {
        hdp
            .click('.HeaderLogo')
            .assert.elementPresent('.carousel__nav')
    },
    'Dropdown to paint': browser => {
        hdp
            .useXpath()
            .moveToElement('(//a[@class="ShoppingLinks__link"])[1]', 1, 1)
            .pause(500)
            .click('(//a[@class="MainFlyout__link"])[16]')
            .pause(500)
            .expect.element('//h1[@class="page-header"]').text.to.contain('Paint')
    },
    'Select Primer': browser => {
        hdp
            .pause(500)
            .click('(//a[contains(text(),"Primer")])[1]')
            .pause(500)
            .expect.element('//h1[@class="h1-style-tag"]').text.to.contain('Primer')
    },
    'Add to cart': browser => {
        hdp
            .click('(//a[@data-productid="100371299"])[2]')
            .pause(5000)
            //iframe has no ID cannot get automation into it
    }


}