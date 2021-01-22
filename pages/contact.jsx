import Head from 'next/head'
import { Layout } from '../layouts'
import { ContactForm } from '../components/contactForm'

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>KM - Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactForm />
    </Layout>
    )
}
