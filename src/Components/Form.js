import { useDispatch, useSelector } from "react-redux";
import { changeName, changePrice, addCar } from "../Store/index"; 

const Form = () => {

  const { name, price} = useSelector((state) => {
    return {name: state.form.name, price: state.form.price };
  });

  const dispatch = useDispatch();
  const handleOnNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleOnPriceChange = (event) => {
    dispatch(changePrice(event.target.value));
  };

  const handleOnAddCarClick = () => {
    // dispatch(addCar({ name: name, price: price}));
    dispatch(addCar({ name, price}));
  };
  return (
    <>
      <section className="form-container">
        <div className="search">
          <label htmlFor="carname"> Car Search</label>
          <input
            type="text"
            name="carname"
            id="carname"
            value={name}
            onChange={(event) => handleOnNameChange(event)}
          />
        </div>

        <div className="price">
          <label htmlFor="carprice"> Car Price</label>
          <input
            type="number"
            name="carprice"
            id="carprice"
            value={price}
            onChange={(event) => handleOnPriceChange(event)}
          />
        </div>

        <div className="add-button">
          <button onClick={() => handleOnAddCarClick()}> Add Car </button>
        </div>
      </section>
    </>
  );
};
export default Form;
