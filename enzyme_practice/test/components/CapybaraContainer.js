// test/components/CapybaraContainer.js
import CapybaraContainer from 'components/CapybaraContainer';
import Capybara from 'components/Capybara';

describe('CapybaraContainer', () => {
  let wrapper;

  describe('shallow rendered component', () => {
    beforeEach(() => {
      spyOn(CapybaraContainer.prototype, 'handleClick').and.callThrough();
      wrapper = shallow(<CapybaraContainer />);
    });

    it('should should have the specified inital state', () => {
      expect(wrapper.state()).toEqual({ hasBird: false });
    });

    it('should render an Capybara Component', () => {
      expect(wrapper.find(Capybara)).toBePresent();
    });

    it('should render the Capybara Component with specific props when hasBird is false', () => {
      expect(wrapper.find(Capybara).props()).toEqual({
        image: 'http://tinyurl.com/jefhp9q',
        onClick: jasmine.any(Function),
        text: 'Sleepy Capybara'
      });
    });

    it('should render the Capybara Component with specific props when hasBird is true', () => {
      wrapper.setState({ hasBird: true });
      expect(wrapper.find(Capybara).props()).toEqual({
        image: 'http://tinyurl.com/zkgcwed',
        onClick: jasmine.any(Function),
        text: 'Capybara with bird friend!'
      });
    });

    describe('handleClick', () => {
      it('should be invoked when the function assigned to the onClick propety of the Capybara props is executed', () => {
        wrapper.find(Capybara).props().onClick();
        expect(CapybaraContainer.prototype.handleClick).toHaveBeenCalled();
      });

      it('should change the hasBird property in the state to the opposite boolean value', () => {
        wrapper.find(Capybara).props().onClick();
        expect(wrapper.state()).toEqual({ hasBird: true });
      });
    });
  });


  describe('full DOM rendered component', () => {
    beforeEach(() => {
      spyOn(CapybaraContainer.prototype, 'componentDidMount').and.callThrough();
      spyOn(global, 'alert');
      wrapper = mount(<CapybaraContainer />);
    });

    it('should invoke componentDidMount', () => {
      expect(CapybaraContainer.prototype.componentDidMount).toHaveBeenCalled();
    });

    it('should invoke componentDidMount', () => {
      expect(alert).toHaveBeenCalledWith('click on the Capybara!');
    });
  });
});
