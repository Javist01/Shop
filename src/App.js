import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Диван фиолетовый',
          img:'divan_fiolet.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'chair',
          price:'81.31'
        },
          {
          id: 2,
          title: 'Диван коричневый',
          img:'divan_luxury.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'chair',
          price:'100.00'
        },
          {
          id: 3,
          title: 'Диван розкладной',
          img:'divan_razbor.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'bed',
          price:'317.00'
        },
          {
          id: 4,
          title: 'Диван красный',
          img:'divan_red.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'washbasin',
          price:'170.00'
        },
          {
          id: 5,
          title: 'Диван зелёный',
          img:'GREEn_divan.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'table',
          price:'100.00'
        },
          {
          id: 6,
          title: 'Кресло синее',
          img:'kreslo_blue.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'a flower pot',
          price:'20.31'
        },
          {
          id: 7,
          title: 'Кресло зелёное',
          img:'kreslo_green.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'cupboard',
          price:'317.55'
        },
          {
          id: 8,
          title: 'Кровать',
          img:'krovat_big.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'bag',
          price:'51.41'
        },
          {
          id: 9,
          title: 'Стол',
          img:'stoleshnitsa.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'aroma candles',
          price:'21.21'
        }
      ]
    }
  }


  render() {
  return(
    <div className="wrapper">
      <Header />
      <Items items={ this.state.items } />
      <Footer />
    </div>
  )
    }
}

export default App;
