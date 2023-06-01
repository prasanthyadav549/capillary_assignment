import React, { useEffect, useState } from "react";
import ScratchCard, { CUSTOM_BRUSH_PRESET } from "react-scratchcard-v2";

const x = CUSTOM_BRUSH_PRESET;

const ScratchCardComponent = () => {
  const [percentageOff, setPercentageOff] = useState(0);
  const ref = React.createRef();

  const onClickReset = () => {
    ref.current && ref.current.reset();
    setPercentageOff(0); // Reset the percentage off
  };

  const onComplete = () => {
    const randomPercentage = Math.floor(Math.random() * 100);
    setPercentageOff(randomPercentage);
    console.log("Complete - Percentage off:", randomPercentage);
  };

  useEffect(() => {
    // Update the document title using the browser API
  });

  return (
    <div>
      <button onClick={onClickReset}>Reset</button>
      <ScratchCard
        ref={ref}
        width={372}
        height={226}
        image={process.env.PUBLIC_URL + '/scratch-card2.jpg'}
        finishPercent={35}
        onComplete={onComplete}
        brushSize={25}
        customBrush={x}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {percentageOff > 0 && <h2>{percentageOff}% off!</h2>}
        </div>
      </ScratchCard>
    </div>
  );
};

export default ScratchCardComponent;
