import Hero from '../components/Hero';
import Resume from '../components/Resume';
import Narrative from '../components/Narrative';
import PersonalDetails from '../components/PersonalDetails';
import Interests from '../components/Interests';
import TravelMap from '../components/TravelMap';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <main>
            <Hero />
            <Resume />
            <Narrative />
            <PersonalDetails />
            <Interests />
            <TravelMap />
            <Contact />
        </main>
    );
}
