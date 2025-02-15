const { render } = require('@testing-library/react');
const { renderFormFileInput } = require('../../helpers/renderFormFileInput');

test('renderFormFileInput should render input of type file', () => {
    const { getByTestId } = render(renderFormFileInput());
    const input = getByTestId('file-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'file');
});