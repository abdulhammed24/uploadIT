'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Monitor, Projector, Tv } from 'lucide-react';
import QRCode from 'react-qr-code';
import { toPng } from 'html-to-image';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

const MainContent: React.FC = () => {
  const digitalAlbumUrl = 'https://app.uploadit.com/rsbbss';
  const photoWallUrl = 'https://app.uploadit.com/s/rsbbss';

  const downloadQrCode = (elementId: string, fileName: string) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    toPng(element, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = fileName;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Error downloading QR Code:', err);
      });
  };

  const [copied, setCopied] = useState<{ [key: string]: boolean }>({
    digitalAlbum: false,
    photoWall: false,
  });

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied((prevState) => ({ ...prevState, [key]: true }));
      setTimeout(
        () => setCopied((prevState) => ({ ...prevState, [key]: false })),
        1000
      );
    });
  };

  return (
    <section className="w-full">
      <div className="flex flex-col">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <div className="text-2xl font-extrabold">
            Abdulhammed and Omowunmi
          </div>
          <div className="w-fit rounded-lg bg-orange-100 px-2 py-[2px] text-xs font-medium">
            <span>
              Plan: <b>Free</b>
            </span>
          </div>
        </div>
        <div className="text-base text-neutral-400">
          Here you'll find everything you need to manage your party.
        </div>
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {/* Digital Album Card */}
        <Card className="flex w-full flex-col bg-orange-100">
          <CardContent className="mt-4 text-base">
            <CardTitle className="mb-2 text-lg font-extrabold">
              Your Digital Album
            </CardTitle>
            <CardDescription className="mb-4 text-muted-foreground">
              The digital album lets your guests upload new photos or view
              existing ones. Share it with your guests via a direct link or
              using its unique QR code (print it or display it digitally).
            </CardDescription>
            <div className="mt-8 flex w-full max-w-full flex-col gap-1 sm:items-center md:flex-row">
              <div className="relative flex w-full items-center">
                <Input
                  type="text"
                  className="w-full bg-white px-3 py-5 text-xs sm:text-base"
                  value={digitalAlbumUrl}
                  readOnly
                />
                <button
                  id="copy-digital-album"
                  className="absolute right-5 flex items-center"
                  onClick={() => handleCopy(digitalAlbumUrl, 'digitalAlbum')}
                >
                  <span className="text-xs font-bold text-primary sm:text-sm">
                    Copy
                  </span>
                </button>
                <Tooltip
                  anchorSelect="#copy-digital-album"
                  content={copied.digitalAlbum ? 'Copied!' : ''}
                  clickable={false}
                  delayShow={0}
                />
              </div>

              <Button
                variant="default"
                onClick={() => window.open(digitalAlbumUrl, '_blank')}
              >
                Open
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-evenly gap-3">
              <div className="flex w-[170px] flex-col items-center justify-center">
                <div className="flex items-center justify-center rounded border-4 border-primary bg-white p-1">
                  <QRCode
                    id="digitalAlbumQr"
                    value={digitalAlbumUrl}
                    size={134}
                  />
                </div>
                <Button
                  variant="joyoutline"
                  className="mt-2 font-semibold"
                  onClick={() =>
                    downloadQrCode('digitalAlbumQr', 'Digital_Album_QR.png')
                  }
                >
                  <span>Download QR Code</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Photo Wall Card */}
        <Card className="flex w-full flex-col bg-orange-100">
          <CardContent className="mt-4 text-base">
            <CardTitle className="mb-2 text-lg font-extrabold">
              Your Photo Wall
            </CardTitle>
            <CardDescription className="mb-4 text-muted-foreground">
              Every upload to your digital album automatically appears on your
              Photo Wall. Connect it to video projectors, TVs, or anywhere your
              guests can easily find it.
            </CardDescription>
            <div className="mt-8 flex w-full max-w-full flex-col gap-1 sm:items-center md:flex-row">
              <div className="relative flex w-full items-center">
                <Input
                  type="text"
                  className="w-full bg-white px-3 py-5 text-xs sm:text-base"
                  value={photoWallUrl}
                  readOnly
                />
                <button
                  id="copy-digital-album"
                  className="absolute right-5 flex items-center"
                  onClick={() => handleCopy(photoWallUrl, 'photoWall')}
                >
                  <span className="text-xs font-bold text-primary sm:text-sm">
                    Copy
                  </span>
                </button>
                <Tooltip
                  anchorSelect="#copy-digital-album"
                  content={copied.photoWall ? 'Copied!' : ''}
                  clickable={false}
                  delayShow={0}
                />
              </div>
              <Button
                variant="default"
                onClick={() => window.open(photoWallUrl, '_blank')}
              >
                Open
              </Button>
            </div>

            <div>
              <div className="mt-10 flex cursor-pointer items-center justify-center">
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-black shadow-sm">
                  <div className="absolute inset-0 bg-[#0000006b] bg-barCodeBg bg-cover bg-center bg-blend-multiply blur-md filter"></div>
                  <div className="relative py-5">
                    <p className="mb-2 text-sm font-semibold text-white">
                      Scan to view or add photos
                    </p>
                    <div className="flex items-center justify-center rounded border-4 border-primary bg-white p-1">
                      <QRCode
                        id="photoWallQr"
                        value={photoWallUrl}
                        size={134}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="shrink-0">Display on:</span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div>
                  <span id="projectors">
                    <Projector size={18} />
                  </span>

                  <Tooltip anchorSelect="#projectors" className="z-[2]">
                    <div className="text-xs">
                      <p>Video Projectors</p>
                    </div>
                  </Tooltip>
                </div>

                <div>
                  <span id="tv">
                    <Tv size={18} />
                  </span>

                  <Tooltip anchorSelect="#tv" className="z-[2]">
                    <div className="text-xs">
                      <p>TV & Large Screens</p>
                    </div>
                  </Tooltip>
                </div>

                <div>
                  <span id="computer">
                    <Monitor size={18} />
                  </span>

                  <Tooltip anchorSelect="#computer" className="z-[2]">
                    <div className="text-xs">
                      <p>Computer Screens</p>
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MainContent;
