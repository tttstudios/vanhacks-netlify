import React from 'react'
import Home from '../../pages/index'

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS();
    console.log(data);
    if (data) {
        return (
            <Home
                headerImage={data.headerImage}
                date={data.date}
                vanhacksLogo={data.vanhacksLogo}
                vanhacksSlogan={data.vanhacksSlogan}
                buttonTitle={data.buttonTitle}
                collaborators={data.collaborators}
                about={data.about}
                groups={data.groups}
                schedule={data.schedule}
                sponsors={data.sponsors}
                judges={data.judges}
                hosts={data.hosts}
                mentors={data.mentors}
                info={data.info}
            />
        )
    } else {
        return <div>Loading...</div>
    }
}

export default IndexPagePreview
