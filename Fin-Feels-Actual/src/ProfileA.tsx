import * as React from 'react';
import { Link } from 'react-router-dom';
import './ProfileA.css';

interface ProfileAProps {
  match:any;
}

class ProfileA extends React.Component< ProfileAProps > {
  public render() {
    var fullName = this.props.match.params.name;
    var location = this.props.match.params.location;
    var description = this.props.match.params.description;
    var emotion = this.props.match.params.emotion;
    var image = '/images/' + this.props.match.params.image;
    return (
      <div>
        <div className="card">
          <div className="box">
            <div className="sonar-wrapper">
              <div className="sonar-emitter">
                <div className={"sonar-wave sonar-" + emotion}></div>
                  <div className="img">
                    <img id="image" src={image}></img>
                  </div>
                </div>
              </div>
              
              <h2 id="name">{fullName}</h2>
              <span id="location">{location}</span><br></br>
              <p className='desc' id="description">{description}</p>

          </div>
        </div>
        <Link to="/" className="btn btn-success btn-lg">
          <span className="glyphicon glyphicon-home"></span> 
        </Link>
      </div>

    );
  }
}

export default ProfileA;