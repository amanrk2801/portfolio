import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar/Sidebar'
import { MainContent } from './components/MainContent/MainContent'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`flex flex-col lg:flex-row min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-900' : 'bg-background-start'} lg:p-6 overflow-hidden`}>
      <div className={`flex flex-col lg:flex-row w-full max-w-[1600px] mx-auto transition-colors duration-300 ${isDark ? 'bg-slate-800 border-slate-700' : 'bg-sidebar-bg border-slate-200/50'} lg:rounded-3xl shadow-2xl overflow-hidden border`}>
        <Sidebar isDark={isDark} />
        <main className={`flex-1 lg:p-10 p-6 transition-colors duration-300 ${isDark ? 'bg-slate-900 border-slate-700' : 'bg-[#F8F9FB] border-slate-200'} rounded-tl-3xl lg:border-l overflow-y-auto`}>
          <MainContent isDark={isDark} toggleTheme={toggleTheme} />
        </main>
      </div>
    </div>
  )
}

export default App;
