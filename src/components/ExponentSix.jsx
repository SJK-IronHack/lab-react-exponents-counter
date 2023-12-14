const ExponentSix = ({ count }) => {


  const exponentialValue = Math.pow(count, 6);


  return (<div className="exponent-counter-container">
    <p className="exponent-label">n^6</p>
    <p className="exponent-result">= {exponentialValue}</p>
  </div>
  )
};

export default ExponentSix;