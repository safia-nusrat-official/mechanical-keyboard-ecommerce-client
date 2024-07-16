import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
import { Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { GoPlusCircle } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { data, isSuccess } = useGetProductsQuery({
    limit: 10,
    page: 1,
  });

  
  return (
    <Card className="md:p-10">
      <CardHeader>
        <CardTitle>Products</CardTitle>
        <CardDescription className="flex justify-between">
          <span>
            List of all the products which you can manage by updating
            information or deleting it.
          </span>
          <Link to="/create-product">
          <Button className="flex gap-2">Add a Product
            <GoPlusCircle className="text-xl"></GoPlusCircle>
          </Button>
          </Link>
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
                <DashboardListItem
                  key={product._id}
                  product={product}
                ></DashboardListItem>
              ))}
          </TableBody>
        </Table>
        {/* <ProductPagination 
        currentPage={}
        ></ProductPagination> */}
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>
  );
}
