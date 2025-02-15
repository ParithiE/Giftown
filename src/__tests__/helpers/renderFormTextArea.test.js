const { render } = require('@testing-library/react');
const { renderFormTextArea } = require('../../helpers/renderFormTextArea');

test('renders textarea with correct props', () => {
    const { getByPlaceholderText } = render(renderFormTextArea({ placeholder: 'Enter text here' }));
    const textarea = getByPlaceholderText('Enter text here');
    expect(textarea).toBeInTheDocument();
});

test('renders textarea with default value', () => {
    const { getByDisplayValue } = render(renderFormTextArea({ defaultValue: 'Default text' }));
    const textarea = getByDisplayValue('Default text');
    expect(textarea).toBeInTheDocument();
});

test('calls onChange handler when text is changed', () => {
    const handleChange = jest.fn();
    const { getByDisplayValue } = render(renderFormTextArea({ defaultValue: 'Initial', onChange: handleChange }));
    const textarea = getByDisplayValue('Initial');
    textarea.value = 'Changed text';
    textarea.dispatchEvent(new Event('input'));
    expect(handleChange).toHaveBeenCalled();
});