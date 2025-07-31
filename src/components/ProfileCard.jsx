import { useState } from 'react';

const ProfileCard = () => {
  const [hovered, setHovered] = useState(false);

  const profileImageDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5pjH4M_xRft_zjjh8tmuH0xJUEYMapfqT9g&s";
  const profileImageHover = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOM8CIMHPbXxs0VXnZxz4Pok4r6APVE-z4_4ZFkZQ5dMJgWIdl6XqE__baEbK_Qo9k0aA&usqp=CAU";

  return (
    <div className="card">
      <div className="card-header">
      </div>

      <img
        src={hovered ? profileImageHover : profileImageDefault}
        alt="Profile"
        className="profile-image"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />

      <div className="card-content">
        <h2>Stelamae Sumalinog</h2>
        <p>
          <li>Kung san kaman ngayun, Mahal parin kita!</li>
        </p>

        <a href="https://www.facebook.com/jian.lexter" target="_blank" rel="noreferrer">
          <button className="follow-button">Follow ➕</button>
        </a>

        <div className="stats">
          <div><p>PROJECTS</p><strong>20</strong></div>
          <div><p>POSTS</p><strong>20</strong></div>
        </div>

        <h3 className="skill-title">SKILL &lt;/&gt;</h3>

        <div>
          <p>HTML</p>
        </div>
        <div>
          <p>CSS</p>
        </div>
        <div>
          <p>JavaScript</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
