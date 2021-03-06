import React from 'react';
import Wizard from './containers/wizard';
import steps from './components/steps/index';
import shippingObj from './partials/shippingObj';
import Header from './partials/header';
import ShippingLabel from './components/shpping-label';

export default class ShippingLabelMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelReady: false
    };
    this.createLabel = this.createLabel.bind(this);
  }

  createLabel(val) {
    this.setState({
      labelReady: true,
      info: val
    });
  }
  render() {
    return (
      <div>
        {this.state.labelReady ? (
          <ShippingLabel info={this.state.info} />
        ) : (
          <Wizard
            header={Header}
            steps={steps}
            wizardContext={shippingObj}
            onComplete={this.createLabel}
          />
        )}
      </div>
    );
  }
}
