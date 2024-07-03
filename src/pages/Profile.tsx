import { Loader2 } from "lucide-react";
import { useGetUser, useUpdateUser } from "../api/UserAPI";
import UserProfileForm from "../forms/UserProfileForm";
import Layout from "../layouts/Layout";

const Profile = () => {
  const {updateUser, isLoading} = useUpdateUser()
  const {currentUser, isLoading: userLoading} = useGetUser()

  if(userLoading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Loader2 className="animate-spin text-purple-400 size-12"/>
        </div>
    )
  }

  if(!currentUser) {
    return <span>Unable to load current user. Try again later.</span>
  }

  return (
    <Layout>
      <UserProfileForm onSave={updateUser} isLoading={isLoading} currentUser={currentUser} />
    </Layout>
  );
};

export default Profile;
