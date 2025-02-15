const { render } = require('@testing-library/react');
const { renderFormRadio } = require('../../helpers/renderFormRadio');

test('renders radio button correctly', () => {
    const { getByLabelText } = render(renderFormRadio({ label: 'Option 1', value: '1' }));
    const radio = getByLabelText('Option 1');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('type', 'radio');
    expect(radio).toHaveAttribute('value', '1');
});