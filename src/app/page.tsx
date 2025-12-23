import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className="text-4xl font-bold mb-4">Welcome to Next.js</h1>
        <p className="text-lg text-gray-600">Get started by editing src/app/page.tsx</p>
      </div>
    </main>
  )
}
