import React from "react";
import data from "../DetailsPage/DetailsPage.json";
import Image from "next/Image";
const Ceo = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          {data.Section1.map((DetailData) => {
            return (
              <>
                <div className="col-3 mt-5">
                  <Image
                    src={DetailData.Image}
                    alt="err"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="col-9 mt-5">
                  <h3>{DetailData.Heading}</h3>
                  <h6>{DetailData.SubHeading}</h6>
                  <p>{DetailData.Content}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Ceo;