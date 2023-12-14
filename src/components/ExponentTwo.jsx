const ExponentTwo = ({ count }) => {
  const exponentialValue = Math.pow(count, 2);


  return (<div className="exponent-counter-container">
    <p className="exponent-label">n^2</p>
    <p className="exponent-result"> = {exponentialValue} </p>
  </div>
  )
};

export default ExponentTwo;