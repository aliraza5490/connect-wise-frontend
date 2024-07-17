import PageHeader from '@/components/PageHeader';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MagnetIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <PageHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 xl:grid-cols-[1fr_600px]">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find the perfect mentor for your growth
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Connect with experienced professionals who can guide you on
                  your journey to success.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    to="/register"
                  >
                    Join Now
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    to="/about"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
                height={800}
                src="/assets/images/work_7.png"
                width={800}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Mentors
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Connect with experienced professionals who can guide you on
                  your journey to success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="John Doe"
                        src={`https://i.pravatar.cc/150?img=${1}`}
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">John Doe</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Software Engineering Mentor
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      John has over 10 years of experience in software
                      engineering and is passionate about helping others grow
                      their skills. He&apos;s available for 1-on-1 mentoring
                      sessions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button>Book a Session</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="Jane Smith"
                        src={`https://i.pravatar.cc/150?img=${2}`}
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Jane Smith</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Product Management Mentor
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Jane has extensive experience in product management and
                      has helped numerous startups and companies launch
                      successful products. She&apos;s available for 1-on-1
                      mentoring sessions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button>Book a Session</Button>
                  </CardFooter>
                </Card>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="Michael Lee"
                        src={`https://i.pravatar.cc/150?img=${3}`}
                      />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Michael Lee</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Marketing Mentor
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Michael has over 15 years of experience in digital
                      marketing and has helped numerous businesses grow their
                      online presence. He&apos;s available for 1-on-1 mentoring
                      sessions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button>Book a Session</Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        alt="Sarah Kim"
                        src={`https://i.pravatar.cc/150?img=${4}`}
                      />
                      <AvatarFallback>SK</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-bold">Sarah Kim</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Career Transition Mentor
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      Sarah has helped numerous professionals navigate career
                      transitions and find their dream jobs. She&apos;s
                      available for 1-on-1 mentoring sessions.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button>Book a Session</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section id="browse-mentors" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Browse Mentors
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Find the perfect mentor for your needs and schedule a session
                  today.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Search by expertise or availability"
                    type="text"
                  />
                  <Button type="submit">Search</Button>
                </form>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      alt="John Doe"
                      src={`https://i.pravatar.cc/150?img=${5}`}
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">John Doe</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Software Engineering Mentor
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    John has over 10 years of experience in software engineering
                    and is passionate about helping others grow their skills.
                    He&apos;s available for 1-on-1 mentoring sessions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Book a Session</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      alt="Jane Smith"
                      src={`https://i.pravatar.cc/150?img=${6}`}
                    />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">Jane Smith</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Product Management Mentor
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Jane has extensive experience in product management and has
                    helped numerous startups and companies launch successful
                    products. She&apos;s available for 1-on-1 mentoring
                    sessions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Book a Session</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      alt="Michael Lee"
                      src={`https://i.pravatar.cc/150?img=${7}`}
                    />
                    <AvatarFallback>ML</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">Michael Lee</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Marketing Mentor
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Michael has over 15 years of experience in digital marketing
                    and has helped numerous businesses grow their online
                    presence. He&apos;s available for 1-on-1 mentoring sessions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Book a Session</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      alt="Sarah Kim"
                      src={`https://i.pravatar.cc/150?img=${8}`}
                    />
                    <AvatarFallback>SK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">Sarah Kim</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Career Transition Mentor
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Sarah has helped numerous professionals navigate career
                    transitions and find their dream jobs. She&apos;s available
                    for 1-on-1 mentoring sessions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Book a Session</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      alt="David Wang"
                      src={`https://i.pravatar.cc/150?img=${9}`}
                    />
                    <AvatarFallback>DW</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">David Wang</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Entrepreneurship Mentor
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    David has founded and scaled multiple successful startups.
                    He&apos;s passionate about helping aspiring entrepreneurs
                    turn their ideas into reality. He&apos;s available for
                    1-on-1 mentoring sessions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Book a Session</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      alt="Emily Chen"
                      src={`https://i.pravatar.cc/150?img=${10}`}
                    />
                    <AvatarFallback>EC</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold">Emily Chen</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      UX Design Mentor
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    Emily is a seasoned UX designer with a passion for creating
                    delightful user experiences. She&apos;s available for 1-on-1
                    mentoring sessions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>Book a Session</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        {/* a horizontal line fading on the both left and right corners */}
        <div className="w-full h-0.5 bg-gradient-to-r from-gray-100 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 bg-opacity-50" />
        <section className="py-12 my-10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Get the latest updates
                  </h1>
                  <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                    Subscribe to our newsletter to receive the latest updates.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2 mx-auto">
                  <form className="flex space-x-2">
                    <Input
                      className="max-w-lg flex-1 bg-gray-800 text-white border-gray-900"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <Button className="bg-white text-black" type="submit">
                      Join Now
                    </Button>
                  </form>
                  <p className="text-xs text-zinc-200 dark:text-zinc-100">
                    By subscribing, you agree to our{' '}
                    <a
                      className="underline underline-offset-2 text-white"
                      href="#"
                    >
                      Terms & Conditions
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 bg-gray-900 dark:bg-gray-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-xl flex items-center justify-center font-bold tracking-tighter">
              <MagnetIcon className="h-8 w-8" />
              Connect Wise
            </h2>
            <div className="text-gray-500 dark:text-gray-400">
              &copy; 2024 Connect Wise. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
