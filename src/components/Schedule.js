import { PropTypes } from 'prop-types';

export default function Schedule({ data }) {
    return (
        <section id="schedule">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">{data.title}</h2>
                    </div>
                </div>
                <div className="row schedule-padding">
                    <div className="row">
                        {data.days.map((d, index) => {
                            return (
                                <div key={index} className="col-md-4">
                                    <div className="col schedule">
                                        <h4 className="date">{d.day}</h4>
                                        {
                                            d.timeBlocks.map((t, index) => {
                                                if (t.locationTitle) {
                                                    return (
                                                        <div key={index} className="schedule-event-section">
                                                            <p className="time">{t.time}</p>
                                                            <h4 className="title">{t.title}</h4>
                                                            <p className="location">
                                                                <a href={t.locationUrl} target="_blank">{t.locationTitle}</a>
                                                            </p>
                                                            <p className="description">{t.description}</p>
                                                        </div>
                                                    )
                                                } else {
                                                    return (
                                                        <div key={index} className="schedule-event-section">
                                                            <p className="time">{t.time}</p>
                                                            <h4 className="title">{t.title}</h4>
                                                            <p className="description">{t.description}</p>
                                                        </div>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

Schedule.propTypes = {
    data: PropTypes.objectOf(PropTypes.shape({
        title: PropTypes.string,
        days: PropTypes.arrayOf(
            PropTypes.objectOf(PropTypes.shape({
                day: PropTypes.string,
                timeBlocks: PropTypes.arrayOf(PropTypes.shape({
                    description: PropTypes.string
                }))
            }))
        )
    }))
};
