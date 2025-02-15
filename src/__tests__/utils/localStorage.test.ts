test('localStorage utility functions', () => {
    localStorage.setItem('testKey', 'testValue');
    const value = localStorage.getItem('testKey');
    expect(value).toBe('testValue');
    
    localStorage.removeItem('testKey');
    const removedValue = localStorage.getItem('testKey');
    expect(removedValue).toBeNull();
});