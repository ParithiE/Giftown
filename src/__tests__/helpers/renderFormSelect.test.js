const { render } = require('@testing-library/react');
const { renderFormSelect } = require('../../helpers/renderFormSelect');

test('renderFormSelect should render correctly', () => {
    const { getByTestId } = render(renderFormSelect({ options: ['Option 1', 'Option 2'], selected: 'Option 1' }));
    expect(getByTestId('form-select')).toBeInTheDocument();
    expect(getByTestId('form-select')).toHaveValue('Option 1');
});