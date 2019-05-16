import React from 'react';

const Icon = ({ type, ...props }) => <i className={`fas fa-${type}`} {...props} />;

export default Icon;
