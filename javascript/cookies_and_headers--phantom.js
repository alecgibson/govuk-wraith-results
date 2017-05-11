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

    phantom.addCookie({
        'name': 'seen_cookie_message',
        'value': 'yes',
        'domain': 'gov.uk'
    });

    phantom.addCookie({
        'name': 'govuk_not_first_visit',
        'value': 'yes',
        'domain': 'gov.uk'
    });

    phantom.open(phantom.url + '?' + new Date(), function () {
      setTimeout(function() {
        removeById('global-cookie-message');
        removeById('user-satisfaction-survey-container')
      });

      setTimeout(ready, 2000);
    });

    function removeById(id) {
      var element = document.getElementById(id);
      if (!element) {
        return;
      }
      element.remove();
    }
}
