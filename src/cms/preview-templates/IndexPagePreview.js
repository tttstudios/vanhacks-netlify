import CMS from 'netlify-cms-app'
import React from 'react'
import Home from '../../pages/index'

const ConsoleLog = ({ children }) => {
    console.log(children);
    return false;
};

const IndexPagePreview = ({ entry, getAssets }) => {
    const data = entry.getIn(['data']).toJS();

    if (data) {
        return (
            <ConsoleLog>HEY</ConsoleLog>
            <Home
                facebook={data.facebook}
                twitter={data.twitter}
                header={data.header}
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