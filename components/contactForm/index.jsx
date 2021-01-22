import { useState } from 'react'
import styles from './index.module.css'

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleTextChange = (e) => {
    setText(e.target.value);
  }

  const validateEmailFormat = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return regex.test(email);
  }


  const validateBlank = (...args) => {
    let isBlank = false;
    for (let i = 0; i < args.length; i=(i+1)|0) {
        if (args[i] === "") {
            isBlank = true;
        }
    }
    return isBlank;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const isBlank = validateBlank(name, email, text);
    const isEmailValidated = validateEmailFormat(email);
    
    if (isBlank) {
      alert('必須入力欄が空白です。');
      return false;
    } else if (!isEmailValidated) {
      alert('メールアドレスの書式が異なります。');
      return false;
    } else {
      const payload = {
        text: 'お問い合わせがありました\n'
            + '【お名前】: ' + name + '\n'
            + '【メールアドレス】: ' + email + '\n'
            + '【問い合わせ内容】\n' + text
      };
      fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
      }).then(() => {
        alert('送信が完了しました');
        setName("");
        setEmail("");
        setText("");
    })
  }
}

  return (
    <div className={styles.wrapper}>
      <h1 className={`contentTitle`}>CONTACT</h1>
      <div className={styles.form__container}>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className={`${styles.form__item} ${styles.form__name}`}>
            <input
              name="name"
              type="text"
              value={name}
              placeholder="お名前"
              onChange={(e)=>handleNameChange(e)}
            >
            </input>
          </div>
          <div className={`${styles.form__item} ${styles.form__email}`}>
            <input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e)=>handleEmailChange(e)}
            />
          </div>
          <div className={`${styles.form__item} ${styles.form__text}`}>
            <textarea
              type="text"
              value={text}
              placeholder="内容"
              onChange={(e)=>handleTextChange(e)}
            />
          </div>
          <div className={styles.submit}>
            <button className={`button`} type="submit" value="Submit">送信</button>
          </div>
        </form>
      </div>
    </div>
  )
}