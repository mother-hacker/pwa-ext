import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonTest from '../ButtonTest';

const stories = storiesOf('Components/ButtonTest', module);

stories.add('Button test', () => (
    <ButtonTest
        text='Test some text'
    />
));
