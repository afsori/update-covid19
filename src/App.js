import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import Header from './pageCovid/Header';


class App extends Component {
  state={
    getDataAPI:[]
  }

  getData = ()=>{
    axios.get('https://api.covid19api.com/summary')
    .then(result =>{
      this.setState({
        getDataAPI: result.data.Countries
      })
    })
  }

  componentDidMount(){
  this.getData();
  }

  render(){
  return (
    <div className="App">
      <div className="wrapper-homepage">
        <Header/>
           <div className="container-card">
             <h2>Displays all available countries about CoronaVirus</h2>
              <div className="wrapper-card">
                {
                  this.state.getDataAPI.map(hasil =>{
                    return(
                      <div className="card-hasil" key={hasil.CountryCode}>
                    <div>
                      <h3>Country</h3>
                      <h4>{hasil.Country}</h4>
                    </div>
                      <div>
                      <p>Country Code</p>
                      <h4>{hasil.CountryCode}</h4>
                      </div>
                      <div>
                      <p>Date</p>
                      <h6>{hasil.Date}</h6>
                      </div>
                      <div>
                      <p>New Confirmed</p>
                      <h4>{hasil.NewConfirmed}</h4>
                      </div>
                      <div>
                      <p>New Deaths</p>
                      <h4>{hasil.NewDeaths}</h4>
                      </div>
                      <div>
                      <p>New Recovered</p>
                      <h4>{hasil.NewRecovered}</h4>
                      </div>
                      <div>
                      <p>Slug</p>
                      <h4>{hasil.Slug}</h4>
                      </div>
                      <div>
                      <p>Total Confirmed</p>
                      <h4>{hasil.TotalConfirmed}</h4>
                      </div>
                      <div>
                      <p>Total Death</p>
                      <h4>{hasil.TotalDeaths}</h4>
                      </div>
                      <div>
                      <p>Total Recovered</p>
                      <h4>{hasil.TotalRecovered}</h4>
                      </div>
                  </div>
                    )
                  })
                }
            </div>
          </div>
        </div>  
    </div>
  );
  }
}

export default App;
