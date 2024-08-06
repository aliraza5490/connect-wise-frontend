import PageHeader from '@/components/PageHeader';
import Rating from '@/components/Rating';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import useUserStore from '@/store/userStore';
import { truncateText } from '@/utils/helpers';
import { MagnetIcon } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const featuredMentors = [
  {
    id: 1,
    name: 'John Doe',
    expertise: 'Software Engineering Mentor',
    description:
      "John has over 10 years of experience in software engineering and is passionate about helping others grow their skills. He's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=1',
    level: 'expert',
    rating: 4.8,
    price: 50,
    reviews: [
      {
        id: 1,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.5,
        review:
          'John is an amazing mentor! He helped me improve my coding skills and land my dream job as a software engineer.',
      },
      {
        id: 2,
        name: 'Michael Lee',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.8,
        review:
          'John is an excellent mentor who is always willing to go the extra mile to help his students succeed.',
      },
      {
        id: 3,
        name: 'Sarah Kim',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.2,
        review:
          'John is a great mentor who has helped me navigate my career in software engineering.',
      },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    expertise: 'Product Management Mentor',
    description:
      "Jane has extensive experience in product management and has helped numerous startups and companies launch successful products. She's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?2',
    level: 'intermediate',
    rating: 3.9,
    price: 30,
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.5,
        review:
          'Jane is an amazing mentor who has helped me grow my product management skills and land a job at a top tech company.',
      },
      {
        id: 2,
        name: 'Michael Lee',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.8,
        review:
          'Jane is a fantastic mentor who has helped me launch my product and grow my startup.',
      },
      {
        id: 3,
        name: 'Sarah Kim',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.2,
        review:
          'Jane is a great mentor who has helped me navigate my career in product management.',
      },
    ],
  },
  {
    id: 3,
    name: 'Michael Lee',
    expertise: 'Marketing Mentor',
    description:
      "Michael has over 15 years of experience in digital marketing and has helped numerous businesses grow their online presence. He's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=3',
    level: 'pro',
    rating: 4.5,
    price: 40,
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.5,
        review:
          'Michael is an amazing mentor who has helped me grow my marketing skills and land a job at a top tech company.',
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.8,
        review:
          'Michael is a fantastic mentor who has helped me launch my marketing campaigns and grow my business.',
      },
      {
        id: 3,
        name: 'Sarah Kim',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.2,
        review:
          'Michael is a great mentor who has helped me navigate my career in digital marketing.',
      },
    ],
  },
  {
    id: 4,
    name: 'Sarah Kim',
    expertise: 'Career Transition Mentor',
    description:
      "Sarah has helped numerous professionals navigate career transitions and find their dream jobs. She's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=4',
    level: 'beginner',
    rating: 4.2,
    price: 45,
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.5,
        review:
          'Sarah is an amazing mentor who has helped me transition into a new career and find my dream job.',
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.8,
        review:
          'Sarah is a fantastic mentor who has helped me navigate my career transition and find a job that I love.',
      },
      {
        id: 3,
        name: 'Michael Lee',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.2,
        review:
          'Sarah is a great mentor who has helped me transition into a new career and find my passion.',
      },
    ],
  },
];

const browseMentors = [
  {
    id: 5,
    name: 'John Doe',
    expertise: 'Software Engineering Mentor',
    description:
      "John has over 10 years of experience in software engineering and is passionate about helping others grow their skills. He's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=5',
    level: 'expert',
    rating: 4.8,
    price: 50,
    reviews: [
      {
        id: 1,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.5,
        review:
          'John is an amazing mentor! He helped me improve my coding skills and land my dream job as a software engineer.',
      },
      {
        id: 2,
        name: 'Michael Lee',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.8,
        review:
          'John is an excellent mentor who is always willing to go the extra mile to help his students succeed.',
      },
      {
        id: 3,
        name: 'Sarah Kim',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.2,
        review:
          'John is a great mentor who has helped me navigate my career in software engineering.',
      },
    ],
  },
  {
    id: 6,
    name: 'Jane Smith',
    expertise: 'Product Management Mentor',
    description:
      "Jane has extensive experience in product management and has helped numerous startups and companies launch successful products. She's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=6',
    level: 'intermediate',
    rating: 3.9,
    price: 30,
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.5,
        review:
          'Jane is an amazing mentor who has helped me grow my product management skills and land a job at a top tech company.',
      },
      {
        id: 2,
        name: 'Michael Lee',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.8,
        review:
          'Jane is a fantastic mentor who has helped me launch my product and grow my startup.',
      },
      {
        id: 3,
        name: 'Sarah Kim',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.2,
        review:
          'Jane is a great mentor who has helped me navigate my career in product management.',
      },
    ],
  },
  {
    id: 7,
    name: 'Michael Lee',
    expertise: 'Marketing Mentor',
    description:
      "Michael has over 15 years of experience in digital marketing and has helped numerous businesses grow their online presence. He's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=7',
    level: 'pro',
    rating: 4.5,
    price: 40,
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.5,
        review:
          'Michael is an amazing mentor who has helped me grow my marketing skills and land a job at a top tech company.',
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.8,
        review:
          'Michael is a fantastic mentor who has helped me launch my marketing campaigns and grow my business.',
      },
      {
        id: 3,
        name: 'Sarah Kim',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.2,
        review:
          'Michael is a great mentor who has helped me navigate my career in digital marketing.',
      },
    ],
  },
  {
    id: 8,
    name: 'Sarah Kim',
    expertise: 'Career Transition Mentor',
    description:
      "Sarah has helped numerous professionals navigate career transitions and find their dream jobs. She's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=8',
    level: 'beginner',
    rating: 4.2,
    price: 45,
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.5,
        review:
          'Sarah is an amazing mentor who has helped me transition into a new career and find my dream job.',
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.8,
        review:
          'Sarah is a fantastic mentor who has helped me navigate my career transition and find a job that I love.',
      },
      {
        id: 3,
        name: 'Michael Lee',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.2,
        review:
          'Sarah is a great mentor who has helped me transition into a new career and find my passion.',
      },
    ],
  },
  {
    id: 9,
    name: 'David Wang',
    expertise: 'Entrepreneurship Mentor',
    description:
      "David has founded and scaled multiple successful startups. He's passionate about helping aspiring entrepreneurs turn their ideas into reality. He's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=9',
    level: 'expert',
    rating: 4.6,
    price: 55,
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.5,
        review:
          'David is an amazing mentor who has helped me launch my startup and raise funding.',
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.8,
        review:
          'David is a fantastic mentor who has helped me turn my idea into a successful business.',
      },
      {
        id: 3,
        name: 'Michael Lee',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.2,
        review:
          'David is a great mentor who has helped me navigate the challenges of entrepreneurship.',
      },
    ],
  },
  {
    id: 10,
    name: 'Emily Chen',
    expertise: 'UX Design Mentor',
    description:
      "Emily is a seasoned UX designer with a passion for creating delightful user experiences. She's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=10',
    level: 'intermediate',
    rating: 4.7,
    price: 60,
    reviews: [
      {
        id: 1,
        name: 'John Doe',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.5,
        review:
          'Emily is an amazing mentor who has helped me improve my UX design skills and land a job at a top tech company.',
      },
      {
        id: 2,
        name: 'Jane Smith',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.8,
        review:
          'Emily is a fantastic mentor who has helped me create user-friendly designs for my projects.',
      },
      {
        id: 3,
        name: 'Michael Lee',
        avatar: 'https://i.pravatar.cc/150',
        rating: 4.2,
        review:
          'Emily is a great mentor who has helped me navigate my career in UX design.',
      },
    ],
  },
];

export default function Landing() {
  const pathnameID = window.location.hash;
  const params = useParams();
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);

  const handleSearch = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchQuery = formData.get('search');
    console.log('Search Query:', searchQuery);
    navigate(`/search`, {
      state: { searchQuery },
    });
  };

  const handleProfileView = (mentor) => {
    console.log('View Profile:', mentor);
    navigate(`/profile`, {
      state: { mentor },
    });
  };

  useEffect(() => {
    if (pathnameID === '#browse-mentors') {
      const browseMentors = document.getElementById('browse-mentors');
      browseMentors.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathnameID, params]);

  const joinLink = user
    ? user?.role == 'mentor'
      ? '/mentor/dashboard'
      : '/dashboard'
    : '/register';

  return (
    <div className="flex flex-col">
      <PageHeader />
      <main className="flex-1">
        <section className="w-full h-[100dvh] max-h-[1024px] grid place-content-center container px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Find the perfect mentor for your growth
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Connect with experienced professionals who can guide you on your
                journey to success.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to={joinLink}
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
        </section>
        <section className="w-full py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
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
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {featuredMentors.map((mentor) => (
                <Card key={mentor.id}>
                  <CardHeader className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                      <Avatar>
                        <AvatarImage alt={mentor.name} src={mentor.avatar} />
                        <AvatarFallback>
                          {mentor.name.split(' ').map((name) => name[0])}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold">{mentor.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          {mentor.expertise}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-4 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Rating value={mentor.rating} />
                      </div>
                      <span>
                        {mentor.rating} ({mentor.reviews.length} reviews)
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      {truncateText(mentor.description, 150)}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full flex items-center justify-between">
                      <a
                        href="javascript:void(0)"
                        onClick={() => handleProfileView(mentor)}
                      >
                        <Button>View Profile</Button>
                      </a>
                      {/* Price /month */}
                      <span className="text-gray-500 dark:text-gray-400">
                        ${mentor.price}/month
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="browse-mentors" className="w-full py-12 md:py-20">
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
                <form onSubmit={handleSearch} className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Search by expertise or availability"
                    type="text"
                    name="search"
                  />
                  <Button type="submit">Search</Button>
                </form>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              {browseMentors.map((mentor) => (
                <Card key={mentor.id}>
                  <CardHeader className="flex flex-col gap-2">
                    <div className="flex flex-row items-center gap-4">
                      <Avatar>
                        <AvatarImage alt={mentor.name} src={mentor.avatar} />
                        <AvatarFallback>
                          {mentor.name.split(' ').map((name) => name[0])}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold">{mentor.name}</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                          {mentor.expertise}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-4 text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Rating value={mentor.rating} />
                      </div>
                      <span>
                        {mentor.rating} ({mentor.reviews.length} reviews)
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-500 dark:text-gray-400">
                      {truncateText(mentor.description, 120)}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="w-full flex justify-between items-center">
                      <a
                        href="javascript:void(0)"
                        onClick={() => handleProfileView(mentor)}
                      >
                        <Button>View Profile</Button>
                      </a>
                      {/* Price /month */}
                      <span className="text-gray-500 dark:text-gray-400">
                        ${mentor.price}/month
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
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
