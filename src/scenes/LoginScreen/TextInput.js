import React from 'react';



class TextInput2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { placeholder: props.value.length == 0 }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(ev) {
      this.setState({ placeholder: ev.nativeEvent.text.length == 0 }); 
      this.props.onChange && this.props.onChange(ev); 
    }
    render() {
      const { placeholderStyle, style, onChange, ...rest } = this.props;
  
      return <TextInput 
        {...rest} 
        onChange={this.handleChange}
        style={this.state.placeholder ? [style, placeholderStyle] : style}
        />
    }
  }
  export default TextInput2