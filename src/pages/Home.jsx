import NotificationHeader from "../component/NotificationHeader";
import Banner from "../component/Banner";
import OrgTrust from "../component/OrgTrust";
import Solution from "../component/Solution";
import Navbar from "../component/Navbar";
import Hub from "../component/Hub";
import Review from "../component/Review";
import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";

function Home() {
    return (
        <>
            <NotificationHeader></NotificationHeader>
            <Navbar></Navbar>
            <Banner></Banner>
            <OrgTrust></OrgTrust>
            <Solution></Solution>
            <Hub></Hub>
            <Review></Review>
            <Newsletter></Newsletter>
            <Footer></Footer>
            
        </>
    );
}

export default Home;