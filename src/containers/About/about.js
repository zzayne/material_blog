import React from 'react';
import Title from 'react-title-component';
import MarkdownBox from '../../components/MarkdownBox';
import aboutText from './about.md';


const about = () => (
    <div>

        <Title render={() => (`About`)} />

        <MarkdownBox text={aboutText} />
    </div>
);

export default about;
