import Form from "./Form";
import Carlist from "./Carlist";
const Cars = () => {
  return (
    <>
      <section className="parent-container">
        <div className="container">
        <h1> Car List Application </h1>
        <Form />
        <Carlist />
        </div>
      </section>
    </>
  );
};
export default Cars;
