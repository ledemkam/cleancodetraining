import { useEffect, useState } from "react"

export function useFetchProfile(profileId: number) {
  const [profileData, setProfileData] = useState()

  useEffect(() => {
   const fecthProfil = async () => {
      const response = await fetch(`/api/profiles/${profileId}`)
      const data = await response.json()
      setProfileData(data)
   }
    fecthProfil()
  }, [profileId])

  return profileData
}