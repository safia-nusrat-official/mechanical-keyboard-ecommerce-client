import { Spin } from "antd";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageUploader } from "@/utils/imageUploader";
import { useCreateProductMutation } from "@/redux/api/productApi";
import { toast, Toaster } from "sonner";
import { IProduct } from "@/types";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [imageList, setImageList] = useState<string[]>([]);
  const [createProduct, { isLoading }] = useCreateProductMutation();
  console.log(isLoading);
  const navigate = useNavigate();
  console.log(imageList);

  const handleCreateProduct = async (data: any) => {
    console.log(imageList);
    try {
      if (imageList.length === 0 && !data.image) {
        toast.error("You must atleast add 1 image of your product!");
        return;
      }
      const product: Omit<IProduct, "_id"> = {
        title: data.title,
        images: [...imageList, data.image],
        brand: data.brand,
        price: Number(data.price),
        availableQuantity: Number(data.availableQuantity),
        rating: Number(data.rating),
        description: data.description,
      };
      const productCreated = await createProduct({
        data: product,
      });
      console.log(productCreated);
      console.log(isLoading);

      if (productCreated?.data) {
        toast.success("Product created successfully!");
        reset();

        setTimeout(
          () => navigate(`/products/${productCreated?.data?.data?._id}`),
          500
        );
      } else if (productCreated?.error) {
        // @ts-ignore
        const errorMessage = productCreated.error?.data?.data?.message;
        toast.error(errorMessage, {
          duration: 5000,
        });
      }
    } catch (err) {
      toast.error((err as { message?: string })?.message || "Unexpected Error");
      console.log(err);
    }
  };

  return (
    <section className="md:p-14 p-4">
      <Card>
        <div className="fixed bottom-0 h-screen right-0">
          <Toaster
            duration={2000}
            visibleToasts={1}
            position={"bottom-right"}
          ></Toaster>
        </div>
        {isLoading && (
          <div className="fixed overlay grid place-items-center h-screen w-screen bg-[#00000084] top-0 z-50 left-0">
            <LoadingSpinner></LoadingSpinner>
          </div>
        )}

        <form onSubmit={handleSubmit(handleCreateProduct)}>
          <CardHeader>
            <CardTitle>Add a Product</CardTitle>
            <CardDescription className="flex md:flex-row flex-col justify-between gap-4">
              <span>
                Fill up the following information to add a new product.
              </span>
              <Button className="md:block hidden" type="submit">
                Add Product
              </Button>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-6 gap-3">
              <div className="grid gap-3">
                <label
                  htmlFor="title"
                  className="text-zinc-700 font-medium after:content-['*'] after:text-red-500 after:ml-0.5"
                >
                  Product Name
                </label>
                <Input
                  id="title"
                  type="text"
                  className={` w-full`}
                  placeholder="Enter your product's name"
                  {...register("title", {
                    required: "Product Name is required.",
                  })}
                />
                {errors?.title && (
                  <span className="text-xs text-red-500">
                    {errors.title?.message as string}
                  </span>
                )}
              </div>
              <div className="grid gap-3">
                <label
                  htmlFor="brand"
                  className="after:content-['*'] after:text-red-500 after:ml-0.5 text-zinc-700 font-medium"
                >
                  Brand Name
                </label>
                <Input
                  id="brand"
                  type="text"
                  className="w-full"
                  placeholder="Enter your product's brand name"
                  {...register("brand", {
                    required: "Brand name is required.",
                  })}
                />
                {errors?.brand && (
                  <span className="text-xs text-red-500">
                    {errors.brand?.message as string}
                  </span>
                )}
              </div>
              <div className="grid gap-3">
                <label
                  htmlFor="description"
                  className="text-zinc-700 after:content-['*'] after:text-red-500 after:ml-0.5 font-medium"
                >
                  Product Description
                </label>
                <Textarea
                  id="description"
                  rows={10}
                  placeholder="Enter your product's description"
                  {...register("description", {
                    required: "Description is required.",
                  })}
                  className="min-h-32"
                />
                {errors?.description && (
                  <span className="text-xs text-red-500">
                    {errors.description?.message as string}
                  </span>
                )}
              </div>
              <div className="grid gap-3">
                <label
                  htmlFor="images"
                  className="text-zinc-700 after:content-['*'] after:text-red-500 after:ml-0.5 font-medium"
                >
                  Product Images
                </label>
                <p className="ant-upload-hint">
                  Only .png, .jpg or .jpeg formats supported
                </p>
                <ImageUploader
                  images={imageList}
                  setNewImgList={setImageList}
                />
                <p className="ant-upload-hint">
                  Or you can provide direct-links
                </p>
                <Input
                  id="image"
                  {...register("image")}
                  type="text"
                  className="w-full"
                  placeholder="https://www.keywizards.com/images/example-1.jpg"
                />
              </div>
              <div className="grid md:col-span-2 col-span-1 grid-cols-1 gap-6 md:grid-cols-3">
                <div className="grid gap-3">
                  <label
                    htmlFor="price"
                    className="text-zinc-700 after:content-['*'] after:text-red-500 after:ml-0.5 font-medium"
                  >
                    Product Price
                  </label>
                  <div className="relative h-fit">
                    <Input
                      id="price"
                      min="0"
                      step="0.01"
                      {...register("price", { required: "Price is required" })}
                      type="number"
                      placeholder="Enter your product's price"
                      className="col-span-3 pl-10"
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 left-4">
                      $
                    </span>
                  </div>

                  {errors?.price && (
                    <span className="text-xs text-red-500">
                      {errors.price?.message as string}
                    </span>
                  )}
                </div>
                <div className="grid gap-3">
                  <label
                    htmlFor="availableQuantity"
                    className="text-zinc-700 after:content-['*'] after:text-red-500 after:ml-0.5 font-medium"
                  >
                    Available Quantity
                  </label>
                  <Input
                    id="availableQuantity"
                    type="number"
                    min="0"
                    step="1"
                    className="w-full"
                    placeholder="Enter the available quantity"
                    {...register("availableQuantity", {
                      required: "Quantity is required.",
                    })}
                  />

                  {errors?.availableQuantity && (
                    <span className="text-xs text-red-500">
                      {errors.availableQuantity?.message as string}
                    </span>
                  )}
                </div>
                <div className="grid gap-3">
                  <label
                    htmlFor="rating"
                    className="text-zinc-700 after:content-['*'] after:text-red-500 after:ml-0.5 font-medium"
                  >
                    Product Rating
                  </label>
                  <div className="relative">
                    <Input
                      id="rating"
                      {...register("rating", {
                        required: "Rating is required",
                      })}
                      type="number"
                      min="1"
                      max="5"
                      step="0.1"
                      placeholder="Enter your product's rating"
                      className="col-span-3 pl-12"
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 left-4">
                      <Rate count={1} disabled defaultValue={1} />
                    </span>
                  </div>
                  {errors?.rating && (
                    <span className="text-xs text-red-500">
                      {errors.rating?.message as string}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6 flex">
              <Button className="md:hidden  block" type="submit">
                Save Changes
              </Button>
            </div>
          </CardContent>
        </form>
      </Card>
    </section>
  );
};

export default CreateProduct;

const LoadingSpinner = () => {
  const [auto] = useState(false);
  const [percent, setPercent] = useState(-50);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setPercent((v) => {
        const nextPercent = v + 5;
        return nextPercent > 150 ? -50 : nextPercent;
      });
    }, 100);
    return () => clearTimeout(timerRef.current);
  }, [percent]);

  const mergedPercent = auto ? "auto" : percent;

  return <Spin percent={mergedPercent} size="large" />;
};
