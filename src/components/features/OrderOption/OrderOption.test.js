import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderOption type='' name='' />);

    expect(component).toBeTruthy();
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component.isEmptyRender()).toEqual(true);
  });
  it('should render title', () => {
    const expectedTitle = 'name';
    const component = shallow(<OrderOption type='' name={expectedTitle} />);

    expect(component.find('.title'));
  });
});