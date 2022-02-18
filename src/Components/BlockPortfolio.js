function BlockPortfolio() {
    return (
        <div className="block BlockPortfolio">
            {/*<section className="row icon-links">*/}
                <a className={'icon-link'} href="https://github.com/my-spock">
                    <img className="octocat"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PEO-octocat-4.svg/1000px-PEO-octocat-4.svg.png"
                         alt="octo cat" />
                </a>
                <a className={'icon-link'} href="http://stackoverflow.com/users/6156733/vulcan-becca?tab=profile">
                    <img className="stack-overflow"
                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/2000px-Stack_Overflow_logo.svg.png"
                         alt="stack overflow" />
                </a>
            {/*</section>*/}
        </div>
    );
}

export default BlockPortfolio;