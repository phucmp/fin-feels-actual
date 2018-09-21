import * as React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import ProfileBubble from './ProfileBubble';
import PersonInterface from './PersonInterface';

interface AppState {
  profiles: PersonInterface[];
}

class App extends React.Component <{}, AppState > {
  constructor(props: any) {
    super(props);
    this.state = {
      profiles:[{
          pid: 0, 
          name: "Jamie Corr", 
          location: "Los Angeles", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2018-09-20T08:57:27", 
          image: "images/girl0.jpeg"
        },
        { 
          pid: 1, 
          name: "Paul Pham", 
          location: "Los Angeles", 
          emotion: "angry", 
          description: "Chipotle prices were higher.", 
          timeStamp: "2018-09-19T22:57:27", 
          image: "images/p1.jpeg"
        },
        { 
          pid: 2, 
          name: "Brynna Conway", 
          location: "Chicago", 
          emotion: "sad", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/p3.jpeg"
        },
        { 
          pid: 3, 
          name: "Christian Galang", 
          location: "Houston", 
          emotion: "angry", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/p2.jpeg"
        }, 
        { 
          pid: 4, 
          name: "Emma Fass", 
          location: "DC", 
          emotion: "other", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "http://kb4images.com/images/picture-girl/38191181-picture-girl.jpg" 
        },
        { 
          pid: 5, 
          name: "Jewell Finder", 
          location: "Houston", 
          emotion: "friendly", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/p5.jpeg" 
        },
        { 
          pid: 6, 
          name: "Katie Schermerhorn", 
          location: "Chicago", 
          emotion: "inspired", description: "Please Update Me", timeStamp: "2018-09-19T11:57:27", 
          image: "images/p6.jpeg" 
        },
        { 
          pid: 7, 
          name: "Kendra Anderson", 
          location: "Dallas", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/p7.jpeg"
        },
        { 
          pid: 8, 
          name: "Madison Wheeler", 
          location: "New York", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/girl5.jpeg" 
        },
        { 
          pid: 9, 
          name: "Marc Oelkers", 
          location: "New York", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/p4.jpeg"  
        },
        { 
          pid: 10, 
          name: "Ryan Ding", 
          location: "Dallas", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/boy5.jpeg"
        },
        { 
          pid: 11, 
          name: "Sarah Drumm", 
          location: "Chicago", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/girl4.jpeg"
        },
        { 
          pid: 12, 
          name: "Trevor Dixon", 
          location: "Dallas", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/boy3.jpeg"
        },
        { 
          pid: 13, 
          name: "Alex Deany", 
          location: "San Francisco", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/girl3.jpeg"
        },
        { 
          pid: 14, 
          name: "Joey Schutz", 
          location: "San Francisco", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/boy4.jpeg"  
        },
        { 
          pid: 15, 
          name: "Mitch Hussey", 
          location: "New York", 
          emotion: "happy",
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/boy2.jpeg" 
        },
        { 
          pid: 16, 
          name: "Rachel Hale", 
          location: "Seattle", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2017-09-19T11:57:27", 
          image: "images/girl1.jpg"
        },
        { 
          pid: 17, 
          name: "Tyler Wessels", 
          location: "Chicago", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/boy1.jpeg"
        },
        { 
          pid: 18, 
          name: "Maryam Hedayati", 
          location: "New York", 
          emotion: "happy", 
          description: "Please Update Me", 
          timeStamp: "2018-09-19T11:57:27", 
          image: "images/girl2.jpeg" 
        },
      ]
    }
  }
  public render() {
    return (
      <div className="App">

        <div id="title">
          <div id="edit">
            <Link to="/" className="btn btn-success btn-sml">
              <span className="glyphicon glyphicon-edit"></span> 
            </Link>
            <Link to="/" className="btn btn-danger btn-sml">
              <span className="glyphicon glyphicon-off"></span> 
            </Link>
          </div>
          <div id="heading">
            <h1>FIN FEELS</h1>
          </div>
        </div>

        <div id="profiles">
          {this.state.profiles.map (
            x => <ProfileBubble key={x.pid}
            pid={x.pid}
            name={x.name}
            location={x.location}
            emotion={x.emotion}
            description={x.description}
            timeStamp={x.timeStamp}
            image={x.image}/>
          )}
        </div>
      </div>

    );
  }
}

export default App;
