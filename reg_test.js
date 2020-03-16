import { Selector } from 'testcafe';

const elementWithClassName = Selector(value => {
    return document.getElementsByClassName(value);
});

fixture `Start page`
    .page `https://go.t500track.com/aff_c?offer_id=1030&aff_id=1000`;

test('Test Registration', async t => {
    const fname = Selector(elementWithClassName('w-input field gtd-field-fname'));
    const lname = Selector(elementWithClassName('w-input field gtd-field-lname'));
    const email = Selector(elementWithClassName('w-input field gtd-field-email'));
    const submitButtonStep1 = Selector(elementWithClassName('w-button submit submit-btn gtd-form-submit'));
    const phone = Selector(elementWithClassName('phone w-input field gtd-field-phone'));
    const submitButtonStep2 = Selector(elementWithClassName('w-button submit gtd-form-submit'));

    await t
            .typeText(fname, 'Test')
            .typeText(lname, 'Test')
            .typeText(email, 'test_new_vakansy110_test@example.com')
            .click(submitButtonStep1)
            .typeText(phone, '9803299180')
            .click(submitButtonStep2)
            .expect(Selector('div').withText('Congratulations!').exists).ok()
            .expect(Selector(elementWithClassName('gtd-brand-logo')).exists).ok()
            .expect(Selector(elementWithClassName('gtd-redirect-url')).exists).ok();
    });
