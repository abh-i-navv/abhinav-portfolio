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
          repoLink="https://github.com/abh-i-navv/cloudflash-api"
          url="https://github.com/abh-i-navv/cloudflash-api"
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
          title="Chordly"
          description="Chordly is a highly accurate, real-time, browser-based guitar tuner built with React and the Web Audio API."
          stack="React.js, Typescript, Digital Signal Processing"
          repoLink="https://github.com/abh-i-navv/Chordly"
          url="https://chordly-nine.vercel.app/"
          image="/chordly.png"
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
      
    </div>
  );
}

export default App;
