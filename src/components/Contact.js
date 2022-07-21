import React from 'react';
import "../css_modules/contact.module.css";
import { base_url } from "../utils/constants";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: ['wait...']
    };
  }

  fillPlanets(url) {
    fetch(url)
      .then(response => response.json())
      .then(json => json.map(item => item.name))
      .then(planets =>  this.setState({ planets }));
  }

  componentDidMount() {
    this.fillPlanets(`${base_url}/v1/planets`);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          console.log(e.currentTarget.planet.value);
          console.log(e.currentTarget.firstname.value);
        }}>
          <label>First Name
            <input type="text" name="firstname" placeholder="Your name.." />
          </label>
          <label>Planet
            <select name="planet">{
              this.state.planets.map((item, index) => <option value={item} key={index}>{item}</option>)
            }
            </select>
          </label>
          <label>Subject
            <textarea name="subject" placeholder="Write something.." />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Contact;
