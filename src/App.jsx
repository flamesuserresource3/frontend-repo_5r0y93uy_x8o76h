import Hero from './components/Hero'
import Philosophy from './components/Philosophy'
import CraftShowcase from './components/CraftShowcase'
import CommunityVisit from './components/CommunityVisit'

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Hero />
      <Philosophy />
      <CraftShowcase />
      <CommunityVisit />
      <footer className="bg-neutral-950 px-6 py-10 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} Ground Story Café — Every story begins with a cup.
      </footer>
    </div>
  )
}

export default App
