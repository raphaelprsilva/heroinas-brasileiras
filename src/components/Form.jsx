import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import TextArea from './TextArea';
import Button from './Button';

export default class Form extends Component {
  render() {
    return (
      <form>
        <Input label="Nome da Carta" type="text" name="name" />
        <TextArea label="Descrição" name="description" />
        <Input label="Inovação" type="number" name="attr1" />
        <Input label="Carisma" type="number" name="attr2" />
        <Input label="Persistência" type="number" name="attr3" />
        <Select label="Raridade" name="rare" />
        <Input label="Selecione a imagem" type="file" name="image" />
        <Input label="Super Trunfo" type="checkbox" name="trunfo" />
        <Button label="Salvar" name="save" />
      </form>
    );
  }
}
