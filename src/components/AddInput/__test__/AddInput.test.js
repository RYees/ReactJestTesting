import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';
// import { BrowserRouter } from 'react-router-dom';

const mockedSetTodo = jest.fn()

describe("AddInput", ()=>{ 
    it('should render input element', () => {
        render(<AddInput
                todos={[]}
                // setTodos={() => {}}  // this also works since setTodos is a hook, it doesn't matter if we pass as empty function or using the below method, the test will pass either way 
                setTodos={mockedSetTodo}
            />);      
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        expect(inputElement).toBeInTheDocument();
    });

    it('should be able to type in the input field', () => {
        render(<AddInput
                todos={[]}
                // setTodos={() => {}}  // this also works since setTodos is a hook, it doesn't matter if we pass as empty function or using the below method, the test will pass either way 
                setTodos={mockedSetTodo}
            />);      
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement, { target: {value: 'Go grocery shopping'}});
        expect(inputElement.value).toBe('Go grocery shopping');
    });

    it('should have empty input field when add button is clicked', () => {
        render(<AddInput
                todos={[]}
                // setTodos={() => {}}  // this also works since setTodos is a hook, it doesn't matter if we pass as empty function or using the below method, the test will pass either way 
                setTodos={mockedSetTodo}
            />);      
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole("button", {name: /Add/i });
        fireEvent.change(inputElement, { target: {value: 'Go grocery shopping'}});
        fireEvent.click(buttonElement);
        expect(inputElement.value).toBe('');
    });
    
});
  