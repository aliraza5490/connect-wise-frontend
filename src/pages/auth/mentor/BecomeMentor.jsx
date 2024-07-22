import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import useUserStore from '@/store/userStore';
import api from '@/utils/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

export default function BecomeMentor() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const logOut = useUserStore((state) => state.logOut);
  const [isAvailable, setIsAvailable] = useState(false);

  const {
    register,
    formState: { errors },
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      linkedInProfile: '',
      bio: '',
      expertise: '',
      experience: 'beginner',
    },
    resolver: zodResolver(
      z.object({
        firstName: z.string().min(2).max(80),
        lastName: z.string().min(2).max(80),
        email: z.string().email(),
        password: z.string().min(6),
        linkedInProfile: z.string().optional().default(''),
        bio: z.string().min(2).max(500),
        expertise: z.string().min(2).max(80),
        experience: z.string().min(2).max(80),
      }),
    ),
  });

  const onValid = async (data) => {
    if (isLoading) return;
    console.log(data);
    if (!isAvailable) {
      toast.error('You must be available to mentor at least 2 hours per week.');
      return;
    }
    setIsLoading(true);
    try {
      console.log(data);
      logOut();
      const payload = { ...data };
      delete payload.availability;
      await api.post('/auth/become-mentor', data);
      navigate('/login', { replace: true, relative: false });
    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message ||
          'An error occurred. Please try again.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  console.log(errors);

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Become a Mentor</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below to become a mentor in our program.
        </p>
      </div>
      <div className="px-4 md:px-0">
        <div>
          <form onSubmit={handleSubmit(onValid)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Enter your First Name"
                required
                {...register('firstName', {
                  required: 'First Name is required',
                })}
              />
              {errors?.firstName && (
                <p className="text-red-500 dark:text-red-400">
                  {errors?.firstName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Enter your Last Name"
                required
                {...register('lastName', { required: 'Last Name is required' })}
              />
              {errors?.lastName && (
                <p className="text-red-500 dark:text-red-400">
                  {errors?.lastName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                {...register('email', { required: 'Email is required' })}
              />
              {errors?.email && (
                <p className="text-red-500 dark:text-red-400">
                  {errors?.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                {...register('password', { required: 'Password is required' })}
              />
              {errors?.password && (
                <p className="text-red-500 dark:text-red-400">
                  {errors?.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedInProfile">LinkedIn Profile</Label>
              <Input
                id="linkedInProfile"
                placeholder="Enter your LinkedIn profile URL"
                {...register('linkedInProfile')}
              />
              {errors?.linkedInProfile && (
                <p className="text-red-500 dark:text-red-400">
                  {errors?.linkedInProfile.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                className="min-h-[100px]"
                id="bio"
                placeholder="Tell us about yourself"
                {...register('bio')}
              />
              {errors?.bio && (
                <p className="text-red-500 dark:text-red-400">
                  {errors?.bio.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="expertise">Areas of Expertise</Label>
              <Input
                id="expertise"
                placeholder="e.g. Web Development, UX Design"
                required
                {...register('expertise', {
                  required: 'Expertise is required',
                })}
              />
              {errors?.expertise && (
                <p className="text-red-500 dark:text-red-400">
                  {errors?.expertise.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="experience">Years of Experience</Label>
              <Controller
                control={control}
                id="experience"
                name="experience"
                render={({ field }) => {
                  return (
                    <Select required onValueChange={field.onChange} {...field}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">1-3 years</SelectItem>
                        <SelectItem value="intermediate">4-6 years</SelectItem>
                        <SelectItem value="expert">7-10 years</SelectItem>
                        <SelectItem value="pro">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  );
                }}
              ></Controller>

              {errors?.experience && (
                <p className="text-red-500 dark:text-red-400">
                  {errors?.experience.message}
                </p>
              )}
            </div>
            <div className="flex items-center">
              <input
                id="availability"
                name="availability"
                className="mx-2"
                type="checkbox"
                onChange={() => {
                  console.log('here');
                  setIsAvailable((prev) => !prev);
                }}
              />
              <label
                htmlFor="availability"
                className="text-sm text-gray-500 dark:text-gray-400 hover:cursor-pointer"
              >
                I&apos;m available to mentor at least 2 hours per week.
              </label>
            </div>
            <div className="flex justify-end">
              <Button className="mr-2" type="button" variant="outline">
                Back
              </Button>
              <Button className="ml-2" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
