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

    phantom.open(phantom.url + '?' + new Date(), function () {

      setTimeout(function() {
        var targetScrollTop = page.evaluate(function() {
          var toggle = document.querySelector('.js-report-a-problem-toggle');
          var target = toggle.offsetTop - 500;
          return target;
        });

        page.scrollPosition = {
          top: targetScrollTop,
          left: 0
        };

        setTimeout(ready, 500);
      }, 2000);
    });

    ready();
}
