import { Link } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import PostList from "components/PostList";
import Carousel from "components/Carousel";

function Home() {
    return (
        <>
            <Header />
            <Carousel />
            <PostList />
            <Footer />
        </>
    );
}

export default Home;
