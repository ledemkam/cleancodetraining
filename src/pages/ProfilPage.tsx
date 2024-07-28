import PageLayout from "../components/PageLayout";
import ProfileData from "../components/ProfileData";
import { useFetchProfile } from "../hooks/useFetchProfile";

type ProfilePageProps = {
  profileId: number
}
export default function ProfilPage({ profileId }: ProfilePageProps) {
  const profileData = useFetchProfile(profileId)
  
  return (
    <PageLayout>
      <h1>ProfilPage</h1>
      <ProfileData data={profileData} />
    </PageLayout>
  )
}