import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

// we implement the MockFollowersList function because a Link route is found in the component
const MockFollowersList = () => {
   return (
   <BrowserRouter>
      <FollowersList />
   </BrowserRouter>
   )
};


describe("FollowersList", () => {
    it('should render fetch follower index', async () => {
        render(<MockFollowersList/>);
        const followDivElement = await screen.findByTestId("follower-item-0");
        expect(followDivElement).toBeInTheDocument();
    });

    it('should render multiple follower items', async () => {
        render(<MockFollowersList />);
        const followDivElements = await screen.findAllByTestId(/follower-item/i);
        expect(followDivElements.length).toBe(5);
    });

});