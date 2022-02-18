function BlockPortfolio() {
    return (
        <div className="block BlockPortfolio">
            <div className={'linkWrap'}>
                <a className={'icon octocat'} href="https://github.com/my-spock" target={'_blank'}>
                    GitHub
                </a>
            </div>
            <div className={'linkWrap'}>
                <a className={'icon linkedin'} href="https://www.linkedin.com/in/rebecca-plowman-037056a9" target={'_blank'}>
                    LinkedIn
                </a>
            </div>
            <div className={'linkWrap'}>
                <a className={'icon bitbucket'} href="https://bitbucket.org/rplowman1-admin/workspace/projects/" target={'_blank'}>
                    BitBucket
                </a>
            </div>
        </div>
    );
}

export default BlockPortfolio;