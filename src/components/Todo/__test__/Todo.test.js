import { render, screen,fireEvent } from '@testing-library/react';
import Todo from '../Todo';
import { BrowserRouter } from 'react-router-dom';

// we implement the mocktodofooter function because the paragraph that is found inside Todofooter component is not wrapped around the browserRouter but the Link below is wrapped , so if there is a router link in the component and the rest dom tags are not, for testing purpose we need to create the mockuptodofooter to make the test pass
const MockTodo = () => {
   return (
   <BrowserRouter>
      <Todo />
   </BrowserRouter>
   )
};

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i});
    tasks.forEach(task => {
        fireEvent.change(inputElement, { target: {value: task}});
        fireEvent.click(buttonElement);
    });
}

describe("Todo integration testing", ()=>{
    it('should render the parent todo component correctly with all the child components found inside it', () => {
        render(<MockTodo/>);
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", { name: /Add/i});
        fireEvent.change(inputElement, { target: {value: 'Go grocery shopping'}});
        fireEvent.click(buttonElement);
        // addTask(['Go grocery shopping']);
        const divElement = screen.getByText(/Go grocery shopping/i);
        expect(divElement).toBeInTheDocument();
        expect(inputElement.value).toBe('');
    });

    it('should render multiple items', () => {
        render(<MockTodo/>);
        addTask(['Go grocery shopping','Go to the gim','Go to the mall']);
        const divElement = screen.getAllByTestId("task-container");
        expect(divElement.length).toBe(3);
    });


    it('should render multiple items', () => {
        render(<MockTodo/>);
        addTask(['Go grocery shopping','Go to the gim','Go to the mall']);
        const divElement = screen.getAllByTestId("task-container");
        expect(divElement.length).toBe(3);
    });

    it('task should not have completed class when initally rendered', async() => {
        render(<MockTodo/>);
        addTask(['Go grocery shopping']);
        const divElement = screen.getByText(/Go grocery shopping/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it('task should have completed class when clicked', () => {
        render(<MockTodo/>);
        addTask(['Go grocery shopping']);
        const divElement = screen.getByText(/Go grocery shopping/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    });
    
});