const { render } = require('@testing-library/react');
const { renderFormField } = require('../../helpers/renderFormField');

test('renderFormField renders correctly', () => {
	const { getByLabelText } = render(renderFormField({ label: 'Test Label', name: 'testName' }));
	expect(getByLabelText('Test Label')).toBeInTheDocument();
});