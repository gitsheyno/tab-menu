import { FaAngleDoubleRight } from 'react-icons/fa'

const Card = ({ title, company, dates, duties }) => {
    return (
        <>
            <h3 className="title">{title}</h3>
            <h4 className="name">{company}</h4>
            <p className="date">{dates}</p>
            {duties.map((item,index) => (
                
                <h5 className="info" key={index}><FaAngleDoubleRight/>{item}</h5>
            ))}
        </>
    )
}

export default Card
