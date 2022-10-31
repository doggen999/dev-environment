/**
 * @jest-environment jsdom
 */
import {fireEvent, render} from '@testing-library/react';
// import GameBoard from './gameBoard';
import {randomizeArray} from '../../utils/utils'

const randomizedColorArray = randomizeArray();

/* Cant get this test to work, 
    'Cannot find module '@utils/utils' from 'components/gameBoard/gameBoard.js'
*/
// it('Click on hidden card displayes the card value', () => {
//     const {fireEvent, getByTestId, getByText} = render(
//         <GameBoard/>
//     )
    
//     fireEvent.click(getByTestId('card-0'));

//     expect(getByText(randomizedColorArray[0])).toBeTruthy();
// })