import './userCard.css'

const UserCard = (props) => {
  return (
    <div className={`user-card ${props.cardClass}`}>
      <img src={props.image} alt="User" style={props.style} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  )

}

export default UserCard
