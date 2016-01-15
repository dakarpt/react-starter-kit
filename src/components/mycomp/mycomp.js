/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 * <Datetime isValidDate={ valid }/>
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */
import { cw } from '../../../../../myfuncs/myfuncs';
import React, { Component, PropTypes } from 'react';
import s from './mycomp.scss';
import withStyles from '../../decorators/withStyles';
var Gravatar = require('react-gravatar');
//var Datetime = require('react-datetime');
var DateTimeField = require('react-bootstrap-datetimepicker');
//var ReactBootstrap = require('react-bootstrap');
var Button = require('react-bootstrap').Button;
//import Button from 'react-bootstrap';

const title = 'My React Component';
var email = 'alberto-s-ramos@telecom.pt';

var valid = function (current) {
  return current.day() != 0 && current.day() != 6;
};

//var button = ReactBootstrap.Button({
//  bsStyle: "success",
//  bsSize: "large",
//  children: "Register"
//});

@withStyles(s)
class mycomp extends Component {

  //static contextTypes = {
  //  onSetTitle: PropTypes.func.isRequired,
  //};

  //static defaultProps = {
  //  title: 'oi title',
  //  email: 'alberto-s-ramos@telecom.pt',
  //  description: 'desc',
  //};

  //getInitialState = function () {
  //  return {email: this.props.email};
  //};

  componentWillMount() {
    //this.context.onSetTitle(title);
    this.setState({email: 'alberto-s-ramos@telecom.pt'});
  };

  handleClick = function () {
    console.log("hello click");
    if (this.state.email == 'alberto-s-ramos@telecom.pt') {
      this.setState({email: 'nunocaeiro@sapo.pt'});
    } else
    if (this.state.email == 'nunocaeiro@sapo.pt')
      this.setState({email: 'alberto-s-ramos@telecom.pt'});

  }.bind(this);

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>.xxxxxxxxx..</p>
          <p onClick={this.handleClick}>
            You this. Click to toggle.
            <Gravatar email={this.state.email}/>
          </p>
          <p>{this.state.email}</p>
          <Button bsStyle="success">Learn more</Button>
          <div>
            <DateTimeField />
          </div>
        </div>
      </div>
    );
  }

}

export default mycomp;
