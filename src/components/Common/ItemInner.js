import React, {PropTypes, Component} from 'react'

const ItemInner = ({title, after, subTitle, text}) => {
   return (
      <div className='item-inner'>
        {(subTitle || text) &&
          <div className='item-title-row'>
            {title &&
              <div className='item-title'>{title}</div>
            }
            {after &&
              <div className='item-after'>{after}</div>
            }
          </div>
        }
        {!subTitle && !text && title &&
          <div className='item-title'>{title}</div>
        }
        {!subTitle && !text && after &&
          <div className='item-after'>{after}</div>
        }
        {subTitle &&
          <div className='item-subtitle'>{subTitle}</div>
        }
        {text &&
          <div className='item-text'>{text}</div>
        }
      </div>
    )
}


ItemInner.propTypes = {
  title: PropTypes.string, 
  after: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  subTitle: PropTypes.string, 
  text: PropTypes.string, 
}

export default ItemInner; 
