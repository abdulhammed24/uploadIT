import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, LockIcon } from 'lucide-react';

const Pricing = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-2xl font-extrabold">
              {' '}
              Upgrade Your UploadIT Event
            </div>
            <div className="mt-3 text-base text-neutral-400">
              Unlock the full potential of your party with UploadIT Plus/Pro to
              get the most out of your event.
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex max-w-[520px] flex-col gap-1 rounded-lg bg-[#fcffc7] px-4 py-2 text-center text-foreground">
              <div className="text-base font-bold">
                🔥 November Promotion - 50% off on all plans
              </div>
              <div className="text-sm">
                Prices already slashed by 50% - upgrade today to enjoy it! The
                active time{' '}
                <span className="border-b-2 border-dotted border-foreground font-semibold">
                  will only start on the event's actual date.
                </span>
              </div>
            </div>
            <div className="flex max-w-[520px] flex-col gap-1 rounded-lg bg-[#cbffe6] px-4 py-2 text-center text-foreground">
              <div className="text-base font-bold">✅ Money Back Guarantee</div>
              <div className="text-sm">
                if you ended up not using UploadIT at your party, we'll get your
                money back. No question asked.{' '}
                <Link target="_blank" href="" className="font-semibold">
                  Fair Refund Policy →
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-7 grid items-stretch gap-8 lg:grid-cols-3 lg:gap-4">
          <div className="relative flex justify-center">
            <Card className="flex flex-col hover:border-primary hover:bg-white">
              <CardHeader>
                <CardTitle className="text-center">
                  <h2 className="text-lg font-medium text-muted-foreground lg:text-3xl">
                    Free
                  </h2>
                  <div className="w-full text-center">
                    <div className="relative">
                      <span className="mr-[2px] mt-2 text-base font-semibold">
                        $
                      </span>
                      <span className="text-5xl font-extrabold">0</span>
                    </div>
                    <div className="text-center text-sm font-medium text-muted-foreground">
                      No CC required
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Up to&nbsp;<a>100 uploads</a>&nbsp;of photos &amp; videos
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Unlimited guests &amp; participants
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Uploads are&nbsp;<a>saved for 7 days</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Basic customization</a>&nbsp;options
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Active for 3 hours</a>&nbsp;from the event date
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      All uploads are saved in good quality
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="mt-auto justify-center">
                <div className="flex flex-col items-center justify-center">
                  <Button
                    variant={'outline'}
                    className="cursor-not-allowed"
                    disabled
                  >
                    <span>Your Current Plan</span>
                  </Button>
                  <div className="mt-3 flex items-center gap-1">
                    <LockIcon size={14} color="orange" />
                    <span className="text-sm text-muted-foreground">
                      Secure Payment
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="relative flex justify-center">
            <Card className="flex flex-col hover:border-primary hover:bg-white">
              <CardHeader>
                <CardTitle className="text-center">
                  <h2 className="text-lg font-medium text-muted-foreground lg:text-3xl">
                    Plus
                  </h2>
                  <div className="w-full text-center">
                    <div className="relative">
                      <span className="-ml-5 mr-3">
                        <span className="mr-[2px] mt-2 text-sm font-semibold text-muted-foreground">
                          $
                        </span>
                        <span className="text-2xl font-medium text-muted-foreground line-through">
                          79
                        </span>
                      </span>
                      <span className="mr-[2px] mt-2 text-base font-semibold">
                        $
                      </span>
                      <span className="text-5xl font-extrabold">39</span>
                      <span className="text-sm font-medium text-muted-foreground">
                        + taxes
                      </span>
                    </div>
                    <div className="text-center text-sm font-medium text-muted-foreground">
                      One-time fee
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Up to&nbsp;<a>500 uploads</a>&nbsp;of photos &amp; videos
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Unlimited guests &amp; participants
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Uploads are&nbsp;<a>saved for 90 days</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Better customization</a>&nbsp;options
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Active for 7 days</a>&nbsp;from the event date
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      All uploads are saved in High-Quality
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Download all photos &amp; videos at once
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="mt-auto justify-center">
                <div className="flex flex-col items-center justify-center">
                  <Button variant={'default'}>
                    <span>Upgrade to Plus</span>
                  </Button>
                  <div className="mt-3 flex items-center gap-1">
                    <LockIcon size={14} color="orange" />
                    <span className="text-sm text-muted-foreground">
                      Secure Payment
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -top-3 rounded-sm border border-primary bg-orange-50 px-2 py-1 text-center text-sm font-medium">
              🔥 Most Popular
            </div>
            <Card className="grid border border-primary bg-white hover:border-primary hover:bg-white">
              <CardHeader>
                <CardTitle className="text-center">
                  <h2 className="text-lg font-medium text-muted-foreground lg:text-3xl">
                    Pro
                  </h2>
                  <div className="w-full text-center">
                    <div className="relative">
                      <span className="-ml-5 mr-3">
                        <span className="mr-[2px] mt-2 text-sm font-semibold text-muted-foreground">
                          $
                        </span>
                        <span className="text-2xl font-medium text-muted-foreground line-through">
                          199
                        </span>
                      </span>
                      <span className="mr-[2px] mt-2 text-base font-semibold">
                        $
                      </span>

                      <span className="text-5xl font-extrabold">99</span>

                      <span className="text-sm font-medium text-muted-foreground">
                        + taxes
                      </span>
                    </div>
                    <div className="text-center text-sm font-medium text-muted-foreground">
                      One-time fee
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Unlimited uploads</a>&nbsp;of photos &amp; videos
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Unlimited guests &amp; participants
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Uploads are&nbsp;<a>saved for 1 year</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Advanced customization</a>&nbsp;options
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Active for 30 days</a>&nbsp;from the event date
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      All uploads are saved in High-Quality
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Download all photos &amp; videos at once
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Moderation tools</a>
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="mt-auto justify-center">
                <div className="flex flex-col items-center justify-center">
                  <Button variant={'default'}>
                    <span>Upgrade to Pro</span>
                  </Button>
                  <div className="mt-3 flex items-center gap-1">
                    <LockIcon size={14} color="orange" />
                    <span className="text-sm text-muted-foreground">
                      Secure Payment
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-5 flex text-center text-sm">
            <span>
              <b>*&nbsp;Prices are in US Dollars excluding taxes.</b> All plans
              are subject to our{' '}
              <Link
                target="_blank"
                href=""
                className="font-semibold text-primary"
              >
                Fair Usage Policy
              </Link>
              .
            </span>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="text-2xl font-extrabold">
              {' '}
              Upgrade Your UploadIT Event
            </div>
            <div className="mt-3 text-base text-neutral-400">
              Unlock the full potential of your party with UploadIT Plus/Pro to
              get the most out of your event.
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-2">
            <div className="flex max-w-[520px] flex-col gap-1 rounded-lg bg-[#fcffc7] px-4 py-2 text-center text-foreground">
              <div className="text-base font-bold">
                🔥 November Promotion - 50% off on all plans
              </div>
              <div className="text-sm">
                Prices already slashed by 50% - upgrade today to enjoy it! The
                active time{' '}
                <span className="border-b-2 border-dotted border-foreground font-semibold">
                  will only start on the event's actual date.
                </span>
              </div>
            </div>
            <div className="flex max-w-[520px] flex-col gap-1 rounded-lg bg-[#cbffe6] px-4 py-2 text-center text-foreground">
              <div className="text-base font-bold">✅ Money Back Guarantee</div>
              <div className="text-sm">
                if you ended up not using UploadIT at your party, we'll get your
                money back. No question asked.{' '}
                <Link target="_blank" href="" className="font-semibold">
                  Fair Refund Policy →
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-7 grid items-stretch gap-8 lg:grid-cols-3 lg:gap-4">
          <div className="relative flex justify-center">
            <Card className="flex flex-col hover:border-primary hover:bg-white">
              <CardHeader>
                <CardTitle className="text-center">
                  <h2 className="text-lg font-medium text-muted-foreground lg:text-3xl">
                    Free
                  </h2>
                  <div className="w-full text-center">
                    <div className="relative">
                      <span className="mr-[2px] mt-2 text-base font-semibold">
                        $
                      </span>
                      <span className="text-5xl font-extrabold">0</span>
                    </div>
                    <div className="text-center text-sm font-medium text-muted-foreground">
                      No CC required
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Up to&nbsp;<a>100 uploads</a>&nbsp;of photos &amp; videos
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Unlimited guests &amp; participants
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Uploads are&nbsp;<a>saved for 7 days</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Basic customization</a>&nbsp;options
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Active for 3 hours</a>&nbsp;from the event date
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      All uploads are saved in good quality
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="mt-auto justify-center">
                <div className="flex flex-col items-center justify-center">
                  <Button
                    variant={'outline'}
                    className="cursor-not-allowed"
                    disabled
                  >
                    <span>Your Current Plan</span>
                  </Button>
                  <div className="mt-3 flex items-center gap-1">
                    <LockIcon size={14} color="orange" />
                    <span className="text-sm text-muted-foreground">
                      Secure Payment
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="relative flex justify-center">
            <Card className="flex flex-col hover:border-primary hover:bg-white">
              <CardHeader>
                <CardTitle className="text-center">
                  <h2 className="text-lg font-medium text-muted-foreground lg:text-3xl">
                    Plus
                  </h2>
                  <div className="w-full text-center">
                    <div className="relative">
                      <span className="-ml-5 mr-3">
                        <span className="mr-[2px] mt-2 text-sm font-semibold text-muted-foreground">
                          $
                        </span>
                        <span className="text-2xl font-medium text-muted-foreground line-through">
                          79
                        </span>
                      </span>
                      <span className="mr-[2px] mt-2 text-base font-semibold">
                        $
                      </span>
                      <span className="text-5xl font-extrabold">39</span>
                      <span className="text-sm font-medium text-muted-foreground">
                        + taxes
                      </span>
                    </div>
                    <div className="text-center text-sm font-medium text-muted-foreground">
                      One-time fee
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Up to&nbsp;<a>500 uploads</a>&nbsp;of photos &amp; videos
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Unlimited guests &amp; participants
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Uploads are&nbsp;<a>saved for 90 days</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Better customization</a>&nbsp;options
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Active for 7 days</a>&nbsp;from the event date
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      All uploads are saved in High-Quality
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Download all photos &amp; videos at once
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="mt-auto justify-center">
                <div className="flex flex-col items-center justify-center">
                  <Button variant={'default'}>
                    <span>Upgrade to Plus</span>
                  </Button>
                  <div className="mt-3 flex items-center gap-1">
                    <LockIcon size={14} color="orange" />
                    <span className="text-sm text-muted-foreground">
                      Secure Payment
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute -top-3 rounded-sm border border-primary bg-orange-50 px-2 py-1 text-center text-sm font-medium">
              🔥 Most Popular
            </div>
            <Card className="grid border border-primary bg-white hover:border-primary hover:bg-white">
              <CardHeader>
                <CardTitle className="text-center">
                  <h2 className="text-lg font-medium text-muted-foreground lg:text-3xl">
                    Pro
                  </h2>
                  <div className="w-full text-center">
                    <div className="relative">
                      <span className="-ml-5 mr-3">
                        <span className="mr-[2px] mt-2 text-sm font-semibold text-muted-foreground">
                          $
                        </span>
                        <span className="text-2xl font-medium text-muted-foreground line-through">
                          199
                        </span>
                      </span>
                      <span className="mr-[2px] mt-2 text-base font-semibold">
                        $
                      </span>

                      <span className="text-5xl font-extrabold">99</span>

                      <span className="text-sm font-medium text-muted-foreground">
                        + taxes
                      </span>
                    </div>
                    <div className="text-center text-sm font-medium text-muted-foreground">
                      One-time fee
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Unlimited uploads</a>&nbsp;of photos &amp; videos
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Unlimited guests &amp; participants
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Uploads are&nbsp;<a>saved for 1 year</a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Advanced customization</a>&nbsp;options
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Active for 30 days</a>&nbsp;from the event date
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      All uploads are saved in High-Quality
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      Download all photos &amp; videos at once
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check color="orange" size={18} />
                    <span className="text-sm">
                      <a>Moderation tools</a>
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="mt-auto justify-center">
                <div className="flex flex-col items-center justify-center">
                  <Button variant={'default'}>
                    <span>Upgrade to Pro</span>
                  </Button>
                  <div className="mt-3 flex items-center gap-1">
                    <LockIcon size={14} color="orange" />
                    <span className="text-sm text-muted-foreground">
                      Secure Payment
                    </span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mt-5 flex text-center text-sm">
            <span>
              <b>*&nbsp;Prices are in US Dollars excluding taxes.</b> All plans
              are subject to our{' '}
              <Link
                target="_blank"
                href=""
                className="font-semibold text-primary"
              >
                Fair Usage Policy
              </Link>
              .
            </span>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Pricing;
