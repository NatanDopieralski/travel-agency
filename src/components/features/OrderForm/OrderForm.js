import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';
import OrderSummary from '../OrderSummary/OrderSummary';
//import styles from './OrderForm.scss';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, countryCode, tripId, name) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    countryCode,
    tripId,
    name,
  };

  if (options.contact === '' || options.name === '') {
    alert('Please enter contact and name');
    return; //żeby zwrócić submit?
  }

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, tripId, name, countryCode, options, setOrderOption}) => {
  return (
    <Section>
      <Grid>
        <Row>
          {pricing.map(option => (
            <Col md={4} key={option.id}>
              <OrderOption
                {...option}
                currentValue={options[option.id]}
                setOrderOption={setOrderOption}
              />
            </Col>
          ))}
          <Col xs={12}>
            <OrderSummary cost={tripCost} options={options} >
            </OrderSummary>
            <Button onClick={() => sendOrder(options, tripCost, countryCode, name, tripId)}>Order now!</Button>
          </Col>
        </Row>
      </Grid>
    </Section>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  setOrderOption: PropTypes.func,
  options: PropTypes.object,
  tripId: PropTypes.string,
  name: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;
