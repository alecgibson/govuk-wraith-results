// ######################################################
// This is an example module provided by Wraith.
// Feel free to amend for your own requirements.
// ######################################################
module.exports = function (casper, ready) {
    // reload page with headers set
    casper.open(casper.page.url + '?' + new Date(), {
        method: 'get',
        headers: {
          'GOVUK-ABTest-EducationNavigation': 'B',
          'Cookie': 'govuk_takenUserSatisfactionSurvey=true; seen_cookie_message=yes; ABTest-EducationNavigation=B; govuk_not_first_visit=yes;'
        }
    }).then(function() {
      casper.wait(10000, ready);
    });
}
