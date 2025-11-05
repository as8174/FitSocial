import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";

import { Button } from "@/components/ui";
import { convertFileToUrl } from "@/lib/utils";

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string>(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      if (!acceptedFiles.length) return;

      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(convertFileToUrl(acceptedFiles[0]));
    },
    [fieldChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col items-center justify-center bg-dark-3 rounded-xl cursor-pointer p-5 lg:p-10 transition-all hover:bg-dark-4"
    >
      <input {...getInputProps()} className="hidden" />

      {fileUrl ? (
        <>
          <div className="w-full flex justify-center mb-4">
            <img src={fileUrl} alt="uploaded" className="rounded-xl max-h-96 object-contain" />
          </div>
          <p className="text-light-2 small-medium text-center">
            Click or drag photo to replace
          </p>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="/assets/icons/file-upload.svg"
            width={96}
            height={77}
            alt="file upload"
          />
          <h3 className="base-medium text-light-2">Drag photo here</h3>
          <p className="text-light-4 small-regular">SVG, PNG, JPG</p>
          <Button type="button" className="shad-button_dark_4">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
