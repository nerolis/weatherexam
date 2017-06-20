// Modules
import React from 'react';
import { Link, Route} from 'react-router-dom';
import { mainstyle } from './main.scss';
import { Container, Grid, } from 'semantic-ui-react';
// Components
import LocalesMenu from './Navigation/LocalesMenu';
import WeatherSearch from './WeatherSearch';
import WeatherList from './WeatherList';
import WeatherByLocation from './WeatherByLocation';
const App = () => (
    <Container>
      <Grid columns={3}>
      
          <Grid.Column> 
            <WeatherByLocation />
             </Grid.Column>
                <Grid.Column verticalAlign='bottom'>
                   <WeatherList />
                   <WeatherSearch />
                </Grid.Column>
       
  
      </Grid>    
    </Container>
)
  

export default App;