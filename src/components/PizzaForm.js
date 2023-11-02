import React, {useEffect, useState} from "react";

function PizzaForm({editPizza, onFormSubmit}) {
  const [formData, setFormData] = useState({
    size: '',
    topping:'',
    vegetarian: null
  })
  useEffect(()=>{
    if(editPizza){
      const {id, size, topping, vegetarian} = editPizza
      setFormData({
        id: id,
        size:size,
        topping: topping,
        vegetarian: vegetarian 
      })

    }
  },[editPizza])

  const handleChange =(e)=>{
    const {name, value} = e.target
    setFormData({...formData, [name]:value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
    onFormSubmit(formData)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            value={formData.topping}
            placeholder="Pizza Topping"
            onChange={handleChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={formData.size} onChange={handleChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={formData.vegetarian === "Vegetarian"}
              onChange={handleChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={formData.vegetarian === "Not Vegetarian"}
              onChange={handleChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
