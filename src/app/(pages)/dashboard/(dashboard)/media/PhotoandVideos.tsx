'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CircleHelp, Download, Star, X, Play, Trash } from 'lucide-react';
import UploadDialog from './UploadDialog';
import Image from 'next/image';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { shimmer, toBase64 } from '@/utils/imageUtils';

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import { NextArrow, PrevArrow } from '@/components/SliderBtn';
import { Tooltip } from 'react-tooltip';
import { PopoverClose } from '@radix-ui/react-popover';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';

const MAX_UPLOADS = 100;

const PhotosAndVideos: React.FC = () => {
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useBodyScrollLock(isCarouselOpen);

  const [imageToDelete, setImageToDelete] = useState<number | null>(null);

  const handleUpload = (files: File[]) => {
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  const uploadCount = uploadedFiles.length;
  const uploadPercentage = Math.min(
    (uploadCount / MAX_UPLOADS) * 100,
    100
  ).toFixed(0);

  const handleDeleteImage = () => {
    if (imageToDelete !== null) {
      setUploadedFiles((prev) => prev.filter((_, i) => i !== imageToDelete));
      setImageToDelete(null);
    }
  };

  const openCarousel = (index: number) => {
    setCurrentIndex(index);
    setIsCarouselOpen(true);
  };

  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    initialSlide: currentIndex,
  };

  return (
    <>
      <Card className="relative inline-flex w-full max-w-[600px] bg-auth">
        <CardContent className="relative flex flex-col gap-3 p-4">
          <CardTitle>Your Photos & Videos</CardTitle>

          <CardDescription>
            <div>
              Here you can find all the photos and videos of your event. You can
              also upload your own photos and they'll show up on your{' '}
              <b>Photo Wall</b> &<b> Digital Album</b>.
            </div>
          </CardDescription>
          <div className="z-[1] mt-5 flex flex-wrap gap-3">
            <Button onClick={() => setIsDialogOpen(true)} className="w-fit">
              Upload Photos
            </Button>

            {uploadedFiles.length > 0 && (
              <Button variant={'joyoutline'} className="w-fit">
                <span>
                  <Download size={12} />
                </span>
                <span>Download All </span>
                <span
                  onClick={() => {
                    router.push('/dashboard/pricing');
                  }}
                  className="flex w-fit gap-1 rounded-lg bg-orange-100 px-1 py-[2px] text-xs"
                >
                  <span>
                    <Star size={10} fill="orange" stroke="transparent" />
                  </span>{' '}
                  Upgrade
                </span>
              </Button>
            )}
          </div>

          <UploadDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            onUpload={handleUpload}
          />

          <Image
            src="/photosnaps.png"
            alt="UploadIT"
            height={200}
            width={200}
            className="absolute bottom-0 right-0 h-14 w-auto rounded-lg object-cover sm:h-24"
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </CardContent>
      </Card>

      {/* Upload Limit Tracker */}
      <Card className="mt-7 inline-flex w-full text-sm sm:w-fit">
        <CardContent className="flex gap-5 p-4">
          <div className="size-11">
            <CircularProgressbar
              value={+uploadPercentage}
              text={`${uploadPercentage}%`}
              styles={buildStyles({
                textColor: '#EF4444',
                pathColor: '#EF4444',
                trailColor: '#E5E7EB',
                textSize: '28px',
              })}
            />
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1 text-sm font-bold">
                Upload Limit (Free Plan)
                <span>
                  <div>
                    <span id="help-tooltip">
                      <CircleHelp size={14} />
                    </span>

                    <Tooltip anchorSelect="#help-tooltip" className="z-[2]">
                      <div className="w-64 text-sm">
                        <p>
                          The amount of photos & videos you and your guests can
                          upload to the event. Once the amount has been reached,
                          no more uploads can be made by you and your guests.
                        </p>
                      </div>
                    </Tooltip>
                  </div>
                </span>
              </div>

              <p className="text-gray-500">
                {uploadPercentage} of 100 uploads used
              </p>
            </div>
            <Button
              onClick={() => {
                router.push('/dashboard/pricing');
              }}
              variant="outline"
            >
              Get More
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-4">
        {uploadedFiles.length > 0 && (
          <div className="flex flex-wrap content-start gap-1">
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="relative aspect-square w-[100px] cursor-pointer sm:w-40"
              >
                {file.type.startsWith('video/') ? (
                  <div
                    onClick={() => openCarousel(index)}
                    className="relative h-full w-full"
                  >
                    <video
                      className="h-full w-full rounded-lg object-cover"
                      loop
                      muted
                      preload="metadata"
                    >
                      <source
                        src={URL.createObjectURL(file)}
                        type={file.type}
                      />
                    </video>
                    <div className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-primary text-white">
                      <Play size={20} />
                    </div>
                  </div>
                ) : (
                  <Image
                    onClick={() => openCarousel(index)}
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    fill
                    className="rounded-lg object-cover"
                    placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}

                <Popover>
                  <PopoverTrigger asChild>
                    <button className="absolute right-1 top-1 rounded-full bg-red-500 p-1 text-white">
                      <X size={16} />
                    </button>
                  </PopoverTrigger>

                  <PopoverContent className="w-fit p-4 text-center">
                    <p className="mb-2 text-sm">Are you sure?</p>
                    <div className="flex items-center justify-center gap-2">
                      <PopoverClose>
                        <Button
                          onClick={() => setImageToDelete(null)}
                          variant="outline"
                        >
                          Cancel
                        </Button>
                      </PopoverClose>
                      <PopoverClose>
                        <Button
                          variant="destructive"
                          onClick={handleDeleteImage}
                        >
                          Ok
                        </Button>
                      </PopoverClose>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Carousel Component */}
      {isCarouselOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative m-auto w-11/12 max-w-md">
            <Slider {...settings}>
              {uploadedFiles.map((file, index) => (
                <div key={index} className="relative">
                  {file.type.startsWith('video/') ? (
                    <video
                      className="mx-auto size-full max-h-[88vh] w-[90vw] rounded-lg object-cover"
                      loop
                      controls
                      muted
                      preload="metadata"
                    >
                      <source
                        src={URL.createObjectURL(file)}
                        type={file.type}
                      />
                    </video>
                  ) : (
                    <Image
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      width={300}
                      height={300}
                      className="mx-auto max-h-[88vh] w-[90vw] rounded-lg object-cover object-top"
                      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}

                  <div className="absolute left-1 top-1 z-[3] flex flex-wrap gap-2">
                    <Button
                      size="icon"
                      variant="destructive"
                      className="MediaView_deleteButton__UwWQI MediaView_mediaButton__9RMa6"
                    >
                      <span>
                        <Trash />
                      </span>
                    </Button>

                    <Button
                      variant="secondary"
                      className="ant-dropdown-trigger MediaView_mediaButton__9RMa6"
                    >
                      <span className="anticon anticon-download">
                        <Download size={12} />
                      </span>{' '}
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <button
            onClick={() => setIsCarouselOpen(false)}
            className="absolute right-4 top-1 z-[3] rounded-full bg-white p-2"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </>
  );
};

export default PhotosAndVideos;
