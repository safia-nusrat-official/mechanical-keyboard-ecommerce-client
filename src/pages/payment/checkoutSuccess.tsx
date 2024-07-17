import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <Result
      status="success"
      title="Successfully Placed Your Order!"
      subTitle="Currently your order is in-progress. It will be delivered to you soon. How about some more shopping till then?"
      extra={[
        <Link to="/products">
          <Button type="primary" key="console">
            Browse more products
          </Button>
        </Link>,
        <Link to="/">
          <Button key="buy">Go back home</Button>,
        </Link>,
      ]}
    />
  );
};

export default CheckoutSuccess;
