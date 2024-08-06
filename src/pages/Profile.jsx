import PageHeader from '@/components/PageHeader';
import Rating from '@/components/Rating';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import expLevels from '@/data/expLevels';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function Profile() {
  const location = useLocation();
  const mentor = location.state?.mentor;

  useEffect(() => {
    // scroll to top
    window.scrollTo(0, 0);
  }, []);

  if (!mentor) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <PageHeader />
      <div className="w-full container px-4 md:px-6">
        <div className="relative h-[300px] sm:h-[400px]">
          <img
            src="/cover-example.jpg"
            alt="Cover Image"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background to-transparent p-6 sm:p-8 flex items-end justify-between">
            <div className="flex items-center gap-4 justify-start">
              <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
                <AvatarImage alt={mentor.name} src={mentor.avatar} />
                <AvatarFallback>
                  {mentor.name.split(' ').map((name) => name[0])}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className=" rounded py-3 pl-5">
              <IconBrandLinkedin className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>
        <div className="grid gap-8 p-4 sm:p-8">
          {/* Buy */}
          <div className="flex items-center justify-between mt-8">
            <div>
              <h3 className="text-4xl mb-2 font-bold">{mentor.name}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {mentor.expertise}
              </p>
              <p className="text-primary mb-2">
                {expLevels[mentor.level]} years of experience
              </p>
              <div className="flex flex-row items-center gap-4 text-gray-500 dark:text-gray-400 mr-auto">
                <div className="flex items-center gap-1">
                  <Rating value={mentor.rating} />
                </div>
                <span>
                  {mentor.rating} ({mentor.reviews.length} reviews)
                </span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-primary rounded-md">
              <span>Subscribe for ${mentor.price}</span>
            </button>
          </div>
        </div>
        <div className="grid gap-4 p-4 sm:p-8">
          <h2 className="text-2xl font-bold">About</h2>
          <div>
            <p className="text-lg leading-normal text-muted-foreground">
              {mentor.description}
            </p>
          </div>
        </div>
        <div className="grid gap-8 p-4 sm:p-8">
          <h2 className="text-2xl font-bold">Reviews</h2>
          <div className="grid gap-6">
            {mentor.reviews.map((review) => (
              <div key={review.id} className="flex gap-4">
                <Avatar className="h-12 w-12 border">
                  <AvatarImage
                    src={`https://i.pravatar.cc/150?img=${Math.random() * 5}`}
                  />
                  <AvatarFallback>
                    {review.name.split(' ')[0][0]}
                    {review.name.split(' ')[1][0]}
                  </AvatarFallback>
                </Avatar>
                <div className="grid gap-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <div className="flex items-center gap-0.5 text-primary">
                      <Rating value={review.rating} />
                    </div>
                  </div>
                  <div className="text-sm leading-loose text-muted-foreground">
                    <p>{review.review}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
