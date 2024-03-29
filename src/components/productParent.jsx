import { useState } from "react";
import ImagePanel from "./imagePanel";
import "./product.css";
import SlideInDiv from "./slideIn";


export default function ProductParent() {
  const [order, setOrder] = useState({
    name: "Single Drill",
    price: 1,
    color: "",
    backpack: false,
    charger: false,
    batteries: 1,
    textArea: "",
    total: 0,
  });

  const BACKPACK_PRICE = 250.00;
  const CHARGER_PRICE = 525.00;
  const BATTERY_PRICE = 175.00;
  const CURRENCY = "$";

  const radioOptions = [
    { name: "Single Drill", price: 100 },
    { name: "2x Drill", price: 200 },
    { name: "Single Drill, plus Saw", price: 300 },
    { name: "2 Drill, plus Polisher", price: 400 },
    { name: "2 Drill, plus Saw, and Polisher", price: 500 },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    console.log(order);
  }

  function getTotal() {
    if (order.batteries <= 1) order.total = order.price + getExtraSubTotal();
    else if (order.batteries > 1)
      order.total = order.price + getExtraSubTotal() + batteryTotal();
    else order.total = order.price;
  }

  function getExtraSubTotal() {
    if (order.charger && order.backpack) return BACKPACK_PRICE + CHARGER_PRICE;
    if (order.backpack) return BACKPACK_PRICE;
    if (order.charger) return CHARGER_PRICE;
    else return 0;
  }
  const handleRadioButton = (e) => {
    const options = JSON.parse(e.target.value);
    setOrder((values) => ({
      ...values,
      name: options.name,
      price: options.price,
    }));
  };

  const handleCheckBox = (e) => {
    setOrder((values) => ({
      ...values,
      backpack: order.backpack ? false : true,
    }));
  };

  const handleBatteriesChange = (e) => {
    if(e.target.value<1){
      setOrder((values) => ({
        ...values,
        batteries: 1,
      }));
    }
    else{
    setOrder((values) => ({
      ...values,
      batteries: e.target.value,
    }));}
  };
  const handleChargerChange = (e) => {
    setOrder((values) => ({
      ...values,
      charger: order.charger ? false : true,
    }));
  };

  const batteryTotal = () => {
    if (order.batteries <= 1) return 0;
    else if (order.batteries > 1) return (order.batteries - 1) * BATTERY_PRICE;
  };

  return (
    <div className="container">
      {getTotal()}

      <SlideInDiv direction="left">
      <div className="selection-panel">
        <h1>Options</h1>
        <form>
          <ul className="tool-list">
            {radioOptions.map((radio) => (
              <li key={radio.name}>
                <label>
                  <input
                    type="radio"
                    value={JSON.stringify(radio)}
                    checked={order.name === radio.name}
                    onChange={handleRadioButton}
                  />
                  {radio.name}--
                  {CURRENCY}
                  {radio.price.toFixed(2)}
                </label>
              </li>
            ))}
          </ul>
          <label>
            Batteries (First one is Free!):
            <input
              name="batteries"
              type="number"
              value={order.batteries}
              onChange={handleBatteriesChange}
            /><br></br>
            Battery subtotal:{CURRENCY}
            {batteryTotal().toFixed(2)}
          </label>
          <div></div>
          <label>
            <input
              type="checkbox"
              checked={order.charger}
              onChange={handleChargerChange}
            />
            Need a Charger for {CURRENCY}
            {CHARGER_PRICE.toFixed(2)}?
          </label>
          <div></div>
          <label>
            <input
              type="checkbox"
              checked={order.backpack}
              onChange={handleCheckBox}
            />
            Add a BackPack for {CURRENCY}
            {BACKPACK_PRICE.toFixed(2)}?
          </label>

          <h3>
            Total: {CURRENCY}
            {order.total.toFixed(2)}
          </h3>
          <button onClick={handleSubmit}>Add to Cart</button>
        </form>
      </div>
      </SlideInDiv>

      <SlideInDiv direction="lright">
      <div className="image-panel">
        <ImagePanel
          name={order.name}
          backpack={order.backpack}
          charger={order.charger}
          batteries={order.batteries}
        />
      </div>
      </SlideInDiv>

    </div>
  );
}
