import React, {Component, PropTypes} from 'react'

export default class TextArea extends Component {

  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.node,
    placeholder: PropTypes.string,
    resizable: PropTypes.bool,
  } 

   constructor(props){
      super(props);

      this.handleResize = this.handleResize.bind(this);
      this.state={
        height: 'auto',
      }
   }

   handleResize(){
      let {resizable} = this.props;  
      let elem = this.refs.formTextarea;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        if(!resizable){
           return false; 
        }
        this.setState({height: ''});
        let height = elem.offsetHeight,
            diff = height - elem.clientHeight,
            scrollHeight = elem.scrollHeight; 
        if(scrollHeight + diff > height){
          this.setState({height: `${scrollHeight + diff}px`});
        }    
    }, 0);
   }

   componentWillUnmount(){
     clearTimeout(this.timeout);
   }

    render(){ 
      let {label, icon, placeholder, resizable, ...props} = this.props;  
      if(resizable){
          props.style = {height: this.state.height};
          "change keydown keypress keyup paste cut".split(' ').forEach(eventName => {
              let eventProp = `on${eventName.substr(0, 1).toUpperCase()}${eventName.substring(1)}`;
              props[eventProp] = this.handleResize;
          });
      }
      return (
        <li className="align-top">
            <div className="item-content">
              {icon && <div className="item-media">{icon}</div>}
              <div className="item-inner"> 
                {label && <div className="item-title label">{label}</div>}
                <div className="item-input">
                  <textarea 
                    ref="formTextarea"
                    placeholder={placeholder}
                    className={resizable && 'resizable'} 
                    {...props}></textarea>
                </div>
              </div>
            </div>
        </li>
      )
 }
}

