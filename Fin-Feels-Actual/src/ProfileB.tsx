import * as React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
var boy = '/images/p1.jpeg';

class ProfileB extends React.Component {
  public render() {
    return (
      <div>
         <Card>
              <CardImg top width="100%" src={boy} alt="Card image cap" />
              <CardBody>
                <CardTitle>Paul Pham</CardTitle>
                <CardSubtitle>Los Angeles</CardSubtitle>
                <CardText>I am inspried.</CardText>
              </CardBody>
            </Card>
            <div><Link to='/'>Home</Link></div>
       </div>

    );
  }
}

export default ProfileB;