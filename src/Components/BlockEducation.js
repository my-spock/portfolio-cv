function BlockEducation() {
    return (
        <div className="block BlockEducation">
            <div className={'wrap-cwi'}>
                <h3 className="subtitle">College of Western Idaho</h3>
                <p className={'bold'}>2022</p>
                <p>Introduction to Server-Side Programming</p>
                <p>Fundamentals of Database Systems</p>
                <p>Advanced Web Application Development</p>
            </div>

            <div className={'wrap-bcw'}>
                <h3 className="subtitle">Boise CodeWorks</h3>
                <p className={'bold'}>2016</p>
                <p>Full Stack Web Development</p>
                <p>HTML5, CSS, Sass</p>
                <p>Javascript, C#, .Net</p>
            </div>

            <div className={'wrap-uis'}>
                <h3 className={'subtitle'}>University of Illinois at Springfield</h3>
                <p className={'bold'}>2014 - 2016</p>
                <p>Intro to Java - two semesters</p>
                <p>Discrete Functions</p>
                <p>Roboethics</p>
            </div>

            <div className={'wrap-ccc'}>
                <h3 className={'subtitle'}>Cecil Community College</h3>
                <p className={'bold'}>2006 - 2010</p>
                <p>Associate of Arts in General Studies</p>
            </div>
        </div>
    );
}

export default BlockEducation;