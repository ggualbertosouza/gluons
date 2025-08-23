import ContactPage from "@/app/contact/_components/ContactPage";
import { ContactData } from "@/data/ContactData";

export const AboutPage = () => {
    return(
        <ContactPage contactData={ContactData.contactData}/>
    )
}

export default AboutPage;