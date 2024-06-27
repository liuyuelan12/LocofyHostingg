import { Button } from "@mui/material";
import Header from "../components/Header";
import HeroContainer from "../components/HeroContainer";
import SearchSectionHeader from "../components/SearchSectionHeader";
import CardList from "../components/CardList";
import Footer from "../components/Footer";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <HeroContainer />
      <main className="stays-section">
        <SearchSectionHeader />
        <CardList />
        <Button
          className="show-more-button"
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#00c29f",
            fontSize: "16",
            borderColor: "#00c29f",
            borderRadius: "6px",
            "&:hover": { borderColor: "#00c29f" },
            width: 147,
            height: 48,
          }}
        >
          Show more
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;