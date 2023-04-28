
import './card.styles.css';

const Card = ({monsters}) => {
            const {name,id,email }= monsters;
            return(
                <div key={id} className="card-container">
                          <img 
                                alt = {`monster ${name}`} 
                                src ={`https://robohash.org/${id}/set=set2&size=180*180`} 
                            />
                          <h2>{name}</h2>
                          <p>{email}</p>
                      </div>
            )
}

export default Card;