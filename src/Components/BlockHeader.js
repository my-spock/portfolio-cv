function BlockHeader() {
    return (
        <div className="block BlockHeader">
            <div className="row header">
                <div className="col name">
                    <h1 className={'title'}>Rebecca Plowman</h1>
                    <h2 className={'title'}>is a web developer.</h2>
                </div>

                <div className="col contact">
                    <a className={'button icon envelope-dots'} href="mailto:rplowman15@gmail.com">
                        Get In Touch
                    </a>
                </div>
            </div>

            <div className="row intro">
                <div className="intro-content">
                    <p>I started my career as a web developer at the end of 2018, and have enjoyed every coding challenge that it has offered me.</p>
                    <p>With two years of experience under my belt, I started looking for new employment in the competitive job market of 2021.
                        My skills attracted offers for front end dev positions, but I want to remain in full-stack development or move to back-end
                        development. At College of Western Idaho (CWI), I was able to learn more server-side skills. </p>
                    <p>I've added links to some of the projects I worked on during my semester at CWI.</p>
                </div>
                <div className={'project-links'}>
                    <div className={'swdv210'}>
                        <a className={'button'} href="https://bitbucket.org/rplowman1-admin/contactform/src/master/" target={'_blank'}>
                            Contact Form (PHP)
                        </a>
                    </div>
                    <div className={'swdv220'}>
                        <a className={'button'} href="https://bitbucket.org/rplowman1-admin/contactform/src/master/" target={'_blank'}>
                            Lending System (SQL)
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlockHeader;