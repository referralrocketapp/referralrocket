
# Referral Rocket Campaign Join Form

Referral Rocket is a referral and affiliate software. Create, manage and track referrals with our react-based component that allows you to embed a Referral Rocket (affiliate/referral) campaign form. This allows your customers to join your referral program and receive their unique referral link that they can easily share with their network.

## Installation

Install the component using NPM:

```bash
npm install referral-rocket-demo
```

## Usage

Import the `Campaign` component and pass your `campaignId` as a prop:

```js
import React from "react";
import Campaign from "referral-rocket-demo";

const App = () => {
  return (
    <div>
      <Campaign campaignId="your-campaign-id" />
    </div>
  );
};

export default App;
```

## Props

| Prop         | Type     | Description                                                                                                  |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------ |
| `campaignId` | `string` | **Required.** The ID of the Referral Rocket campaign. It loads the signup form script.                       |
| `email`      | `string` | Used to generate unique referral links without requiring user sign-up. Pass it as a parameter to the script. |
| `firstName`  | `string` | (Optional) Pass as a parameter to personalize the signup experience.            |
| `lastName`   | `string` | (Optional) Pass as a parameter to further personalize the experience.        |


---

### Notes

* This component dynamically loads the external Referral Rocket script to render the join form inside your React app.
* Be sure to use the correct `campaignId` associated with your Referral Rocket campaign.

## License

ISC
