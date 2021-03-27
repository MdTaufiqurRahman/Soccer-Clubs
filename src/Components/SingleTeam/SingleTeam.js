import React from 'react';
import { Button, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router';

const SingleTeam = (props) => {
    const {strTeam, strTeamBadge, strLeague, idTeam} = props.team;
    const history = useHistory();
    const showDetails = idTeam => {
        const url = `team/${idTeam}`;
        history.push(url);
    }
    return (
             <Card style={{ width: '20rem' }}>
             <Card.Img variant="top" src={strTeamBadge} />
             <Card.Body>
                <Card.Title>{strTeam}</Card.Title>
                <Card.Text>
                {strLeague}
                </Card.Text>
            <Button onClick={()=>showDetails(idTeam)} variant="primary"> <strong>Explore</strong> <FontAwesomeIcon icon= {faArrowRight} /></Button>
            </Card.Body>
         </Card>
    );
};

export default SingleTeam;