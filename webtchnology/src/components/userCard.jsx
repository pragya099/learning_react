import './userCard.css'

const UserCard = ({ image, cardClass }) => {
  return (
    <div className={`user-card ${cardClass}`}>
      <img src={image} alt="User" />
      <h2>User Card</h2>
      <p>This is a simple user card.</p>
    </div>
  )

}

export default UserCard
