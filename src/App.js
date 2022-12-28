import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Диван фиолетовый',
          img:'divan_fiolet.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'sofa',
          price:'81.31'
        },
          {
          id: 2,
          title: 'Диван коричневый',
          img:'divan_luxury.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'chsofaair',
          price:'100.00'
        },
          {
          id: 3,
          title: 'Диван розкладной',
          img:'divan_razbor.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'sofa',
          price:'317.00'
        },
          {
          id: 4,
          title: 'Диван красный',
          img:'divan_red.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'sofa',
          price:'170.00'
        },
          {
          id: 5,
          title: 'Диван зелёный',
          img:'GREEn_divan.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'sofa',
          price:'100.00'
        },
          {
          id: 6,
          title: 'Кресло синее',
          img:'kreslo_blue.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'armchair',
          price:'20.31'
        },
          {
          id: 7,
          title: 'Кресло зелёное',
          img:'kreslo_green.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'armchair',
          price:'317.55'
        },
          {
          id: 8,
          title: 'Кровать',
          img:'krovat_big.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'bed',
          price:'51.41'
        },
          {
          id: 9,
          title: 'Стол',
          img:'stoleshnitsa.jpg',
          desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          category:'table',
          price:'21.21'
        }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }


  render() {
  return(
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory} />
      <Items items={ this.state.currentItems } onAdd={this.addToOrder} />
      <Footer />
    </div>
  )
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return 
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }


  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, item] })
  }
}

export default App;
