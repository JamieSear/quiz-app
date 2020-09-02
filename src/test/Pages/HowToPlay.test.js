import HowToPlay from "../../Pages/HowToPlay.js";
import { shallow } from 'enzyme';

import '../App.css';
import '../Styles/HowToPlay.css';

describe('HowToPlay', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HowToPlay.WrappedComponent />);
    })

    test('it renders the title', () => {
        expect(wrapper.find('h2').text()).toContain('How to play:');
    });

    test('it renders three paragraphs', () => {
        const liTag = wrapper.find('li');
        expect(liTag).toHaveLength(3)
        
    });
})