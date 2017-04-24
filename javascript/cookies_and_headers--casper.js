// ######################################################
// This is an example module provided by Wraith.
// Feel free to amend for your own requirements.
// ######################################################
module.exports = function (casper, ready) {
    // reload page with headers set
    casper.open(casper.page.url, {
        method: 'get',
        headers: {
          'GOVUK-ABTest-EducationNavigation': 'B',
          'Cookie': 'ABTest-EducationNavigation=B'
        }
    }).then(function(response) {
      casper.wait(2000, ready);
    });
}
