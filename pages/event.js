import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Container } from "../components/Container"
import {Header} from "../components/Header"
import {FabEvent, FABEvent} from "../components/FABEvent"
import Typo from "../styles/typo.module.css"
export default function Events() {
    return (
        <>
            <Head>
                <title>Event</title>
                <meta name="description" content="Modules" />
                <link rel="icon" href="/favicon.png" />
            </Head>

         
                <Header title="Events" variant="Subpages"/>
             
                
                <Container style={{}}>
               <FabEvent />
                <Image src="/images/placeholder.jpg"  width={2000} height={800}
        objectFit="cover" ></Image>
                <section className={Typo.wrapper}>
                <aside className={Typo.heading}>
                <p className={Typo.date}>12.3.–24.5.2022</p>
                <h1 className={Typo.title}>Wohin mit dem Wissen in der Stadt?</h1> 
                <p className={Typo.label}>Aufführung</p>
                <Link href="https://iba.heidelberg.de/de">
                <a className={Typo.link}>Kommune Wissender Heidelberger</a>
                </Link>
                </aside>
                
                <h2 className={Typo.headline}>Das Wissen und die Stadt</h2>
                <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
                    
                    <p>
                    Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>
                    Cum sociis natoque penatibus et magnis dis parturient montes, <strong>nascetur ridiculus mus.</strong> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

                    <aside className={Typo.subinfo}>
                    <h4>Subinformationen zur Veranstaltung</h4>
                    <ul>
                        <li>
                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
                        </li>
                         <li>
                            Facilisis in, egestas eget quam. 
                        </li>
                        <li>
                            dapibus ac facilisis in, egestas eget quam. Nullam quis 
                        </li>
                    </ul>
                    <h4>Weitere Informationen</h4>
                    <ul>
                        <li>
                            Cras justo odio, dapibus ac facilisis in, egestas eget quam. 
                        </li>
                         <li>
                            Facilisis in, egestas eget quam. 
                        </li>
                        </ul>
                    </aside>
                </section>
                </Container>
            
            
        </>
    )
}
