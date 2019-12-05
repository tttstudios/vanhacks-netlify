import CMS from 'netlify-cms-app'
import React from 'react'
import Home from '../pages'

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(['data']).toJS();
    console.log('hey');
    if (data) {
        return (
            <Home
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

CMS.registerPreviewTemplate('index', IndexPagePreview)