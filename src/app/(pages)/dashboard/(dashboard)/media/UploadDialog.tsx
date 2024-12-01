'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Loader } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const UploadDialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onUpload: (files: File[]) => void;
}> = ({ isOpen, onClose, onUpload }) => {
  const [files, setFiles] = useState<{ file: File; uploading: boolean }[]>([]);
  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const validFiles = acceptedFiles.filter(
      (file) => file.type.startsWith('image/') || file.type.startsWith('video/')
    );

    if (validFiles.length !== acceptedFiles.length) {
      setErrorMessage('Only images and videos are allowed.');
    } else {
      setErrorMessage(null);
      const newFiles = validFiles.map((file) => ({
        file,
        uploading: true,
      }));
      setFiles((prev) => [...prev, ...newFiles]);

      newFiles.forEach((_, index) => {
        setTimeout(() => {
          setFiles((prev) =>
            prev.map((item, i) =>
              i === prev.length - newFiles.length + index
                ? { ...item, uploading: false }
                : item
            )
          );
        }, 1500);
      });
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
      'video/*': [],
    },
  });

  const handleUpload = () => {
    onUpload(files.map((item) => item.file));
    setFiles([]);
    onClose();
  };

  const handleDelete = (index: number) => {
    setDeletingIndex(index);
    setTimeout(() => {
      setFiles((prev) => prev.filter((_, i) => i !== index));
      setDeletingIndex(null);
    }, 1000);
  };

  const allFilesUploaded = files.every((file) => !file.uploading);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="dialog-scroll">
        <DialogTitle>Upload Photos</DialogTitle>
        <div
          {...getRootProps()}
          className="cursor-pointer rounded-lg border border-dashed border-accent bg-transparent p-4 text-center hover:border-primary"
        >
          <input {...getInputProps()} />
          <div className="flex flex-col gap-2 py-12 text-sm text-neutral-400 sm:py-24">
            <p className="font-bold text-black">
              Click or drag files here to upload.
            </p>
            <p>
              Add photos or videos here, and they will show up in the slideshow.
            </p>
            <p>Number of uploads left in plan: {100 - files.length}</p>
          </div>
        </div>
        {errorMessage && (
          <div className="mt-2 text-sm text-red-500">{errorMessage}</div>
        )}
        <div className="mt-4">
          {files.map((item, index) => (
            <div
              key={index}
              className="mb-2 flex items-center justify-between rounded-md border p-1 text-xs sm:text-sm"
            >
              <span className="w-[25ch] truncate text-ellipsis">
                {item.file.name}
              </span>
              {item.uploading || deletingIndex === index ? (
                <Loader className="animate-spin text-gray-500" size={16} />
              ) : (
                <Button
                  onClick={() => handleDelete(index)}
                  variant="outline"
                  size="icon"
                  className="flex items-center"
                >
                  <X size={12} />
                </Button>
              )}
            </div>
          ))}
        </div>
        <Button
          onClick={handleUpload}
          disabled={!allFilesUploaded || files.length === 0}
        >
          Upload
        </Button>
        <Button onClick={onClose} variant="outline" className="ml-2">
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default UploadDialog;
