import React from 'react'
import { connect } from 'react-redux'
import { chooseTypeSearch } from '../actions'
import { getType } from '../reducers/products'
//import SelectItem from '../components/SelectItem'

const listSort =

[{"Description":"Título"},{"Description":"Menor Precio"},{"Description":"Mayor Precio"},{"Description":"Mejor Calificación"},{"Description":"Menor distancia"}]
;

const SelectContainer = ({ chooseTypeSearch }) => (

  <div className="title text-center">
    <select onChange={(e) => chooseTypeSearch(e.target.value)} >
        {listSort.map(d => <option value={d.Description}>{d.Description}</option>)}
    </select>
  </div>

)

const mapStateToProps = state => ({
  type: getType(state)
})

export default connect(
  mapStateToProps,
  { chooseTypeSearch }
)(SelectContainer)
