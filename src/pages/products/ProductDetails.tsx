import { useParams } from "react-router-dom";

const ProductDetails = ({ params }: Record<string, any>) => {
  const { id } = useParams();
  return <section className="md:p-20">
    <span>ProductDetails of product no {id}</span>
  </section>;
};

export default ProductDetails;
