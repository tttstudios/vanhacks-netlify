export default function Collaborators({ data }) {
    return (
        <div className="container">
            <p className="about-subheader-for-images">
                Hacking and caring with
                            </p>
            <div className="row">
                <div className="text-center">
                    {data.map((c, index) => (
                        <a key={index} href={c.href} target="_blank">
                            <img className="img-sponsor-small about-img-left"
                                src={c.image} alt={c.alt} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}