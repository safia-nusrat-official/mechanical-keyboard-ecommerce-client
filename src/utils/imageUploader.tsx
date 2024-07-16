import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Image, Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";
import { toast } from "sonner";

export const ImageUploader = ({
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
  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList);
    setNewImgList(newFileList.map((img) => img.url) as string[]);
  };

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };

  const handleUpload = async (options: any) => {
    const file: File = options?.file;
    const apiKey = import.meta.env.VITE_IMGBB_API;
    const formData = new FormData();
    console.log(file, apiKey);
    formData.append("image", file);
    formData.append("key", apiKey);
    try {
      const res = await fetch(`https://api.imgbb.com/1/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data?.success) {
        const newFileList: UploadFile[] = [
          ...fileList,
          {
            name: `image-${fileList.length + 1}`,
            url: data?.data?.url,
            uid: `${fileList.length + 1}`,
          },
        ];
        console.log(newFileList);
        setFileList(newFileList.filter((img) => img.url && img.url.length > 0));
        console.log(fileList);

        setNewImgList(
          newFileList
            .filter((img) => img.url && img.url.length > 0) // to make sure img url is not undefined or an empty string ""
            .map((img) => img.url) as string[]
        );
        console.log(images);
      } else {
        console.log(`Image upload failed.`);
      }
    } catch (error) {
      console.log(error);
      toast.error("Unexpected error occurred.");
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
        onChange={handleChange}
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
