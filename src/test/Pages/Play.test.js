import Play from '../../Pages/Play'

describe('Play', () => {
    let component, form;
    let fakeEvent = { preventDefault: () => 'fake', target: {name: 'players', value: 3}}
    let preventDefault = { preventDefault: () => 'fake' }

    beforeEach(() => {
        component = shallow(<Play.WrappedComponent/>)
    })

    test('it renders', () => {
        expect(component.find('div')).toHaveLength(1)
    })

    test('it has a state', () => {
        const instance = component.instance()
        expect(instance['state']).toEqual({"category": "9", "difficulty": "easy", "players": "2", "questions": "1"})
    })

    test('it should get quiz', () => {
        form = component.find('form')
        form.simulate('submit', fakeEvent)
        expect(component.state('questions')).toBe(2) 
    })

    test('it should have 4 drop down menus', () => {
        expect(component.find('select')).toHaveLength(4)
    })


    test('it should set the value of the name props', () => {
        component.find('select').at(0).simulate('change', fakeEvent)
        component.update()
        expect(component.find('select').at(0).props().value).toEqual(3)
    })

    test('reset input', () => {
        let resetBtn = component.find('#resetBtn')
        resetBtn.simulate('click', preventDefault)
        expect(component.find('select').at(0).props().value).toEqual("2")
    })
   
})