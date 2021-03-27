import React from 'react';
import banner from '../../banner.jpg';
import Teams from '../Teams/Teams';
import { Card} from 'react-bootstrap';

const Header = () => {
    return (
       <div style={{backgroundColor:'#001a33'}}>
        <Card className="bg-dark text-white">
        <Card.Img style={{width:'100%', height:'350px'}} src={banner} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title style={{fontSize:'60px',textAlign:'center',marginTop:'80px'}} ><strong>Soccer Clubs</strong></Card.Title>
        </Card.ImgOverlay>
      </Card>
      <Teams></Teams>
      </div>
    );
};

export default Header;