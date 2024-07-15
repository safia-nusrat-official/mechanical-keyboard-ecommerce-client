import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
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
import { IProduct } from "@/types";
import { FaRegTrashAlt } from "react-icons/fa";
import { CiPen } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { useDeleteProductMutation, useUpdateProductMutation } from "@/redux/api/productApi";
import { toast, Toaster } from "sonner";
import { Link } from "react-router-dom";
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

const DashboardListItem = ({ product }: { product: IProduct }) => {
  const { title, availableQuantity, _id, images, brand, price } = product;
  const [deleteProduct, { isSuccess }] = useDeleteProductMutation();
  const handleDelete = async() => {
    try {
      deleteProduct(_id)
      if(isSuccess){
        toast.success("Product Deleted Successfully!")
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <TableRow>
      <div className="fixed bottom-0 h-screen right-0">
            <Toaster duration={2000} visibleToasts={1} position={"bottom-right"}></Toaster>
          </div>
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
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="hover:scale-125 flex gap-1 items-center transition-all">
                Delete
                <FaRegTrashAlt />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your product's data.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <UpdateModal product={product}></UpdateModal>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default DashboardListItem;

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
  const { register, handleSubmit } = useForm();
  const [newImgList, setNewImgList] = useState<string[]>(images);
  const [updateProduct, { isSuccess }] = useUpdateProductMutation();
  const [updateSuccessful, setUpdateSuccessful] = useState(false);
  const handleUpdate = async (data: any) => {
    try {
      const updatedProduct: IProduct = {
        title: data.title || title,
        images: newImgList,
        brand: data.brand || brand,
        price: Number(data.price) || price,
        availableQuantity: Number(data.availableQuantity) || availableQuantity,
        rating: Number(data.rating) || rating,
        description: data.description || description,
        _id,
      };
      console.log(updatedProduct);
      updateProduct({
        data: updatedProduct,
        id: _id,
      });
      if (isSuccess) {
        toast.success("Product updated successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={updateSuccessful} onOpenChange={setUpdateSuccessful}>
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
        <form onSubmit={handleSubmit(handleUpdate)}>
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
                <ImageWall
                  setNewImgList={setNewImgList}
                  images={newImgList}
                ></ImageWall>
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
                type="number"
                defaultValue={availableQuantity}
                className=""
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

const ImageWall = ({
  images,
  setNewImgList,
}: {
  images: string[];
  setNewImgList: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const imageList: UploadFile[] = images.map((image, index) => ({
    url: image,
    uid: `${index + 1}`,
    name: `image-${index + 1}`,
  }));
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState<UploadFile[]>(imageList);
  console.log(fileList);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleUpload = async (options: any) => {
    const file: File = options?.file;
    console.log(file instanceof File);
    const apiKey = import.meta.env.VITE_IMGBB_API;
    const formData = new FormData();

    formData.append("image", file);
    formData.append("key", apiKey);
    try {
      const res = await fetch(`https://api.imgbb.com/1/upload/key=${apiKey}`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      console.log(data);

      if (data?.success) {
        const newFileList: UploadFile[] = [
          ...fileList,
          {
            name: `image-${fileList.length + 1}`,
            url: data?.data?.url,
            uid: `${fileList.length + 1}`,
          },
        ];
        setFileList(newFileList);
        setNewImgList(newFileList.map((img) => img.url) as string[]);
      } else {
        console.log(`Image upload failed.`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );
  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        customRequest={handleUpload}
        onPreview={handlePreview}
      >
        {fileList.length >= 3 ? null : uploadButton}
      </Upload>

      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </>
  );
};

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
