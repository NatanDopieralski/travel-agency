import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Section from '../../layout/Section/Section';
import OrderSummary from '../OrderSummary/OrderSummary';
//import styles from './OrderForm.scss';

const OrderForm = ( tripCost, options ) => {
    return (
        <Section>
            <Grid>
                <Row>
                    <Col xs={12}>
                        <OrderSummary tripCost={tripCost} options={options}>
                        
                        </OrderSummary>
                    </Col>
                </Row>
            </Grid>
        </Section>
    )
}

export default OrderForm;
