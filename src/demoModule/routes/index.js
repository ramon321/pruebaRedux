import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from '../components/views/home';

export default [
	<Route key="home" exact path="/" component={Home} />
];
