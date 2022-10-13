import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

// we implement the mocktodofooter function because the paragraph that is found inside Todofooter component is not wrapped around the browserRouter but the Link below is wrapped , so if there is a router link in the component and the rest dom tags are not, for testing purpose we need to create the mockuptodofooter to make the test pass
const MockTodoFooter = ({numberOfIncompleteTasks}) => {
   return (
   <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
   </BrowserRouter>
   )
};

describe("TodoFooter", ()=>{
    it('should render the correct amount of incomplete tasks', () => {
    render(
        <MockTodoFooter
        numberOfIncompleteTasks={5}
        />
    );
    const paragraphElement = screen.getByText(/5 tasks left/i);
    expect(paragraphElement).toBeInTheDocument();
    });

    it('should render "task" when the number of incomplete tasks is one', async() => {
        render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
        );
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeInTheDocument();
    });

    // all the test below check assertion, passing the testing the condition turned to be true
    it('should render "task" when the number of incomplete tasks is one', async() => {
        render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
        );
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeTruthy();
    });

    it('should render "task" when the number of incomplete tasks is one', async() => {
        render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
        );
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toBeVisible(); 
    });

    it('should render "task" when the number of incomplete tasks is one', async() => {
        render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
        );
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement).toContainHTML("p"); 
    });
    
    it('should render "task" when the number of incomplete tasks is one', async() => {
        render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
        );
        const paragraphElement = screen.getByTestId("para");
        expect(paragraphElement).toHaveTextContent("1 task left"); 
    });

    it('should render "task" when the number of incomplete tasks is one', async() => {
        render(
        <MockTodoFooter
            numberOfIncompleteTasks={1}
        />
        );
        const paragraphElement = screen.getByText(/1 task left/i);
        expect(paragraphElement.textContent).toBe("1 task left"); 
    });

});