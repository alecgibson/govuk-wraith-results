// ######################################################
// This is an example module provided by Wraith.
// Feel free to amend for your own requirements.
// ######################################################
module.exports = function (phantom, ready) {

    page.customHeaders = {
      'GOVUK-ABTest-EducationNavigation': 'B'
    };

    phantom.addCookie({
        'name': 'seen_cookie_message',
        'value': 'yes',
        'domain': 'integration.publishing.service.gov.uk'
    });

    phantom.addCookie({
        'name': 'govuk_not_first_visit',
        'value': 'yes',
        'domain': 'integration.publishing.service.gov.uk'
    });

    phantom.open(phantom.url, function () {

      setTimeout(ready, 5000);
    });
}
