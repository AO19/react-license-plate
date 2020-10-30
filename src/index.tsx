import * as React from 'react';
import './styles.scss';

interface ILicensePlateProps {
  plateColor?: string;
  countryCode: string;
  countryCodeColor?: string;
  plateId: string;
  height: number;
}

const LicensePlate = ({
  plateColor = '#fff',
  countryCode,
  countryCodeColor = '#fff',
  plateId,
  height
}: ILicensePlateProps) => {

  const handleCountryCodeSize = () => {
    if (countryCode.length > 1) {
      return `${height / 5}px`;
    } else {
      return `${height / 3}px`;
    }
  };

  return (

    <div
      className="license-plate__rectangle"
      style={{
        height: `${height}px`,
        width: `${height * 3}px`,
        backgroundColor: plateColor
      }}
    >
      <div className="license-plate__rectangle--country">
        <div className="european-stars">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/European_stars.svg"
            alt="Stars of european flag"
            style={{ width: "80%" }}
          />
        </div>
        <div className="country-code">
          <h1
            style={{
              color: countryCodeColor,
              fontSize: handleCountryCodeSize()
            }}
          >
            {countryCode.substring(0, 3)}
          </h1>
        </div>
      </div>
      <div className="license-plate__rectangle--id">
        <h1 style={{ fontSize: `${height / 2}px` }}>{plateId}</h1>
      </div>
    </div>
  );
};

export default LicensePlate;
