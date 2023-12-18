import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";

export default function Home(){
    return(
    <>
        <HeroSection />
        <AboutMe />
        <MySkills />
        <MyPortfolio />
        <ContactMe />
    </>
    );
}