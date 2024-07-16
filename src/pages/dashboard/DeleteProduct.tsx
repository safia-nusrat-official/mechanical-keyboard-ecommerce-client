import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useDeleteProductMutation } from "@/redux/api/productApi";
import { toast } from "sonner";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteProductDialog = ({ _id }: { _id: string }) => {
  const [deleteProduct, { isSuccess }] = useDeleteProductMutation();

  const handleDelete = async () => {
    try {
      const productDeleted = await deleteProduct(_id);
      if (productDeleted?.data) {
        toast.success("Product Deleted Successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="hover:scale-125 flex gap-1 items-center transition-all"
        >
          Delete
          <FaRegTrashAlt />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            product's data.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction style={{
            backgroundColor:"#ffa9ba",
            color:"#a30021",
          }} onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteProductDialog;
