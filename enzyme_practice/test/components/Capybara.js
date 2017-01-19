// test/components/Capybara.js
import Capybara from 'components/Capybara';

describe('Capybara', () => {
  let image,
      onClick,
      text,
      wrapper;

  beforeEach(() => {
    onClick = jasmine.createSpy('onClick spy');
    wrapper = shallow(
      <Capybara
        image="http://fakeurl.com/capybara"
        onClick={onClick}
        text="I am a Capybara!"
      />
    );
  });

  it('should render an h1 tag', () => {
    expect(wrapper.find('h1')).toBePresent();
  });

  it('should render an h1 tag with the text property value', () => {
    expect(wrapper.find('h1').text()).toBe('I am a Capybara!');
  });

  it('should render an img tag with the specific props', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://fakeurl.com/capybara',
      height: '400',
      width: '600'
    });
  });

  it('should invoke the onClick function from props when clicked', () => {
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });
});
