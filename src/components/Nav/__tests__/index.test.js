import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../';

afterEach(cleanup);

describe('Nav Component', () => {
    //renders Nav test
    it('renders',()=>{
        render(<Nav/>);
    });

    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Nav/>);
        expect(asFragment()).toMatchSnapshot();
    })
});
describe('Emoji is Visable', () => {
    it('inserts emoji into the h2', () => {
        const {getByLabelText} = render(<Nav/>);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
});
describe("Links are visable", () => {
    it('inserts text into the links', () => {
        const {getByTestId}= render(<Nav/>);
        expect(getByTestId('link')).toHaveTextContent("Oh Snap!");
        expect(getByTestId('about')).toHaveTextContent("About Me");
    })
})

