var homeDepot = {
    search: function (searchValue, searchResults) {
        this
            .setValue('@search', searchValue)
            .click('@searchButton')
            .expect.element('@results').text.to.contain(searchResults)
        this
            .clearValue('.SearchBox__input')
        return this
    }
}
module.exports = {
    url: 'https://www.homedepot.com/',
    commands: [homeDepot],
    elements: {
        search: '#headerSearch',
        searchButton: '#headerSearchButton',
        results: '.page-header'

    }
}


