import Link from 'next/link'
export default function EventText(){

    return(
        <section className="wrapper">
        <aside className="heading">
        <p className="date">12.3.–24.5.2022</p>
        <h1 className="title">Wohin mit dem Wissen in der Stadt?</h1> 
        <p className="label">Aufführung</p>
        <Link href="https://iba.heidelberg.de/de">
        <a className="link">Kommune Wissender Heidelberger</a>
        </Link>
        </aside>
        
        <h2 className="headline">Das Wissen und die Stadt</h2>

    
        <p>Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Curabitur blandit tempus porttitor. Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus.Morbi leo risus, porta ac consectetur ac, vestibulum at eros. </p>
            
            <p>
            Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>
            Cum sociis natoque penatibus et magnis dis parturient montes, <strong>nascetur ridiculus mus.</strong> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis ornare vel eu leo.</p>

            <aside className="subinfo">
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
    )
}