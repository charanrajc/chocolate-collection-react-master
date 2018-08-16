import React from 'react'
import axios from 'axios'

class AddChocolate extends React.Component {

  constructor(props) {
    super(props);
    this.state = {brands: [], name: '', desc: '', logo: '', brandId: '', isFormValid: false}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:4000/brands')
      .then(response => this.setState({brands: response.data}))
  }

  handleSubmit(e) {
    e.preventDefault();
    let {name, desc, brandId, image} = this.state;
    axios.post(`http://localhost:4000/chocolates/`, {name, desc, brandId, image})
      .then(response => {
        this.props.history.push('/chocolates')
      })
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value}, () => {
      if (this.state.name && this.state.desc && this.state.brandId) {
        this.setState({isFormValid: true})
      } else {
        this.setState({isFormValid: false})
      }
    })
  }

  renderBrandsSelect() {
    return (<select id="brandId" className="form-control" onChange={this.handleChange}>
      <option selected>Please select brand</option>
      {this.state.brands.map(b => <option value={b.id}>{b.name}</option>)}
    </select>)
  }

  render() {
    return (
      <fieldset className="signup mx-5 mt-2">
        <legend>Add Chocolate</legend>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label htmlFor="first_name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Chocolate Name" required="true"
                   onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <textarea className="form-control" id="desc" placeholder="Description goes here..."
                      onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="first_name">Image</label>
            <input type="text" className="form-control" id="name" placeholder="Image" required="true"
                   onChange={this.handleChange}/>
          </div>

          <div className="form-group">
            <label htmlFor="desc">Select Brand</label>
            {this.renderBrandsSelect()}
          </div>
          <button type="submit" className="btn btn-primary" disabled={!this.state.isFormValid}>Save</button>
        </form>
      </fieldset>)
  }
}

export default AddChocolate