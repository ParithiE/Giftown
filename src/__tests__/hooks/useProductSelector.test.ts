import { renderHook } from '@testing-library/react-hooks';
import useProductSelector from '../../hooks/useProductSelector';

test('hello world!', () => {
  const { result } = renderHook(() => useProductSelector());
  expect(result.current).toBeDefined();
});