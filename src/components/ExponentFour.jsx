const ExponentFour = ({ count }) => {


  const exponentialValue = Math.pow(count, 4);


  return (<div className="exponent-counter-container">
    <p className="exponent-label">n^4</p>
    <p className="exponent-result">= {exponentialValue}</p>
  </div>
  )
};

export default ExponentFour;