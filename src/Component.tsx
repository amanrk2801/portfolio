import { Layout } from './components/layout/Layout'
import { ProfileSidebar } from './components/sidebar/ProfileSidebar'
import { AboutMe } from './components/about/AboutMe'
import { ProjectsList } from './components/projects/ProjectsList'

export default function Component() {
  return (
    <Layout>
      <div className="flex flex-col lg:flex-row">
        <ProfileSidebar />
        <main className="flex-1 p-6 sm:p-8 bg-slate-900/60 overflow-y-auto">
          <AboutMe />
          <ProjectsList />
        </main>
      </div>
    </Layout>
  )
}