it("should render a label", () => {
  const wrapper: any = shallow(<Label>Hello Jest!</Label>);
  expect(wrapper).toMatchSnapshot();
});

it("should render a small label", () => {
  const wrapper: any = shallow(<Label small>Hello Jest!</Label>);
  expect(wrapper).toMatchSnapshot();
});

it("should render a grayish label", () => {
  const wrapper: any = shallow(<Label light>Hello Jest!</Label>);
  expect(wrapper).toMatchSnapshot();
});
