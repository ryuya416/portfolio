import Image from 'next/image'
import styles from '../footer/index.module.css'

export function Footer() {
  const poweredByList = [
    {skillName: "vercel", path: "/vercel.svg", width: "100", height: "70"},
    {skillName: "nextjs", path: "/skills/nextjs.svg", width: "70", height: "40"},
    {skillName: "react", path: "/skills/react.svg", width: "40", height: "40"},
    {skillName: "javascript", path: "/skills/javascript.svg", width: "40", height: "40"},
    {skillName: "html", path: "/skills/html.svg", width: "40", height: "40"},
    {skillName: "css", path: "/skills/css.svg", width: "40", height: "40"},
    {skillName: "github", path: "/skills/github.svg", width: "40", height: "40"}
  ]

  return (
    <footer className={styles.footer}>
      <ul className={styles.footer__list}>
      <span>Powered by{' '}</span>
        {poweredByList.map(( {skillName, path, width, height} ) => (
          // {console.log({skillName, path, width, height})}
          <li key={skillName} className={styles.footer__item}>
            <Image src={path} alt={skillName} width={width} height={height} />
          </li>
        ))}
      </ul>
      {/* <Image src="/skills/nextjs.svg" alt="Next.js Logo" width={40} height={40} />
      <Image src="/skills/react.svg" alt="React Logo" width={40} height={40} />
      <Image src="/skills/javascript.svg" alt="JavaScript Logo" width={40} height={40} />
      <Image src="/skills/html.svg" alt="HTML Logo" width={40} height={40} />
      <Image src="/skills/css.svg" alt="CSS Logo" width={40} height={40} />
      <Image src="/skills/github.svg" alt="GitHub Logo" width={40} height={40} /> */}
    </footer>
  )
}