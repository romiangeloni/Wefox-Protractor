# Wefox-Protractor

### About Protractor
To set up Protractor read the following documentation:
[Protractor Documentation](https://www.protractortest.org/#/protractor-setup)

### Run Tests

To run the tests it's needed to start Selenium web driver:

```bash
webdriver-manager start
```
After that you need to execute:

```bash
protractor conf.js
```
### NOTE
This is my first time using Protractor
I tried to locate the test data in a json file but protractor is not working consistently. You can find a comment code about that in the Login step.
Also I would like to create a json file with all the UI components and use it as variables in the test in order to centralize the IDs in only one place.
During the timebox that I assigned to this exam I cannot complete the requirement to print the user data in a json file. I can see that data in the chrome console using this: document.querySelectorAll('.wf-c-field__container input').
The last thing is I used the method .not() inside some ifs to evaluate a not condition but it doesn't works.