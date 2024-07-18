import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import api from '@/utils/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { z } from 'zod';

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(
      z.object({
        firstName: z.string().min(2).max(80),
        lastName: z.string().min(2).max(80),
        email: z.string().email(),
        password: z.string().min(6),
        linkedInProfile: z.string().optional().default(''),
        bio: z.string().optional().default(''),
      }),
    ),
  });

  const onValid = async (data) => {
    if (isLoading) return;
    setIsLoading(true);
    console.log(data);
    try {
      await api.post('/auth/register', data);
      redirect('/login');
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
                name="email"
                placeholder="Enter your email"
                type="email"
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
                name="password"
                placeholder="Enter your password"
                type="password"
                {...register('password', { required: 'Password is required' })}
              />
              {errors?.password && (
                <p className="text-red-500 dark:text-red-400">
                  {errors?.password.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input
                id="linkedin"
                name="linkedin"
                placeholder="Enter your LinkedIn profile URL"
                {...register('linkedin')}
              />
              {errors?.linkedin && (
                <p className="text-red-500 dark:text-red-400">
                  {errors?.linkedin.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                className="min-h-[100px]"
                name="bio"
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
