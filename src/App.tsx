export default function App() {
  const profile = [1,2,3,4,5]
  return (
    <div>
      {profile.map((id) => (
        <a href={`/profiles/${id}`}>Profil{id}</a>
      ))}
    </div>
  )
}