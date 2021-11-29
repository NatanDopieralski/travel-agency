import {connect} from 'react-redux';
import Country from './Country';
import { getCountryByCode } from '../../../redux/countriesRedux';
import { getTripsForCountry } from '../../../redux/tripsRedux';

const mapStateToProps = (state, props) => {
  const country = getCountryByCode(state, props.match.params.id);
  const trips = getTripsForCountry(state, country.alpha3Code);
  console.log(country, trips);
  return {
    ...country,
    trips,
  };

};

export default connect(mapStateToProps)(Country);
