import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                    {
                    key: 'sofa',
                    name: 'Диван'
                },
                    {
                    key: 'armchair',
                    name: 'Кресло'
                },
                    {
                    key: 'bed',
                    name: 'Кровать'
                },
                    {
                    key: 'table',
                    name: 'Стол'
                },

            ]
        }
    }

  render() {
    return (
        <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
            ))}    
        </div>
    )
  }
}

export default Categories