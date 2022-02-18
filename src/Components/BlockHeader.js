function BlockHeader() {
    return (
        <div className="block BlockHeader">
            <div className="row header">
                <section className="col name">
                    <h1 className={'title'}>Rebecca Plowman</h1>
                    <h2 className={'title'}>is a web developer.</h2>
                </section>

                <section className="col contact">
                    <a className={'button icon envelope-dots'} href="mailto:rplowman15@gmail.com">
                        Get In Touch
                    </a>
                </section>
            </div>

            <div className="row intro">
                <section className="intro-content">
                        <p>I want to be challenged. I want to solve puzzles of logic. I want to spend an hour trying to
                            find
                            the problem with my code, only to discover that I was missing a curly bracket.</p>
                        <p>Okay, maybe not that last one, but you get the idea.</p>
                        <p>My one regret in life is not learning to code earlier. I spent too long wandering
                            from major to major, looking for that magical combination that would satisfy me
                            intellectually
                            and allow a creative outlet. Sometimes I am overwhelmed by how much there is to learn
                            in the world of web development, but mostly I can't wait to figure it all out!</p>
                        <p>Add me to your team. You won't regret it.</p>
                </section>
            </div>
        </div>
    );
}

export default BlockHeader;