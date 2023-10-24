import { useSelector, useDispatch } from "react-redux";
import { removeCar , changeSearchTerm} from "../Store/index";
const Carlist = () => {

  const dispatch = useDispatch();
  const { cars, searchTerm, name } = useSelector(({ form, cars : { data, searchTerm} }) => {
    // console.log(state.cars.data);
    return {
      cars: data.filter( car => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase())
      }),
      searchTerm: searchTerm,
      name: form.name
    };
  });

  let total = 0;
  for(let car of cars){
    total = total + parseInt(car.price);
  }

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  }

  const handleSearchTerm = (event) => {
    dispatch(changeSearchTerm(event.target.value))
  }
  return (
    <>
      <section className="carlist-container">
        <div className="list-container">
          <h3> Car List </h3>
          <div className="cars">
            <table>
              <thead>
                <tr>
                  <th> Name </th>
                  <th> Price </th>
                  <th>  </th>
                </tr>
              </thead>
              <tbody>
                {cars &&
                  cars.map((car) => {

                    const bold = name && car.name.toLowerCase().includes( name.toLowerCase())
                    return (
                      <tr key={car.id}>
                        <td className={bold ? "bold" : ""}> { car.name } </td>
                        <td> { car.price }</td>
                        <td> <p onClick={() => handleCarDelete(car)}> </p></td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          {cars && cars.length > 0 && <div className="total">
            <p> Total </p>
            <p> { total } </p>
          </div>}
        </div>

        <div className="search-car">
          <label htmlFor="seachcar"> Search Car: </label>
          <input type="text" name="searchcar" id="searchcar" value={searchTerm} onChange={handleSearchTerm}/>
        </div>
      </section>
    </>
  );
};
export default Carlist;
