import { AboutMeSection } from "../../components/AboutMeSection"
import { BannerSection } from "../../components/BannerSection"
import { Header } from "../../components/Header"
import { TechSection } from "../../components/TechSection"
import { ProjectsSection } from "../../components/ProjectsSection"
import { Footer } from "../../components/Footer"

export function Pages() {

    return (
        <>
            <Header />
            <main>
                <BannerSection />
                <AboutMeSection />
                <TechSection />
                <ProjectsSection />
            </main>
            <Footer />
        </>
    )
}