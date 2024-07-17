import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Register() {
  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below to join our mentorship program.
        </p>
        <a className="mx-2" href="/sign-in">
          Already have an account? Sign in
        </a>
      </div>
      <div>
        <div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                type="password"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input
                id="linkedin"
                name="linkedin"
                placeholder="Enter your LinkedIn profile URL"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                className="min-h-[100px]"
                name="bio"
                id="bio"
                placeholder="Tell us about yourself"
                required
              />
            </div>
            <div className="flex justify-end items-center">
              <a href="../">
                <Button className="mr-2" type="button" variant="outline">
                  Back
                </Button>
              </a>
              <Button className="ml-2" type="submit">
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
