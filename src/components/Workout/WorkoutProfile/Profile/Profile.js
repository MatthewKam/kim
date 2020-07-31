import React from 'react';
import { MaterialButton } from "../../../Button/Button";
import './Profile.scss';

export function Avatar(props){
  let imgSrc = require(`${props.imgUrl}`);
  return (
    <div className="Avatar">
      <div className="avatar-wrap">
        <img
					src={imgSrc}
					alt="Profile Pic"
					className="avatar"
				/>
      </div>
      <MaterialButton
				buttonText="Change"
				materialIcon="add_a_photo"
			/>
    </div>
  );
}

export function ProfileInfo({ userName, profilFirstName, profilLastName, userCity, userState, unitOfMeasurement, currentWeight }){
  return(
    <div className="Profile-Info">
      <h2>Hi {profilFirstName} {profilLastName}!</h2>
      <h3><span>Username: </span>{userName}</h3>
      <h4><span>Crushing it from: </span>{userCity}, {userState}</h4>
      <p><span>Current weight: </span>{currentWeight + ' ' + unitOfMeasurement}</p>
    </div>
  );
}


export function Profile() {
  return (
    <div className="Profile">
      <h1 className="sctn-title">Profile</h1>
      <Avatar
        imgUrl='./logo-avatar-male.jpg'
      />
      <ProfileInfo
        userName="notquitejapanese"
        profilFirstName="Matt"
        profilLastName="Kam"
        userCity="Venice"
        userState="CA"
        currentWeight="210"
        unitOfMeasurement="lbs"
      />
      <MaterialButton
				buttonText="Edit Info"
				materialIcon="edit"
			/>
    </div>
  );
}

export default Profile;