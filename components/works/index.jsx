import styles from "./index.module.css";
import { WorksItem } from "./worksItem";

export function Works() {
  const worksCs = "/works/works-cs.jpg";
  const worksList = [
    {
      id: "01",
      content: {
        title: "チャットボット",
        description: "自己紹介をするチャットボットです。\n質問を選択していくと回答が表示され、対応した新たな質問が表示されます。\n私のプロフィール、チャットボットに使われている技術などの情報が得られます。\nReact、Material-UI、Firebaseを使用していて、Firebaseでは複数のサービスを組み込みました。",
        thumb: ["/works/chatbot/chatbot-chats.png", "/works/chatbot/chatbot-skills.png", "/works/chatbot/chatbot.svg"],
        links: {
          demo: {
            label: "DEMO",
            url: "https://chatbot-69892.web.app/",
          },
          github: {
            label: "GitHub",
            url: "https://github.com/ryuya416/chatbot",
          },
        },
        langImg: {
          react: "/skills/react.svg",
          material: "/skills/material-ui.svg",
          firebase: "/skills/firebase.svg",
        },
      },
    },
    {
      id: "02",
      content: {
        title: "LP",
        description: "このサイトです。\nNext.jsを学び始めたため最初のアウトプットとしてLP風のサイトを作成しました。SSGされているため最初の表示やContactページへの遷移が高速です。",
        thumb: ["/works/pf/lp-top.png", "/works/pf/lp-pf-01.png", "/works/pf/lp-pf-02.png", "/works/pf/lp-contact.png"],
        links: {
          demo: {
            label: "DEMO",
            url: "https://portfolio-km.vercel.app/",
          },
          github: {
            label: "GitHub",
            url: "https://github.com/kazuya-m/my-pf",
          },
        },
        langImg: {
          next: "/skills/nextjs.svg",
          react: "/skills/react.svg",
          js: "/skills/javascript.svg",
          html: "/skills/html.svg",
          css: "/skills/css.svg",
        },
      },
    },
  ];

  return (
    <div className={`main__wrapper ${styles.wrapper}`}>
      <h1 className={`contentTitle`}>WORKS</h1>
      <div className={`content`}>
        <ul className={styles.works__list}>
          {worksList.map(({ id, content }) => (
            <li key={id} className={styles.works__item}>
              <WorksItem id={id} content={content} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
