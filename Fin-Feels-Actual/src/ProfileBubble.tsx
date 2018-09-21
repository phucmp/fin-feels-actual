import * as React from "react";
import PersonInterface from './PersonInterface';
import { Link } from 'react-router-dom';

class ProfileBubble extends React.Component<PersonInterface, {}> {

	constructor (props: PersonInterface){
		super(props);
	}
  
  	render() {
  		var emotionBubble = "bubble-" + this.props.emotion;
    	return (
			<div className="profile">
				<Link to={'/profileA/' + this.props.name + '/' + this.props.image + '/' + this.props.location + '/' + this.props.description + '/' + this.props.emotion} >
                    <img className={"bubble hvr-grow " + emotionBubble} src={this.props.image} width="140"/>
                </Link>
                <div>
                    <span>{this.props.name}</span>
                </div>
			</div>
        );
	}
}

export default ProfileBubble;