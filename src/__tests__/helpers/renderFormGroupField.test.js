const { render } = require('@testing-library/react');
const { renderFormGroupField } = require('../../helpers/renderFormGroupField');

test('renders form group field correctly', () => {
    const { getByLabelText } = render(renderFormGroupField({ label: 'Test Label', name: 'testName' }));
    expect(getByLabelText('Test Label')).toBeInTheDocument();
});