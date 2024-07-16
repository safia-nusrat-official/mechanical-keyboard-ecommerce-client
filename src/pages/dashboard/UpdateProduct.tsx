import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CiPen } from "react-icons/ci";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateProductMutation } from "@/redux/api/productApi";
import { IProduct } from "@/types";
import { toast } from "sonner";
import { ImageUploader } from "@/utils/imageUploader";

export const UpdateModal = ({ product }: { product: IProduct }) => {
  const {
    title,
    _id,
    images,
    brand,
    price,
    rating,
    availableQuantity,
    description,
  } = product;
  const [newImgList, setNewImgList] = useState<string[]>(images);
  const { register, handleSubmit, formState } = useForm({
    mode:"onChange",
    defaultValues:{
      ...product
    }
  });

  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  const [sumbmitComplete, setSubmitComplete] = useState(false);
  console.log(formState)

  const handleUpdate = async (data: any) => {
    console.log(data);
    try {
      if (newImgList.length === 0) {
        toast.error("You must atleast add 1 image of your product!");
        return;
      }
      console.log(newImgList.filter((image) => image.length > 0 && image));
      const productData: IProduct = {
        title: data.title,
        images: newImgList.filter((image) => image.length > 0 && image),
        brand: data.brand,
        price: Number(data.price),
        availableQuantity: Number(data.availableQuantity),
        rating: Number(data.rating),
        description: data.description,
        _id,
      };
      console.log(productData);
      const updatedProduct = await updateProduct({
        data: productData,
        id: _id,
      });
      if (updatedProduct?.data) {
        setSubmitComplete(false);
        toast.success("Product updated successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={sumbmitComplete} onOpenChange={setSubmitComplete}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex hover:scale-110 transition-all items-center gap-2"
        >
          Edit Details
          <CiPen className="text-xl" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[800px] font-Untitled-Sans">
        <DialogHeader>
          <DialogTitle>Edit Product Details</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(handleUpdate)}
        >
          <div className="grid md:grid-cols-2 gap-4 py-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-medium">
                Title
              </label>
              <Input
                id="title"
                {...register("title")}
                defaultValue={title}
                placeholder="Enter your product's name"
                className="col-span-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="brand" className="font-medium">
                Brand
              </label>
              <Input
                id="brand"
                {...register("brand")}
                placeholder="Enter your product's brand name"
                defaultValue={brand}
                className="col-span-3"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="description" className="font-medium">
                Description
              </label>
              <Textarea
                id="description"
                {...register("description")}
                defaultValue={description}
                placeholder="Enter your product's description"
                className="col-span-3"
                rows={4}
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label htmlFor="brand" className="text-right font-medium">
                Product Image
              </label>
              <div>
                <ImageUploader
                  setNewImgList={setNewImgList}
                  images={newImgList}
                ></ImageUploader>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price" className=" font-medium">
                Price
              </label>
              <div className="relative">
                <Input
                  id="price"
                  {...register("price")}
                  type="number"
                  min={0}
                  step={0.01}
                  defaultValue={price}
                  placeholder="Enter your product's price"
                  className="col-span-3 pl-10"
                />
                <span className="absolute top-1/2 -translate-y-1/2 left-4">
                  $
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="availableQuantity" className=" font-medium">
                Available Quantity
              </label>
              <Input
                {...register("availableQuantity")}
                id="availableQuantity"
                min={0}
                step={1}
                type="number"
                defaultValue={availableQuantity}
                className=""
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={!(formState.isDirty)}>
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
