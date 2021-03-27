import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileSignature,
     faFlag, 
     faMars, 
     faPodcast, 
    } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Facebook from '../../Facebook.png';
import Twitter from '../../Twitter.png';
import YouTube from '../../YouTube.png';

const TeamDetails = () => {
    const {id} = useParams()
    const [team, setTeam] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams[0]))
    },[id])

    return (

     <div style={{backgroundColor:'#001a33'}}>
            <Card className="bg-dark text-white">
            <Card.Img src={team.strTeamBanner} alt="Card image" />
        </Card>

        <Container>
        <div>
        <Card style={{
            backgroundColor:'blue',
            color:'white',
            marginTop:'20px',
            padding:'10px',
            borderRadius:'10px',
            }} >

        <Card.Title>{team.strTeam}</Card.Title>
        <Card.Text><FontAwesomeIcon icon= {faPodcast}/> Founded: {team.intFormedYear}</Card.Text>
        <Card.Text><FontAwesomeIcon icon= {faFlag}/> Country: {team.strCountry}</Card.Text>
        <Card.Text><FontAwesomeIcon icon= {faFileSignature}/> Full Name: {team.strAlternate}</Card.Text>
        <Card.Text><FontAwesomeIcon icon= {faMars}/> Gender: {team.strGender}</Card.Text>
        </Card>
        </div>


     <div  style={{
        color: 'white',
        marginTop:'20px',
         padding:'2px'
         }} > 
            <p>
                {team.strStadiumDescription}
            </p>
            <p>
                {team.strDescriptionEN}
            </p>
            </div>

        <div style=
        {{
            textAlign: 'center',
            padding:'10px',
        }}>
            <Link to ={{pathname: `https://${team.strFacebook}`}} target='_blank' >
                <img style ={{width:'8%'}}src={Facebook} alt=""/>
            </Link>
            <Link to ={{pathname: `https://${team.strTwitter}`}} target='_blank' >
                <img style ={{width:'8%'}} src={Twitter} alt=""/>
            </Link>
            <Link to ={{pathname: `https://${team.strYoutube}`}} target='_blank' >
                 <img style ={{width:'8%'}} src={YouTube} alt=""/>
            </Link>
        </div>
        </Container>
      </div>

    );
};

export default TeamDetails;