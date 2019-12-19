import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import ButtonTest from '../ButtonTest';

const renderer = new ShallowRenderer();

test('Render button test with text property', () => {
    const component = renderer.render(<ButtonTest text='Some text' />);

    expect(component).toMatchSnapshot();
});

test('Render button test without text property', () => {
    const component = renderer.render(<ButtonTest />);

    expect(component).toMatchSnapshot();
});
