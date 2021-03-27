import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleTeam from '../SingleTeam/SingleTeam';
import {Container} from 'react-bootstrap';
import './Teams.css';

const Teams = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url ='https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
        axios(url)
        .then(data =>setTeams(data.data.teams))
    },[])
    
    return (
            <Container>
             <div className="row" style={{
                 textAlign: 'center',
                 marginTop:'40px',
                 rowGap:'40px',
                 columnGap:'82px',
            }} >
        
            {
                teams.map(team => <SingleTeam team={team} ></SingleTeam>)
            }
            </div>
        </Container>
    );
};

export default Teams;
