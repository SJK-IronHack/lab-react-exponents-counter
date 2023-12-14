const ExponentFive = ({ count }) => {


  const exponentialValue = Math.pow(count, 5);


  return (<div className="exponent-counter-container">
    <p className="exponent-label">n^5</p>
    <p className="exponent-result">= {exponentialValue}</p>
  </div>
  )
};

export default ExponentFive;