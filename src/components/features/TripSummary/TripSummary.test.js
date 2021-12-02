import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='' name='' cost='' days={1} tags={['a', 'b', 'c']} />);

    expect(component).toBeTruthy(); //sprawdza czy otrzymany wynik (czyli wyrenderowany komponent) jest prawdziwy
  });
  it('should generate link with correct id', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} image='' name='' cost='' days={1} tags={['a', 'b', 'c']} />);

    expect(component.find('Link').prop('to')).toEqual(expectedLink);
  });
  it('should render correct alt and src', () => {
    const expectedAlt = 'name';
    const expectedSrc = 'image.jpg';
    const component = shallow(<TripSummary id='abc' image={expectedSrc} name={expectedAlt} cost='' days={1} tags={['a', 'b', 'c']} />);

    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  it('should render correct name, cost and days', () => {
    const expectedName = 'lorem';
    const expectedCost = '1';
    const expectedDays = 1;
    const component = shallow(<TripSummary id='abc' image='' name={expectedName} cost={expectedCost} days={expectedDays} tags={['a', 'b', 'c']}  />);

    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').childAt(0).text()).toEqual(expectedDays + ' days');
    expect(component.find('.details').childAt(1).text()).toEqual('from ' + expectedCost);
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render tags array', () => {
    const expectedTagsArray = ['one', 'two', 'three'];
    const component = shallow(<TripSummary id='abc' image='' name='' days={1} cost='' tags={expectedTagsArray} /> );

    expect(component.find('.tag').at(0).text()).toEqual(expectedTagsArray[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTagsArray[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTagsArray[2]);
  });
  it('should\'t render tags if tags will not be found', () => {
    const component = shallow(<TripSummary id='abc' image='' name='' days={1} cost='' />);

    expect(component.find('.tags').exists()).toEqual(false);
  });
});