import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <div className="header__logo">Study: React Blog</div>
            <div>
                <Link to="/post/new">글쓰기</Link>
                <Link to="/posts">게시글</Link>
                <Link to="/profile">프로필</Link>
            </div>
        </header>
    );
}

export default Header;
