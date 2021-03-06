// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input, Message, Card, Icon, Image, Header, Table, Checkbox } from 'semantic-ui-react';
import { intlShape, injectIntl, defineMessages, FormattedMessage, FormattedRelative } from 'react-intl'
import WeatherMap from './WeatherMap';
// Components
class WeatherCity extends React.Component {
    constructor() {
        super()
        this.state = { KelvinTo: true } 
    }
    toggle = () => this.setState({ KelvinTo: !this.state.KelvinTo })
    
    render() {
    const { weather, removeCity, updateCity } = this.props
    const { KelvinTo } = this.state;
        return(
<div>
<WeatherMap weather={weather} />
 <Table color='blue' selectable  inverted size='large'  >
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>
                    <FormattedMessage
                        id={ 'Search.City' }
                        defaultMessage={ 'City' } />
                 </Table.HeaderCell>
                   <Table.HeaderCell>
                      <FormattedMessage
                        id={ 'Search.Date' }
                        defaultMessage={ 'Date' } />
                   </Table.HeaderCell>
                     <Table.HeaderCell>
                        <Button  inverted size='small'  onClick={this.toggle}><FormattedMessage id={ 'Search.Temp' }defaultMessage={ 'Temp' } /> </Button>
                    </Table.HeaderCell>
                        <Table.HeaderCell>
                            <FormattedMessage
                                id={ 'Search.Weather' }
                                defaultMessage={ 'Weather' }
                                />
                        </Table.HeaderCell>
                            </Table.Row>
                            </Table.Header>
                            <Table.Body>
                            <Table.Row>
                                <Table.Cell>{weather.name}</Table.Cell>
                                <Table.Cell><FormattedRelative value={weather.dt*1000}/></Table.Cell>
                                <Table.Cell>{ KelvinTo ? `°C ${weather.main.temp.toFixed(0) - 273}` : `°F ${Math.round(weather.main.temp*9/5-460)}` }</Table.Cell>
                                <Table.Cell>{weather.weather[0].description}
                                    <Image src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} size='mini' />
                                </Table.Cell>
                            </Table.Row>
                            </Table.Body>
                            <Table.Footer>
                    <Button icon='close' inverted size='mini' onClick={() => removeCity(weather.id)}></Button>
                    <Button inverted size='mini' onClick={() => updateCity(weather.name, weather.sys.country)} icon='refresh'></Button>
                            <Table.Row>
                            </Table.Row>
                            </Table.Footer>
                    </Table>
                    </div>
     )
  }
}
export default injectIntl(WeatherCity)