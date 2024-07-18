import PageHeader from '@/components/PageHeader';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Profile() {
  const mentor = {
    id: 9,
    name: 'David Wang',
    expertise: 'Entrepreneurship Mentor',
    description:
      "David has founded and scaled multiple successful startups. He's passionate about helping aspiring entrepreneurs turn their ideas into reality. He's available for 1-on-1 mentoring sessions.",
    avatar: 'https://i.pravatar.cc/150?img=9',
    reviews: 21,
    rating: 4.6,
    price: 55,
  };
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
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-background to-transparent p-6 sm:p-8">
            <div className="flex items-center gap-4 justify-start">
              <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
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
                <div className="flex flex-row items-center gap-4 text-gray-500 dark:text-gray-400 mr-auto">
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
                            index + 1 < mentor.rating ? 'currentColor' : 'none'
                          }
                        />
                      </svg>
                    ))}
                  </div>
                  <span>
                    {mentor.rating} ({mentor.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <button className="flex items-center gap-2 px-4 py-2 text-white bg-primary rounded-md">
                    <span>Message Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-8 p-4 sm:p-8">
          {/* Buy */}
          <div className="flex items-center justify-between mt-8">
            <div>
              <span className="text-2xl font-bold">${mentor.price}</span>
              <span className="text-gray-500 dark:text-gray-400">/hr</span>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-white bg-primary rounded-md">
              <span>Book a Session</span>
            </button>
          </div>
        </div>
        <div className="grid gap-8 p-4 sm:p-8">
          <h2 className="text-2xl font-bold">About</h2>
          <div>
            <p className="text-lg leading-loose text-muted-foreground">
              {mentor.description}
            </p>
          </div>
        </div>
        <div className="grid gap-8 p-4 sm:p-8">
          <h2 className="text-2xl font-bold">Reviews</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="https://i.pravatar.cc/150?img=8" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                  <div className="flex items-center gap-0.5 text-primary">
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <div className="text-sm leading-loose text-muted-foreground">
                  <p>
                    John is an amazing developer who has helped me with several
                    projects. His attention to detail and problem-solving skills
                    are top-notch. I highly recommend him to anyone looking for
                    a skilled and reliable developer.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Alex Smith</h3>
                  <div className="flex items-center gap-0.5 text-primary">
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <div className="text-sm leading-loose text-muted-foreground">
                  <p>
                    I&apos;ve had the pleasure of working with John on several
                    projects, and I can confidently say that he is one of the
                    most talented and reliable developers I&apos;ve ever
                    collaborated with. His attention to detail, problem-solving
                    skills, and ability to deliver high-quality work on time are
                    truly impressive.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">Emily Parker</h3>
                  <div className="flex items-center gap-0.5 text-primary">
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <div className="text-sm leading-loose text-muted-foreground">
                  <p>
                    John&apos;s expertise and professionalism have been
                    invaluable to the success of our project. He consistently
                    delivers high-quality work and is always willing to go the
                    extra mile to ensure that our requirements are met. I would
                    highly recommend him to anyone in need of a skilled and
                    reliable developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StarIcon({ filled = true, ...props }) {
  return (
    <svg
      {...props}
      className="h-4 w-4 text-yellow-500 dark:text-yellow-400"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2"
        fill={filled ? 'currentColor' : 'none'}
      />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
