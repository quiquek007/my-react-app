import React, { useEffect } from 'react';
import { ProfileApi, Profile as ProfileType } from '../../source/contacts/profile-api.tsx';
import { useParams } from 'react-router-dom';

export const Profile: React.FC = () => {
  const [profile, setProfile] = React.useState<ProfileType | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const api = new ProfileApi();

    api.getContact(+id)
      .then(data => setProfile(data))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <h2>Профіль кантакту</h2>
      {profile
        ? <>
          <p>Name: {profile!.name}</p>
          <p>Email: {profile!.email}</p>
          <p>Phone: {profile!.phone}</p>
        </>
        : isLoading ? <p>Loading...</p> : <p>Profile not found</p>
      }
    </>
  );
}