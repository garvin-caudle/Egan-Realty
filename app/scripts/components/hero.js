const React = require('react');
import Form from './form';
import Introduction from './introduction';
import Welcome from './welcome';

// <Hero />
class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <Welcome />
        <Form />
      </div>
    )
  }
};

export default Hero;
