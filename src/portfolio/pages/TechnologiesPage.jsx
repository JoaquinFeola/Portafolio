import { TechnologyCard } from "../components/TechnologyCard";
import { Technologies } from "../helpers/technologies-arr";
import '../assets/pages-css/TechnologiesPage.css';

export const TechnologiesPage = () => {
  return (
    <div className="technologies-container">
        {
            Technologies.map(( technology ) => (
                <TechnologyCard
                    key={ technology.id } 
                    {...technology}
                />
            ))
        }
    </div>
  )
}
