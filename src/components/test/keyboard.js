import * as React from 'react';
import TextField from 'material-ui/TextField';
import Keyboard from 'react-material-ui-keyboard';
import { extendedKeyboard } from 'react-material-ui-keyboard/layouts';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

const numericKeyboard = [
    ['Escape', '-', 'Backspace'],
    ['7',      '8',         '9'],
    ['4',      '5',         '6'],
    ['1',      '2',         '3'],
    ['0',      '+',     'Enter']
]; 

export default class Keybor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      nome: '',
      telefone: '',
      gmail : ''
    };
    this.onInputNome = this.handleInputNome.bind(this);
    this.onInputTelefone = this.handleInputTelefone.bind(this);
    this.onInputGmail = this.handleInputGmail.bind(this);
  }

  handleInputNome(input) {
    this.setState({
      nome: input
    });
  }

  handleInputTelefone(input) {
    this.setState({
      telefone: input
    });
  }

  handleInputGmail(input) {
    this.setState({
      gmail: input
    });
  }
    
    render() {
    return(
      <div>
      <Keyboard
        textField={
          <TextField
            id="text"
            value={this.state.nome}
            floatingLabelText="Nome"
          />
        }
        automatic
        onInputValueChange={this.onInputNome}
        layouts={[extendedKeyboard]}
        keyboardKeyHeight={50}
        keyboardKeyWidth={100}
        keyboardKeySymbolSize={36}
      />

       <Keyboard
        textField={
          <TextField
            id="text"
            value={this.state.telefone}
            floatingLabelText="Telefone"
          />
        }
        automatic
        onInputValueChange={this.onInputTelefone}
        layouts={[numericKeyboard]}
        keyboardKeyHeight={50}
        keyboardKeyWidth={100}
        keyboardKeySymbolSize={36}
      />
      
      <Keyboard
        textField={
          <TextField
            id="text"
            value={this.state.gmail}
            floatingLabelText="Gmail"
          />
        }
        automatic
        onInputValueChange={this.onInputGmail}
        layouts={[extendedKeyboard]}
        keyboardKeyHeight={50}
        keyboardKeyWidth={100}
        keyboardKeySymbolSize={36}
      />
    </div>
    )
    
  }
};

injectTapEventPlugin();