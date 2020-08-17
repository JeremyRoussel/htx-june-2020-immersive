import React, { Component } from './node_modules/react'

class Forms extends Component {

    constructor(props) {
        super(props)

        this.state = {
            textValue: "",
            isValid: false,
            selectValue: ""
        }

    }

    handleForm = (e) => {
        e.preventDefault();
        console.log("Form was submitted");
    }

    handleChange = (e) => {
        // this.setState({textValue: e.target.value}, () => {
          
        // })

        let targetValue = e.target.type == 'checkbox' ? e.target.checked : e.target.value;
        // 

        let name = e.target.name; //isValid textValue

        this.setState({
            [name]: targetValue
        },() => {
          console.log(targetValue)
        })
    }

    // handleClick = (e) => {
    //     this.setState({isValid: e.target.checked}, () => {

    //     })
    // }

  render() {
    return (
      <>
        React Forms

        <form onSubmit={this.handleForm} >

            <br />
            <input name="textValue" type="text" onChange={this.handleChange}/>
            <br />
            {this.state.textValue}
            <br />
            <input name="isValid" type="checkbox" checked={this.state.isValid} onChange={this.handleChange}/>
            <br />
            <br />

            <select name="selectValue" onChange={this.handleChange}>
                <option value="NewYork" >New York</option>
                <option value="Houston" >Houston</option>
                <option value="Atlanta" >Atlanta</option>
                <option value="Seatle" >Seatle</option>
                <option value="Detroit" >Detroit</option>

            </select>
            <br />
            <br />

            <button type="submit" >Submit</button>


        </form>
      </>
    )
  }
}

export default Forms