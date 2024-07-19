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
import { truncateText } from '@/utils/helpers';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const browseMentors = [
  {
    id: 5,
    name: 'John Doe',
    expertise: 'Software Engineering Mentor',
    description:
      "John has over 10 years of experience in software engineering and is passionate about helping others grow their skills. He's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=5',
    reviews: 24,
    rating: 4.8,
    price: 50,
  },
  {
    id: 6,
    name: 'Jane Smith',
    expertise: 'Product Management Mentor',
    description:
      "Jane has extensive experience in product management and has helped numerous startups and companies launch successful products. She's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=6',
    reviews: 13,
    rating: 3.9,
    price: 30,
  },
  {
    id: 7,
    name: 'Michael Lee',
    expertise: 'Marketing Mentor',
    description:
      "Michael has over 15 years of experience in digital marketing and has helped numerous businesses grow their online presence. He's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=7',
    reviews: 32,
    rating: 4.5,
    price: 40,
  },
  {
    id: 8,
    name: 'Sarah Kim',
    expertise: 'Career Transition Mentor',
    description:
      "Sarah has helped numerous professionals navigate career transitions and find their dream jobs. She's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=8',
    reviews: 17,
    rating: 4.2,
    price: 45,
  },
  {
    id: 9,
    name: 'David Wang',
    expertise: 'Entrepreneurship Mentor',
    description:
      "David has founded and scaled multiple successful startups. He's passionate about helping aspiring entrepreneurs turn their ideas into reality. He's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=9',
    reviews: 21,
    rating: 4.6,
    price: 55,
  },
  {
    id: 10,
    name: 'Emily Chen',
    expertise: 'UX Design Mentor',
    description:
      "Emily is a seasoned UX designer with a passion for creating delightful user experiences. She's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=10',
    reviews: 28,
    rating: 4.7,
    price: 60,
  },
];
export default function About() {
  const location = useLocation();
  const [search, setSearch] = useState(location.state.searchQuery || '');

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <PageHeader />
      <main className="flex-1">
        <section id="browse-mentors" className="w-full py-6">
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
                        {[...Array(5)].map((_, index) => (
                          <svg
                            className="h-4 w-4 text-yellow-500 dark:text-yellow-400"
                            fill={index < 4 ? 'currentColor' : 'none'}
                            key={index}
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2"
                              fill={
                                index + 1 < mentor.rating
                                  ? 'currentColor'
                                  : 'none'
                              }
                            />
                          </svg>
                        ))}
                      </div>
                      <span>
                        {mentor.rating} ({mentor.reviews} reviews)
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
                      <Button>View Profile</Button>
                      {/* Price /hr */}
                      <span className="text-gray-500 dark:text-gray-400">
                        ${mentor.price}/hr
                      </span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
