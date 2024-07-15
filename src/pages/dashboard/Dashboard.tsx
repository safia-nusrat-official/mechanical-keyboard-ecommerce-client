import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { IProduct } from "@/types";
import DashboardListItem from "./DashboardListItem";
import ProductPagination from "@/utils/productPagination";

export default function Dashboard() {
  const { data, isSuccess } = useGetProductsQuery({
    limit:10,
    page:1
  });
  return (
    <Card className="md:p-10">
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription>
          List of all the products which you can manage by updating information
          or deleting it.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">img</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Brand</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="hidden text-center md:table-cell">
                Available Quantity
              </TableHead>
              <TableHead className="hidden md:table-cell">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isSuccess &&
              data?.data?.length &&
              data.data.map((product: IProduct) => (
                <DashboardListItem key={product._id} product={product}></DashboardListItem>
              ))}
          </TableBody>
        </Table>
        {/* <ProductPagination 
        currentPage={}
        ></ProductPagination> */}
      </CardContent>
    </Card>
  );
}
