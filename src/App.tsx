import { Hero } from './components/Hero';
import './App.css';
import Project from './components/Project';

function App() {
  const GITHUB_USERNAME = 'abh-i-navv';
  const NAME = 'Abhinav Sharma';

  return (
    <div className="app-container">
      <main>
        <Hero name={NAME} githubUsername={GITHUB_USERNAME} />

        <Project
          title="CloudFlash API"
          description="Lightweight, local ultra-fast API testing desktop application built for modern developers."
          stack="Go, Wails, React, TypeScript, SQLite, TailwindCSS, Shadcn UI"
          repoLink="https://github.com/abh-i-navv/go-canvas"
          url="https://github.com/abh-i-navv/go-canvas"
          image="/cloudflash.png"
        />

        <Project
          title="Go Canvas"
          description="Realtime shared whiteboard built for scribbling ideas and building something big."
          stack="Next.js, Typescript, Go, Websockets, Docker"
          repoLink="https://github.com/abh-i-navv/go-canvas"
          url="https://go-canvas.vercel.app/"
          image="/go-canvas.png"
        />

        <Project
          title="Blockchain Go"
          description="Developed a mini blockchain system in Go with mining, transaction validation, wallets, mempool, and SQLite-backed persistence."
          stack="Blockchain, Go, Gin, SQLite"
          repoLink="https://github.com/abh-i-navv/blockchain-go"
          url="https://github.com/abh-i-navv/blockchain-go"
          image="/blockchain.png"
        />

        <Project
          title="High Frequency Inverter"
          description="STM32-Controlled High-Frequency Converter"
          stack="Electronics, Power Electronics, ARM Cortex-M4, STM32CubeIDE, PCB Design, KiCAD"
          repoLink="https://github.com/abh-i-navv/High-Frequency-Inverter"
          url="https://github.com/abh-i-navv/High-Frequency-Inverter"
          image="/gate-driver.png"
        />

      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} {NAME}. Designed & Built with React.</p>
      </footer>
    </div>
  );
}

export default App;
