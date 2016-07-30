import React, {Component, PropTypes} from 'react'

const Slider = ({icon, label, min = 1, max, step = 0.1, ...props}) => {
  return (
    <li>
      <div className="item-content">
        {icon && <div className="item-media">{icon}</div>}
        <div className="item-inner">
         {label && <div className="item-title label">{label}</div>}
          <div className="item-input">
            <div className="range-slider">
              <input 
                type="range" 
                min={min} 
                max={max} 
                step={step}
                {...props}
                name="slider"/>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

Slider.propTypes = {
  icon: PropTypes.node,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  step: PropTypes.number,
}

export default Slider;  
