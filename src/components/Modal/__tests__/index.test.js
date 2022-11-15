import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '../';

const mockToggleModal = jest.fn();

const currentPhoto = {
    name: 'Park Bench',
    category: 'Landscape',
    description: 'Test',
    index: 1
};


afterEach(cleanup);

describe('Modal Component', () => {
    it('renders', () => {
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal}/>);
    });

    it('matches snap', () => {
        const {asFragment} = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal}/>);
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('Click Event', () => {
    it('calls onClose Handler', () => {
        const {getByText} = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal}/>);
        fireEvent.click(getByText('Close this modal.'));
        expect(mockToggleModal).toBeCalledTimes(1);
    });
})


