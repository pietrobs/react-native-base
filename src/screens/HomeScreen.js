import React, { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';

import {
  Logo,
  Text,
  Minicurso
} from '../components';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minicursos: [
        {
          ministrante: "Pietro Barcarollo Schiavinato",
          tema: "Introdução ao JavaScript",
          imagem: { uri: 'https://static1.squarespace.com/static/56b8dfcf62cd94ec072ddb33/t/5b7d19c0562fa73ad4802813/1534925254587/javascript.png' },
          data: '03/05',
          informacoes: "Manhã e tarde (8 horas)"
        },
        {
          ministrante: "Giulia Campos",
          tema: "Introdução aos memes",
          imagem: { uri: 'http://correiodosul.com/wp-content/uploads/2018/03/image-1-1.png' },
          data: '04/05',
          informacoes: "Manhã (4 horas)"
        },
        {
          ministrante: "Matheus Palmeira",
          tema: "NodeJS",
          imagem: { uri: 'https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png' },
          data: '04/05',
          informacoes: "Tarde (4 horas)"
        }
      ],

      palestras: [
        {
          ministrante: "Pietro Barcarollo Schiavinato",
          tema: "BK! Por que?",
          imagem: { uri: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cf/Logotipo_do_Burger_King.svg/1024px-Logotipo_do_Burger_King.svg.png' },
          data: '03/05',
          informacoes: "Os conceitos do BK e como pode um lanche feito em menos de 1 minuto ser mais gostoso que a comida da sua mãe"
        },
        {
          ministrante: "Giulia Campos",
          tema: "Divas Pop",
          imagem: { uri: 'https://m.media-amazon.com/images/M/MV5BMjE4MDI3NDI2Nl5BMl5BanBnXkFtZTcwNjE5OTQwOA@@._V1_UY317_CR4,0,214,317_AL_.jpg' },
          data: '04/05',
          informacoes: "De Alicia Keys a Shakira"
        }
      ]
    };
    this.renderMinicursos = this.renderMinicursos.bind(this)
  }

  renderMinicursos = () => {
    let minicursos = [];
    this.state.minicursos.forEach((minicurso, indice) => {
      minicursos.push(
        <Minicurso
          key={indice}
          {...minicurso}
        />
      )
    });

    return minicursos;
  }

  renderPalestras = () => {
    let palestras = [];
    this.state.palestras.forEach((palestra, indice) => {
      palestras.push(
        <Minicurso
          key={indice}
          {...palestra}
        />
      )
    });

    return palestras;
  }


  render() {
    return (
      <ScrollView>
        <Text style={{ textAlign: 'center', fontSize: 22 }} color="black" fontWeight="light">Minicursos</Text>
        {this.renderMinicursos()}

        <Text style={{ textAlign: 'center', fontSize: 22 }} color="black" fontWeight="light">Palestras</Text>
        {this.renderPalestras()}
      </ScrollView>
    );
  }
}

export default HomeScreen;
