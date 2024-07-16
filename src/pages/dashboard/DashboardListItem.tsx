import { IProduct } from "@/types";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { UpdateModal } from "./UpdateProduct";
import DeleteProductDialog from "./DeleteProduct";
import { Link } from "react-router-dom";

const DashboardListItem = ({ product }: { product: IProduct }) => {
  const { title, availableQuantity, _id, images, brand, price } = product;

  return (
    <TableRow>
      
      <TableCell className="hidden sm:table-cell">
        <Link to={`/products/${_id}`}>
          <img
            alt="Product image"
            className="h-[64px] max-w-36 rounded-md object-cover"
            src={images[0]}
          />
        </Link>
      </TableCell>
      <TableCell className="font-medium">
        <Link to={`/products/${_id}`}>{title}</Link>
      </TableCell>
      <TableCell>
        <Badge variant="outline">{brand}</Badge>
      </TableCell>
      <TableCell>${price}</TableCell>
      <TableCell className="hidden text-center md:table-cell">
        {availableQuantity}
      </TableCell>
      <TableCell className="table-cell">
        <div className="text-xl gap-6 items-center flex">
          <DeleteProductDialog _id={_id}></DeleteProductDialog>

          <UpdateModal product={product}></UpdateModal>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default DashboardListItem;
