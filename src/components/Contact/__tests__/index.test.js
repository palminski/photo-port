import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '../';

afterEach(cleanup);

describe('contact', () => {
    it('renders', ()=> {
        render(<Contact></Contact>);
    });

    it('matches snapshot', () => {
        const {asFragment} = render(<Contact></Contact>);
        expect(asFragment()).toMatchSnapshot();
    })
});

describe('text is correct',()=> {
    it('has proper text in tags',()=> {
        const{getByTestId}=render(<Contact></Contact>);
        expect(getByTestId('h1')).toHaveTextContent('Contact Me');
        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})
