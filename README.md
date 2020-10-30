# react-license-plate

A simple React component that visualizes a european (for now) license plate with the flag, country code and license plate number (id).

## How to use

`npm install react-license-plate`

You can now import `react-license-plate` like so:

```js
import LicensePlate from 'react-license-plate'
...
```

## Available props

```ts
interface ILicensePlateProps {
  plateColor?: string;
  countryCode: string;
  countryCodeColor?: string;
  plateId: string;
  height: number;
}
```

## Examples

Code:

```js
<LicensePlate
  plateColor="#fff"
  countryCode="D"
  countryCodeColor="#fff"
  plateId="KA-PA 777"
  height={150}
/>
```

Result:
