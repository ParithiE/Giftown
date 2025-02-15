const { render } = require('@testing-library/react');
const { renderFormCheckbox } = require('../../helpers/renderFormCheckbox');

test('renderFormCheckbox renders correctly', () => {
    const { getByLabelText } = render(renderFormCheckbox({ label: 'Test Checkbox', checked: false }));
    const checkbox = getByLabelText('Test Checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
});