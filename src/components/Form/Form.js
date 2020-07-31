import React from 'react';
import Button from '../Button/Button';
import { Radio, Checkbox, Switch, Input, Slider } from '../Input/Input';
// import Modal from '../Modal/Modal';
import './Form.scss';

export const  FormExample = props => {
  return (
    <div className="FormWrapper p30">
      <h1 className="form-section-title">
        Form Elements
      </h1>
      <Form styleName="input-radio">
        <h1>Radio Input</h1>
        <Radio
          radioName="rad-button"
          radioValue="one-rb"
          radioId="one-rb"
          radioText="1"
          radioStyle="bubble"
        />
        <Radio
          radioName="rad-button"
          radioValue="two-rb"
          radioId="two-rb"
          radioText="2"
          radioStyle="bubble"
        />
        <Radio
          radioName="rad-button"
          radioValue="three-rb"
          radioId="three-rb"
          radioText="3"
          radioDefault="true"
          radioStyle="bubble"
        />
        <Radio
          radioName="rad-button"
          radioValue="four-rb"
          radioId="four-rb"
          radioText="4"
          radioStyle="bubble"
        />
        <Radio
          radioName="rad-button"
          radioValue="five-rb"
          radioId="five-rb"
          radioText="5"
          radioStyle="bubble"
        />
      </Form>

      <Form styleName="input-checkbox">
        <h1>Checkbox</h1>
        <Checkbox
          checkboxName="one-cb"
          checkboxValue="one-cb"
          checkboxId="one-cb"
          checkboxText="One"
          checkboxStyle="bubble"
        />
        <Checkbox
          checkboxName="two-cb"
          checkboxValue="two-cb"
          checkboxId="two-cb"
          checkboxText="Two"
          checkboxDefault="true"
          checkboxStyle="bubble"
        />
        <Checkbox
          checkboxName="three-cb"
          checkboxValue="three-cb"
          checkboxId="three-cb"
          checkboxText="Three"
          checkboxStyle="bubble"
        />
        <Checkbox
          checkboxName="four-cb"
          checkboxValue="four-cb"
          checkboxId="four-cb"
          checkboxText="Four"
          checkboxDefault="true"
          checkboxStyle="bubble"
        />
        <Checkbox
          checkboxName="five-cb"
          checkboxValue="five-cb"
          checkboxId="five-cb"
          checkboxText="Five"
          checkboxStyle="bubble"
        />
      </Form>

      <Form styleName="input-switch-toggle">
        <h1>Switch Toggle</h1>
        <Switch switchStyle="bubble"/>
        <Switch switchStyle="bubble" switchShape="round"/>
      </Form>

      <Form styleName="input-fields">
        <h1>Input Fields</h1>
        <Input 
          inputType="text" 
          inputElement="input"
          inputStyle="bubble"
          inputId="one-i"
          inputName="one-i"
          inputPlaceholder="One"
        />
        <Input 
          inputType="email" 
          inputElement="input"
          inputStyle="bubble"
          inputId="two-i"
          inputPlaceholder="Two@two.com"
          inputName="two-i"
        />
        <Input 
          inputType="tel" 
          inputElement="input"
          inputStyle="bubble"
          inputId="three-i"
          inputName="three-i"
          inputPlaceholder="Three"
        />
        <Input 
          inputElement="select"
          inputStyle="bubble"
          inputName="four-i"
          inputId="four-i"
        >
          <option value="">Select</option>
          <option value="five">Five</option>
          <option value="six">Six</option>
          <option value="seven">Seven</option>
        </Input>
        <Input 
          inputElement="textarea"
          inputStyle="bubble"
          inputPlaceholder="Text Area"
        />
      </Form>

      <Form styleName="buttons">
        <h1>Buttons</h1>
        <Button 
          buttonElement="div" 
          buttonText="Div" 
          buttonStyle="bubble"
        />
        <Button 
          buttonElement="anchor" 
          buttonText="Anchor" 
          buttonHref="/"
          buttonStyle="bubble"
        />
        <Button 
          buttonElement="button" 
          buttonText="Button" 
          buttonType="submit"
          buttonStyle="bubble"
        />
      </Form>

      <Form styleName="sliders">
        <h1>Slider</h1>
        <Slider
          sliderText="Number of Burp ease"
          sliderStyle="bubble"
          defaultValue={50}
          max={100}
          onChange={value => console.log(value)}
        />
      </Form>
      {/* <Modal/> */}
    </div>
  )
}

export default function Form(props) {
  return (
    <div className="Form">
      <div className={props.styleName}>
        {props.children}
      </div>
    </div>
  )
}