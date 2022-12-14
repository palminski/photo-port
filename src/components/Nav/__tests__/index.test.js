import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '../';

const catagories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCatagry = jest.fn();
const mockSetCurrentCatagry = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Nav Component', () => {
    //renders Nav test
    it('renders',()=>{
        render(<Nav catagories={catagories} setCurrentCategory={mockSetCurrentCatagry} currentCategory={mockCurrentCatagry} contactSelected={mockContactSelected} setContactSelected={mockSetContactSelected}/>);
    });

    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<Nav catagories={catagories} setCurrentCategory={mockSetCurrentCatagry} currentCategory={mockCurrentCatagry} contactSelected={mockContactSelected} setContactSelected={mockSetContactSelected}/>);
        expect(asFragment()).toMatchSnapshot();
    })
});
describe('Emoji is Visable', () => {
    it('inserts emoji into the h2', () => {
        const {getByLabelText} = render(<Nav catagories={catagories} setCurrentCategory={mockSetCurrentCatagry} currentCategory={mockCurrentCatagry} contactSelected={mockContactSelected} setContactSelected={mockSetContactSelected}/>);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
});
describe("Links are visable", () => {
    it('inserts text into the links', () => {
        const {getByTestId}= render(<Nav catagories={catagories} setCurrentCategory={mockSetCurrentCatagry} currentCategory={mockCurrentCatagry} contactSelected={mockContactSelected} setContactSelected={mockSetContactSelected}/>);
        expect(getByTestId('link')).toHaveTextContent("Oh Snap!");
        expect(getByTestId('about')).toHaveTextContent("About Me");
    })
})

