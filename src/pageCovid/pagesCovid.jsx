import React, { Component } from 'react';
import axios from 'axios';

class pagesCovid extends Component{
    state={
        dataAPI:[]
    }

    getDataAPI = () =>{
        axios.get('https://api.covid19api.com/summary')
            .then(resultnya=>{
                console.log('ini', resultnya);
                // this.setState({
                //     dataAPI: resultnya.data
                // })
            })
    }
    render(){
        return(
            <div className="wrapper-pages">
                {/* {
                    this.state.dataAPI.map(hasil=>{
                        return(
                            <div>
                            {hasil.Countries}
                            </div>
                        )
                    })
                } */}
            </div>
        )
    }
}

export default pagesCovid;