import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";

import { toast } from "react-toastify";
import { useContext } from "react";
import AuthContext from "context/AuthContext";

const onSignOut = async () => {
    try {
        const auth = getAuth(app);
        await signOut(auth);
        toast.success("로그아웃에 성공했습니다.");
    } catch (error: any) {
        toast.error(error?.code);
        console.log(error);
    }
};

function Profile() {
    const { user } = useContext(AuthContext);

    return (
        <div className="profile__box">
            <div className="flex__box-lg">
                <div className="profile__image" />
                <div>
                    <div className="profile__email">{user?.email}</div>
                    <div className="profile__name">{user?.displayName}</div>
                </div>
            </div>
            <Link to="/" className="profile__logout" onClick={onSignOut}>
                로그아웃
            </Link>
        </div>
    );
}

export default Profile;
