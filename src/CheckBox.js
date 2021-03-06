
import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ type = 'checkbox', name, onChange, label }) => (
  <div>
    <label>
      {label} &nbsp;
      <input type={type} name={name} onChange={onChange} />
    </label>
    &nbsp;
  </div>
);

export default Checkbox;

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}