import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Loader2 } from "lucide-react";
import { User } from "../types/types";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().optional(),
  name: z
    .string({ message: "Name is required." })
    .min(1, "Name must be at least more than 1 characters long."),
  city: z
    .string({ message: "City is required." })
    .min(1, "City must be at least more than 1 characters long."),
  country: z
    .string({ message: "Country is required." })
    .min(1, "Address must be at least more than 1 characters long."),
});

type UserProfileFormTypes = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData: UserProfileFormTypes) => void;
  isLoading: boolean;
  currentUser: User;
};

const UserProfileForm = ({ onSave, isLoading, currentUser }: Props) => {
  const form = useForm<UserProfileFormTypes>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser
  });

  useEffect(() => {
    form.reset(currentUser)
  }, [currentUser, form])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="rounded-lg dark:bg-accent p-4 md:p-10 space-y-8 mt-8"
      >
        <div>
          <h2 className="font-heading text-2xl font-bold">User Profile Form</h2>
          <FormDescription>
            View or change your profile information here
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} autoComplete="off" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} autoComplete="off" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} autoComplete="off" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <p className="text-sm text-muted-foreground italic">
            The name in the avatar dropdown is directly associated with your Google account. It can vary with the name saved on the database.
        </p>
        {isLoading ? (
          <Button disabled>
            <Loader2 className="animate-spin text-purple-400 mr-2 size-1" />
            Saving
          </Button>
        ) : (
          <Button type="submit">Save</Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
