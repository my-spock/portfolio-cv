function BlockExperience() {
    return (
        <div className="block BlockExperience">
            <div className="wrap-betacanon">
                <a className={'subtitle icon betacanon'} href={'https://www.betacanon.com/'} target={'_blank'}>Beta Canon</a>
                <p><span className={'bold'}>Junior Web Developer: December 2018 - March 2021</span></p>
                <p>I worked with another team member to develop multiple apps using full-stack Javascript with the Meteor.js framework (React, Node.js, MongoDB). My role included learning about any new APIs or plug-ins to simplify development. Many projects included integrating AWS, such as DynamoDB, Lambda, S3, and SES.</p>
                <p>A few of the projects I was involved in are listed below.</p>
            </div>

            <div className="wrap-projects">
                <ul>
                    <li className="item">
                        <a className={'subtitle icon golowpro'} href={'https://golowpro.org/'} target={'_blank'}/>
                        <p>GoLowPro is a mobile application that helps people with special dietary needs to find appropriate foods nearby.</p>
                        <p>Google Maps is integrated with custom locations. The custom locations, and the foods available at each, are populated by both CSV upload and user submitted content.</p>
                    </li>
                    <li className="item">
                        <span className={'subtitle icon textual'}/>
                        <p>Textual is an app that allows a retailer to create campaigns that send SMS offers to subscribers.</p>
                        <p>Subscribers can order the product by replying to the SMS offer.</p>
                    </li>
                    <li className="item">
                        <a className={'subtitle icon kagedmuscle'} href={'https://www.kaged.com/pages/kaged-app'} target={'_blank'}/>
                        <p>A mobile application called Kaged Muscle, which allows users to follow weight training programs and track their progress.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BlockExperience;