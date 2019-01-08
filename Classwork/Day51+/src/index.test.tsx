import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

configure({ adapter: new Adapter() });

// =================Day 59 Jest Default=================
// import App from './Day59/Default/App';
// describe('<App />', () => {
//     it('renders a <App /> components', () => {
//         const wrapper = shallow(<App />);
//         expect(wrapper.find('header').length).toEqual(1);
//     });
//     it('renders without crashing', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<App />, div);
//         ReactDOM.unmountComponentAtNode(div);
//     })
// });

// =================Day 59 Jest TicTacToe=================
import { Board, Square } from './Day59/TicTacToe/TicTacToe'

describe('<Board />', () => {
    it('renders a <Board /> components with 9 squares', () => {
        const wrapper = shallow(<Board />);
        expect(wrapper.find(Square).length).toEqual(9);
    });
    it('fill X in respond to a click', () => {
        const wrapper = shallow(<Board />);
        const board = wrapper.instance() as Board;
        board.handleClick(0);
        expect(board.state.squares).toEqual(['X', null, null,
            null, null, null,
            null, null, null]);
    });
    it('Board should contain a line showing Next Player', () => {
        const wrapper = shallow(<Board />)
        expect(wrapper.find('.status').length).toEqual(1)
    })
    it('Board should divide the Square into 3 rows', () => {
        const wrapper = shallow(<Board />);
        expect(wrapper.find('.board-row').length).toEqual(3)
    })
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Board />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})

describe('<Square />', () => {
    it('propagates the click to parent component', () => {
        const onClick = jest.fn()
        const wrapper = shallow(<Square value={null} onClick={onClick} />)
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toEqual(1)
    })
    it('Square should display a value from prop', () => {
        // tslint:disable-next-line:jsx-no-lambda
        const wrapper = shallow(<Square value='X' onClick={() => jest.fn()}/>)
        expect(wrapper.props().children).toEqual('X');
    })
    it('Clicking all squares should fill up the square state', () => {
        const wrapper = shallow(<Board />)
        const board = wrapper.instance() as Board;
        for (let i: number = 0; i < 9; i++) {
            board.handleClick(i);
        }
        expect(board.state.squares).toEqual(Array(9).fill('X'))
    })
    it('Clicking a square multiple times should not trigger the handleClick more than once', () => {
        const onClick = jest.fn()
        const wrapper = shallow(<Square value={null} onClick={onClick} />)
        wrapper.simulate('click');
        wrapper.simulate('click');
        wrapper.simulate('click');
        expect(onClick.mock.calls.length).toEqual(1)
    })
})