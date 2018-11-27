import React from 'react'
import { Button } from 'antd'
import {DatePicker} from 'antd'

export default class Page extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  render() {
    const { params: { config }, history } = this.props
    return (
      <div>
        <p>demo - {config}</p>
        <hr />
        <DatePicker />
        <Button onClick={() => {
          history.goBack()
        }}>back</Button>
      </div>
    )
  }

} // class Page end