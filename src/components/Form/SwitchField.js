import React,  {Component, PropTypes} from 'react'

const SwitchField = ({label, icon, ...props}) => {
  return (
    <li>
      <div className="item-content">
        {icon && <div className="item-media">{icon}</div>}
        <div className="item-inner"> 
          {label && <div className="item-title label">{label}</div>}
          <div className="item-input">
            <label className="label-switch">
              <input type="checkbox" {...props}/>
              <div className="checkbox"></div>
            </label>
          </div>
        </div>
      </div>
    </li>
  )
}

SwitchField.propTypes = {
  icon: PropTypes.node, 
  label: PropTypes.string,
  checked: PropTypes.bool,  
  onChange: PropTypes.func,  
}

export default SwitchField; 
