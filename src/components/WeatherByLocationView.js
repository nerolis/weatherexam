   // Modules
import React from 'react';
import { connect } from 'react-redux';
import { FormattedDate, FormattedRelative } from 'react-intl'
import { intlShape, injectIntl, defineMessages, FormattedMessage } from 'react-intl';
// Components
import { Segment, Statistic, Image, Checkbox, Header, Label, Icon, Button } from 'semantic-ui-react'
// Actions
import fetchLocation from '../Actions/locationAction'; 
   class WeatherByLocation extends React.Component {
    constructor() {
      super()
      this.state = {KelvinTo: true} 
} 
    toggle = () => this.setState({ KelvinTo: !this.state.KelvinTo })
  
    render() {
    const { location } = this.props
    const { KelvinTo } = this.state
     return(
        <Segment.Group>
          <Icon size='big' name='time'/><FormattedRelative value={location.dt*1000}/> 
             <Segment size='massive' basic as='h1'>{location.name}</Segment>  
             <Image className='centered' src={`http://openweathermap.org/img/w/${location.weather[0].icon}.png`} size='small' />
              <Segment basic size='massive'>{location.weather[0].description}</Segment>
            <Segment.Group>
            <Segment size='large' basic>
            <FormattedDate
                value={new Date(location.dt*1000)}
                year='numeric'
                month='long'
                day='2-digit'
                />      
            </Segment > 
            <Button  size='massive' inverted size='small'  onClick={this.toggle}>{KelvinTo ? ` °C ${location.main.temp.toFixed(0) - 273}` : `°F ${Math.round(location.main.temp*9/5-460)}`}</Button>             
            </Segment.Group>     
        </Segment.Group>
       
            
       

    )}
 }  
export default injectIntl(connect(null, {fetchLocation})(WeatherByLocation));